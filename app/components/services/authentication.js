angular.module('app')
  .factory('Authentication', [
    '$rootScope',
    '$state',
    '$location',
    'AclService',
    'Menu',
    'Person',
    (
      $rootScope,
      $state,
      $location,
      AclService,
      Menu,
      Person
    ) => {
      const service = {};

      service.redirector = () => {
        if ($location.path() === '/') {
          if (AclService.hasRole('$authenticated')) {
            $state.go('app.dashboard');
          } else {
            $state.go('app.login');
          }
        } else if (_.has($rootScope, 'stateTransition.name') && !AclService.can($rootScope.stateTransition.name)) {
          $state.go('app');
        }
      }

      service.authorize = (state) => {
        if (state.name && !AclService.can(state.name)) {
          $state.go('app');
        }
      }

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
          service.redirector();
        } catch (e) {
          await service.logout();
          return false;
        }
      };

      service.login = async(model) => {
        if ((model.email || model.username) && model.password) {
          await Person.login(model).$promise;
          await service.authenticationCheck();
          $state.go('app');
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