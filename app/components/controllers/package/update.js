angular.module('app')
  .controller('PackageUpdateController', [
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
    'Question',
    async(
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
      Package,
      Question
    ) => {
      const vm = $scope;

      vm.mainFields = require('./model')({
        $scope,
        $mdDialog,
        $mdToast,
        $translate,
        Question,
      });

      vm.model = {
        package: {},
      };

      vm.fields = angular.copy(vm.mainFields[0].templateOptions.fields);
      const pkg = await Package.findById({
        id: $stateParams.id,
        filter: {
          include: [{
            relation: 'questions',
            scope: {
              order: 'created_at asc',
            },
          }],
        },
      }).$promise;
      vm.model.package = angular.copy(pkg);
      vm.originalPackage = angular.copy(pkg);

      $rootScope.submit = async() => {
        await Package.update({
          where: {
            id: vm.model.package.id,
          },
        }, vm.model.package).$promise;

        (async(removedRecords, newRecords, updatedRecords) => {
          for (const removedRecord of removedRecords) {
            await Package.questions.unlink({
              id: vm.model.package.id,
              fk: removedRecord.id,
            }).$promise;
          }

          for (const updatedRecord of updatedRecords) {
            await Question.update({
              where: {
                id: updatedRecord.id,
              },
            }, updatedRecord).$promise;
          }

          let newQuestions = _.reject(newRecords, (s) => {
            return _.get(s, 'id');
          });
          let oldQuestions = _.reject(newRecords, (s) => {
            return !_.get(s, 'id');
          });

          if (newQuestions.length) {
            await Package.questions.createMany({
              id: vm.model.package.id,
            }, newQuestions).$promise;
          }
          if (oldQuestions.length) {
            for (const oldQuestion of oldQuestions) {
              await Package.questions.link({
                id: vm.model.package.id,
              }, {
                fk: oldQuestion.id,
              }).$promise;
            }
          }

          if (!$window.testMode) {
            Package.createChangeStream();
          }
          $mdToast.show(
            $mdToast.simple()
            .textContent($translate.instant('success.package.updated'))
            .position('bottom right')
          );
          $state.go('app.package.list');
        }).apply({}, Utils.diffRecords(
          vm.originalPackage.questions,
          vm.model.package.questions,
          (record) => {
            return {
              id: record.id,
            };
          },
          (record) => {
            return _.isUndefined(record.id) || _.get(record, 'asNew');
          }
        ));
      };
    },
  ]);