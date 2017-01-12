angular.module('app')
  .controller('QuestionUpdateController', [
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
    async(
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
        question: {},
      };

      vm.fields = angular.copy(vm.mainFields[0].templateOptions.fields);
      vm.model.question = await Question.findById({
        id: $stateParams.id,
      }).$promise;

      $rootScope.submit = async() => {
        await Question.update({
          where: {
            id: vm.model.question.id,
          },
        }, vm.model.question).$promise;
        $mdToast.show($mdToast.simple().textContent($translate.instant('success.question.updated')).position('bottom right'));
        $state.go('app.question.list');
      };
    },
  ]);
