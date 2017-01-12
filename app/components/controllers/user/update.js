angular.module('app')
  .controller('UserUpdateController', [
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

      vm.fields = angular.copy(vm.mainFields[0].templateOptions.fields);
      _.each(vm.fields, (field, idx) => {
        if (field.key === 'role') {
          vm.fields[idx].templateOptions.disabled = true;
        }
      });
      vm.model.user = await Person.findById({
        id: $stateParams.id,
      }).$promise;
      $rootScope.submit = async() => {
        await Person.updateAttributes({
          id: vm.model.user.id,
        }, vm.model.user).$promise;
        $mdToast.show(
          $mdToast.simple()
          .textContent($translate.instant('success.user.updated'))
          .position('bottom right')
        );
        $state.go('app.user.list');
      };
    },
  ]);
