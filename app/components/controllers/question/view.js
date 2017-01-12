angular.module('app')
  .controller('QuestionViewController', [
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

      $rootScope.backTo = 'app.question.list';
      vm.fields = angular.copy(vm.mainFields[0].templateOptions.fields);
      _.each(vm.fields, (field) => {
        if (_.has(field, 'templateOptions')) {
          field.templateOptions.disabled = true;
        }
      });
      vm.model.question = await Question.findById({
        id: $stateParams.id,
      }).$promise;
    },
  ]);
