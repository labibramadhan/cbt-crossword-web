angular.module('app')
  .controller('UserCreateController', [
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
      Person
    ) => {
      const vm = $scope;

      vm.model = {
        users: [{}],
      };

      vm.fields = require('./model')({
        $translate,
      });

      $rootScope.submit = async() => {
        for (const user of vm.model.users) {
          switch (user.role) {
            case 'admin':
              await Person.registerAdmin(user).$promise;
              break;
            case 'guru':
              await Person.registerGuru(user).$promise;
              break;
            case 'participant':
              await Person.registerParticipant(
                Object.assign({}, user, {
                  email: user.username + '@die.life',
                })
              ).$promise;
              break;
          }
        }
        $mdToast.show(
          $mdToast.simple()
          .textContent($translate.instant('success.user.created'))
          .position('bottom right')
        );
        $state.go('app.user.list');
      };
    },
  ]);
