angular.module('app')
  .controller('QuestionListController', [
    '$rootScope',
    '$scope',
    '$state',
    '$stateParams',
    '$mdDialog',
    '$mdToast',
    '$translate',
    'Utils',
    'ExcelImporter',
    'Question',
    (
      $rootScope,
      $scope,
      $state,
      $stateParams,
      $mdDialog,
      $mdToast,
      $translate,
      Utils,
      ExcelImporter,
      Question
    ) => {
      const vm = $scope;

      vm.state = $state;
      vm.crud = {
        page: 1,
        selected: [],
        query: {
          filter: {
            limit: 10,
          },
        },
        order: 'question',
        records: {},
        total: 0,
        search: {
          show: false,
          fields: [{
            key: 'question',
            type: 'input',
            templateOptions: {
              type: 'text',
              label: $translate.instant('question.question'),
            },
          }, {
            key: 'answer',
            type: 'input',
            templateOptions: {
              type: 'text',
              label: $translate.instant('question.answer'),
            },
          }, {
            key: 'tag',
            type: 'input',
            templateOptions: {
              type: 'text',
              label: $translate.instant('question.tag'),
            },
          }],
          values: {},
          form: {},
          options: {
            question: {
              operator: 'like',
              preprocess: (value) => {
                return '%' + value + '%';
              },
            },
            answer: {
              operator: 'like',
              preprocess: (value) => {
                return '%' + value + '%';
              },
            },
            tag: {
              operator: 'like',
              preprocess: (value) => {
                return '%' + value + '%';
              },
            },

          },
        },
      };
      vm.initCrud = angular.copy(vm.crud);

      vm.delete = async() => {
        for (const item of vm.crud.selected) {
          await Question.deleteById({
            id: item.id,
          }).$promise;
        }
        vm.fetch();
        vm.crud.selected = [];
      };

      vm.confirmDelete = async(ev) => {
        let confirm = $mdDialog.confirm()
          .title($translate.instant('confirm.delete.title'))
          .textContent($translate.instant('confirm.delete.description'))
          .targetEvent(ev)
          .ok($translate.instant('button.delete'))
          .cancel($translate.instant('button.cancel'));
        await $mdDialog.show(confirm);
        await vm.delete();
        $mdToast.show(
          $mdToast.simple()
          .textContent($translate.instant('success.deleted'))
          .position('bottom right')
        );
      };

      vm.importDialog = (e) => {
        $mdDialog.show({
          controller: [
            '$scope',
            'ExcelImporter',
            'Question',
            ($scope, ExcelImporter, Question) => {
              const vmDialog = $scope;

              vmDialog.import = () => {
                ExcelImporter.import(Question, {
                  name: 'question',
                  rowStart: 1,
                  cellStart: 'A',
                  maps: {
                    'Pertanyaan': 'pertanyaan',
                    'Answer': 'jawaban',
                    'Tag': 'tag',
                  },
                }, vmDialog.fetch);
              };
            },
          ],
          templateUrl: 'components/templates/question/import.html',
          targetEvent: e,
          scope: vm,
          preserveScope: true,
        });
      };

      vm.fetch = async() => {
        let filter = Utils.buildFilter(vm.initCrud, vm.crud);

        const count = await Question.count(filter).$promise;
        vm.crud.total = count.count;

        vm.promise = Question.find({
          filter: filter,
        }, (res) => {
          vm.crud.records = res;
        }, (err) => {
          $rootScope.showErrorResponses(err);
        }).$promise;
      };

      vm.fetch();

      vm.clearSearch = () => {
        vm.crud.search.values = {};
        vm.fetch();
      };
    },
  ]);