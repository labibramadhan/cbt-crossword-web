angular.module('app')
  .controller('PackageListController', [
    '$rootScope',
    '$scope',
    '$state',
    '$stateParams',
    '$mdDialog',
    '$mdToast',
    '$translate',
    '$window',
    'Utils',
    'ExcelImporter',
    'Package',
    (
      $rootScope,
      $scope,
      $state,
      $stateParams,
      $mdDialog,
      $mdToast,
      $translate,
      $window,
      Utils,
      ExcelImporter,
      Package
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
        order: 'name',
        records: {},
        total: 0,
        search: {
          show: false,
          fields: [{
            key: 'name',
            type: 'input',
            templateOptions: {
              type: 'text',
              label: $translate.instant('package.name'),
            },
          }, {
            key: 'sanction',
            type: 'input',
            templateOptions: {
              type: 'text',
              label: $translate.instant('package.sanction'),
            },
          }],
          values: {},
          form: {},
          options: {
            name: {
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
          await Package.deleteById({
            id: item.id,
          }).$promise;
        }
        if (!$window.testMode) {
          Package.createChangeStream();
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
            'Package',
            ($scope, ExcelImporter, Package) => {
              const vmDialog = $scope;
              vmDialog.import = async() => {
                let importConfig = {
                  name: 'package',
                  rowStart: 1,
                  cellStart: 'A',
                  maps: {
                    [$translate.instant('package.name')]: 'name',
                    [$translate.instant('package.sanction')]: 'sanction',
                  },
                };
                ExcelImporter.import(Package, importConfig, vmDialog.fetch);
              };
            },
          ],
          templateUrl: 'components/templates/package/import.html',
          targetEvent: e,
          scope: vm,
          preserveScope: true,
        });
      };

      vm.importSoalDialog = (e, record) => {
        $mdDialog.show({
          controller: [
            '$scope',
            'ExcelImporter',
            'Question',
            'PackageQuestion',
            ($scope, ExcelImporter, Question, PackageQuestion) => {
              const vmDialog = $scope;

              vmDialog.import = async() => {
                let importConfig = {
                  name: 'question',
                  rowStart: 1,
                  cellStart: 'A',
                  maps: {
                    [$translate.instant('question.question')]: 'question',
                    [$translate.instant('question.answer')]: 'answer',
                    [$translate.instant('question.tag')]: 'tag',
                  },
                  rowProcessed: (obj) => {
                    let targetObj = {
                      question_id: obj.id,
                      package_id: record.id,
                    };
                    PackageQuestion.count({
                      where: targetObj,
                    }).$promise.then((resCheck) => {
                      if (!resCheck.count) {
                        PackageQuestion.create(targetObj);
                      }
                    });
                  },
                };
                ExcelImporter.import(Question, importConfig, vmDialog.fetch);
              };
            },
          ],
          templateUrl: 'components/templates/package/import-question.html',
          targetEvent: e,
          scope: vm,
          preserveScope: true,
        });
      };

      vm.fetch = async() => {
        let filter = Utils.buildFilter(vm.initCrud, vm.crud);

        const count = await Package.count(filter).$promise;
        vm.crud.total = count.count;

        vm.promise = Package.find({
          filter,
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
