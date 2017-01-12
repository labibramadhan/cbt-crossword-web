angular.module('app')
  .factory('Authentication', [
    '$rootScope',
    '$state',
    '$http',
    'AclService',
    'Menu',
    'Person',
    (
      $rootScope,
      $state,
      $http,
      AclService,
      Menu,
      Person
    ) => {
      const service = {};

      service.authenticationCheck = async(isLogin = false) => {
        if (!localStorage.getItem('$LoopBack$accessTokenId')) {
          return false;
        }
        try {
          const whoAmI = await Person.whoAmI().$promise;
          AclService.flushRoles();
          $rootScope.currentUser = whoAmI;
          _.each(whoAmI.roles, (role, idx) => {
            AclService.attachRole(role);
            if (idx === whoAmI.roles.length - 1) {
              $rootScope.menus = Menu.menus();
              if (isLogin) {
                $state.go('app.dashboard');
              }
            }
          });
        } catch (e) {
          await service.logout();
          return false;
        }
      };

      service.login = async(model) => {
        if ((model.email || model.username) && model.password) {
          await Person.login(model).$promise;
          await service.authenticationCheck(true);
        }
      };

      service.logout = async() => {
        await Person.logout().$promise;
        AclService.flushRoles();
        AclService.attachRole('guest');
        $state.go('app.login');
      };

      return service;
    },
  ]);