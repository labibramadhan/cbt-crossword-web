angular.module('app')
  .controller('UserViewController', [
    '$rootScope',
    '$scope',
    '$state',
    '$stateParams',
    '$mdDialog',
    '$mdToast',
    '$translate',
    'Utils',
    'ExcelImporter',
    'Person',
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
      Person
    ) => {
      const vm = $scope;

      vm.mainFields = require('./model')({
        $translate,
      });
      vm.model = {
        user: {},
      };

      $rootScope.backTo = 'app.user.list';
      vm.fields = angular.copy(vm.mainFields[0].templateOptions.fields);
      vm.fields = _.reject(vm.fields, (field) => {
        return field.key === 'password';
      });
      _.each(vm.fields, (field) => {
        if (_.has(field, 'templateOptions')) {
          field.templateOptions.disabled = true;
        }
      });
      vm.model.user = await Person.findById({
        id: $stateParams.id,
      }).$promise;
    },
  ]);
