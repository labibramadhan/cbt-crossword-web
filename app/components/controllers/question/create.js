angular.module('app')
  .controller('QuestionCreateController', [
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

      vm.mainFields = require('./model')($translate);
      vm.model = {
        questions: [{}],
      };
      vm.fields = angular.copy(vm.mainFields);

      $rootScope.submit = async() => {
        for (const question of vm.model.questions) {
          await Question.create(question).$promise;
        }
        $mdToast.show(
          $mdToast.simple()
          .textContent(
            $translate
            .instant('success.question.created')
          )
          .position('bottom right')
        );
        $state.go('app.question.list');
      };
    },
  ]);
