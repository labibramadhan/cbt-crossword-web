angular.module('app')
  .controller('PackageCreateController', [
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
        packages: [{
          questions: [{}],
        }],
        package: {},
      };
      vm.fields = angular.copy(vm.mainFields);

      $rootScope.submit = async() => {
        for (const pack of vm.model.packages) {
          let res = await Package.create(pack).$promise;

          let newQuestions = _.reject(pack.questions, (s) => {
            return _.has(s, 'id');
          });
          let oldQuestions = _.reject(pack.questions, (s) => {
            return !_.has(s, 'id');
          });
          if (newQuestions.length) {
            for (const newQuestion of newQuestions) {
              await Package.questions.create({
                id: res.id,
              }, newQuestion).$promise;
            }
          }
          if (oldQuestions.length) {
            for (const oldQuestion of oldQuestions) {
              await Package.questions.link({
                id: res.id,
              }, {
                fk: oldQuestion.id,
              }).$promise;
            }
          }
        }
        if (!$window.testMode) {
          Package.createChangeStream();
        }
        $mdToast.show(
          $mdToast.simple()
          .textContent($translate.instant('success.package.created'))
          .position('bottom right')
        );
        $state.go('app.package.list');
      };
    },
  ]);