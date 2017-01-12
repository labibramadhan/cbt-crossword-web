angular.module('app')
  .run([
    '$rootScope',
    '$state',
    '$location',
    'AclService',
    'Authentication',
    async(
      $rootScope,
      $state,
      $location,
      AclService,
      Authentication
    ) => {
      let aclData = {
        guest: [
          'app',
          'app.login',
          'app.logout',
        ],
        guru: [
          'app',
          'app.dashboard',
          'app.logout',

          'app.question',
          'app.question.list',
          'app.question.create',
          'app.question.view',
          'app.question.update',

          'app.package',
          'app.package.list',
          'app.package.create',
          'app.package.view',
          'app.package.update',

          'app.package.schedule',
          'app.package.schedule.list',

          'app.grade',
          'app.grade.list',
          'app.grade.answer',
          'app.grade.answer.list',
          'app.grade.answer.view',
        ],
        admin: [
          'app',
          'app.dashboard',
          'app.logout',

          'app.user',
          'app.user.list',
          'app.user.create',
          'app.user.view',
          'app.user.update',
        ],
        participant: [
          'app',
          'app.dashboard',
          'app.logout',

          'app.test',
          'app.test.start',
          'app.test.finish',
        ],
      };

      AclService.setAbilities(aclData);

      AclService.attachRole('guest');

      await Authentication.authenticationCheck();
      
      $rootScope.$on('$stateChangeStart', function (e, to) {
        if (!AclService.can(to.name)) {
          e.preventDefault();
          $state.go('app');
        }
      });

      $rootScope.$on('$stateChangeSuccess', function (e, to) {
        if (!to.name || to.name === 'app') {
          if (AclService.hasRole('$authenticated')) {
            if ($state.current.name !== 'app.dashboard') $state.go('app.dashboard');
          } else {
            if ($state.current.name !== 'app.login') $state.go('app.login');
          }
        }
      });

      $rootScope.acl = AclService;
    },
  ]);