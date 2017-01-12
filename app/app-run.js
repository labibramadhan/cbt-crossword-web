angular.module('app')
  .run([
    '$rootScope',
    '$state',
    '$mdToast',
    '$translate',
    '$window',
    'Utils',
    'AclService',
    'Menu',
    async(
      $rootScope,
      $state,
      $mdToast,
      $translate,
      $window,
      Utils,
      AclService,
      Menu
    ) => {
      $rootScope.config = {
        menuTitle: await $translate('menu.main'),
        pageTitle: '',
      };

      $rootScope.excludeMenu = ['app.login', 'app.test.start'];
      $rootScope.excludeHeader = ['app.login'];

      $rootScope.state = $state;
      $rootScope.backParams = {};
      $rootScope.UCWords = Utils.UCWords;

      $rootScope.move = (route, params) => {
        $state.go(route, params);
      };

      $rootScope.$on('$stateChangeStart', (e, to) => {
        $rootScope.CRUDState = to.name.split('.').pop();
        $rootScope.showHeader = _.indexOf(
          $rootScope.excludeHeader, to.name
        ) == -1;
        $rootScope.showMenu = _.indexOf(
          $rootScope.excludeMenu, to.name
        ) == -1;
      });

      $rootScope.$on('$stateChangeSuccess', async(e, to) => {
        delete $rootScope.submit;
        delete $rootScope.submitText;
        delete $rootScope.submitIcon;
        delete $rootScope.backTo;

        if (_.has(to, 'title')) {
          $rootScope.config.pageTitle = await $translate(to.title);
        }
        $rootScope.includeMenu = angular.copy($rootScope.showMenu);
        $rootScope.toggleLeftMenu = () => {
          $rootScope.showMenu = $rootScope.showMenu ?
            false : _.indexOf($rootScope.excludeMenu, to.name) == -1;
        };
      });

      $rootScope.showErrorResponses = (err) => {
        let errorMessage;
        if (_.has(err, 'data.error.details')) {
          errorMessage = [];
          _.each(err.data.error.details.messages,
            function (message, field) {
              _.each(message, (m) => {
                errorMessage.push(field + ' ' + m);
              });
            });
          errorMessage = errorMessage.join(', ');
        } else if (_.has(err, 'data.error.message')) {
          errorMessage = err.data.error.message;
        } else if (err.data === null) {
          errorMessage = $translate.instant('error');
        }

        if (!_.isUndefined(errorMessage)) {
          $mdToast.show(
            $mdToast.simple()
            .textContent('Error: ' + errorMessage)
            .hideDelay(4000)
            .position('bottom right')
          );
        }
      };

      $rootScope.menus = Menu.menus();

      $rootScope.moment = moment;

      $window.addEventListener('unhandledrejection', function (event) {
        $rootScope.showErrorResponses(event.reason);
      });

      $rootScope.timeLabel = {
        hour: await $translate('time.hour'),
        minute: await $translate('time.minute'),
        second: await $translate('time.second'),
      };
      $rootScope.paginationLabel = {
        page: await $translate('pagination.page'),
        rowsPerPage: await $translate('pagination.rowsPerPage'),
        of: await $translate('pagination.of'),
      };
    },
  ]);