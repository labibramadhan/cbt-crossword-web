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

      service.authenticationCheck = async() => {
        if (!localStorage.getItem('$LoopBack$accessTokenId')) {
          return false;
        }
        try {
          const whoAmI = await Person.whoAmI().$promise;
          AclService.flushRoles();
          $rootScope.currentUser = whoAmI;
          for (const role of whoAmI.roles) {
            AclService.attachRole(role);
          }
          $rootScope.menus = Menu.menus();
          $state.go('app.dashboard');
        } catch (e) {
          await service.logout();
          return false;
        }
      };

      service.login = async(model) => {
        if ((model.email || model.username) && model.password) {
          await Person.login(model).$promise;
          await service.authenticationCheck();
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