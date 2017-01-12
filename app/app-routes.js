angular.module('app')
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    (
      $stateProvider,
      $urlRouterProvider
    ) => {
      $stateProvider
        .state('app', {
          url: '/',
          views: {
            'layout@': {
              templateUrl: 'components/templates/layouts/admin.html',
            },
          },
        })

        .state('app.dashboard', {
          url: 'dashboard',
          controller: 'DashboardController as controller',
          templateUrl: 'components/templates/dashboard.html',
          icon: 'dashboard',
          title: 'menu.dashboard',
          menu: {
            sidebar: true,
          },
        })

        .state('app.login', {
          url: 'login',
          templateUrl: 'components/templates/login.html',
          controller: 'LoginController as controller',
        })

        .state('app.user', {
          url: 'user',
          abstract: true,
          template: '<ui-view/>',
          icon: 'people',
          title: 'menu.user',
          menu: {
            sidebar: true,
          },
        })
        .state('app.user.list', {
          url: '/list',
          templateUrl: 'components/templates/user/list.html',
          controller: 'UserListController as controller',
          icon: 'view_list',
          title: 'menu.user.list',
          menu: {
            sidebar: true,
          },
        })
        .state('app.user.create', {
          url: '/create',
          templateUrl: 'components/templates/user/create.html',
          controller: 'UserCreateController as controller',
          icon: 'playlist_add',
          title: 'menu.user.add',
          menu: {
            sidebar: true,
          },
        })
        .state('app.user.update', {
          url: '/{id:string}/update',
          templateUrl: 'components/templates/user/update.html',
          controller: 'UserUpdateController as controller',
          title: 'menu.user.edit',
        })
        .state('app.user.view', {
          url: '/{id:string}/view',
          templateUrl: 'components/templates/user/view.html',
          controller: 'UserViewController as controller',
          title: 'menu.user.view',
        })

        .state('app.package', {
          url: 'package',
          abstract: true,
          template: '<ui-view/>',
          icon: 'business_center',
          title: 'menu.package',
          menu: {
            sidebar: true,
          },
        })
        .state('app.package.list', {
          url: '/list',
          templateUrl: 'components/templates/package/list.html',
          controller: 'PackageListController as controller',
          icon: 'view_list',
          title: 'menu.package.list',
          menu: {
            sidebar: true,
          },
        })
        .state('app.package.create', {
          url: '/create',
          templateUrl: 'components/templates/package/create.html',
          controller: 'PackageCreateController as controller',
          icon: 'playlist_add',
          title: 'menu.package.add',
          menu: {
            sidebar: true,
          },
        })
        .state('app.package.update', {
          url: '/{id:string}/update',
          templateUrl: 'components/templates/package/update.html',
          controller: 'PackageUpdateController as controller',
          title: 'menu.package.edit',
        })
        .state('app.package.view', {
          url: '/{id:string}/view',
          templateUrl: 'components/templates/package/view.html',
          controller: 'PackageViewController as controller',
          title: 'menu.package.view',
        })

        .state('app.package.schedule', {
          url: '/schedule',
          abstract: true,
          template: '<ui-view/>',
        })
        .state('app.package.schedule.list', {
          url: '/{package_id:string}/list',
          templateUrl: 'components/templates/package/schedule/list.html',
          controller: 'PackageScheduleListController as controller',
          title: 'menu.package.schedule.list',
        })

        .state('app.question', {
          url: 'question',
          abstract: true,
          template: '<ui-view/>',
          icon: 'assignment',
          title: 'menu.question',
          menu: {
            sidebar: true,
          },
        })
        .state('app.question.list', {
          url: '/list',
          templateUrl: 'components/templates/question/list.html',
          controller: 'QuestionListController as controller',
          icon: 'view_list',
          title: 'menu.question.list',
          menu: {
            sidebar: true,
          },
        })
        .state('app.question.create', {
          url: '/create',
          templateUrl: 'components/templates/question/create.html',
          controller: 'QuestionCreateController as controller',
          icon: 'playlist_add',
          title: 'menu.question.add',
          menu: {
            sidebar: true,
          },
        })
        .state('app.question.update', {
          url: '/{id:string}/update',
          templateUrl: 'components/templates/question/update.html',
          controller: 'QuestionUpdateController as controller',
          title: 'menu.question.edit',
        })
        .state('app.question.view', {
          url: '/{id:string}/view',
          templateUrl: 'components/templates/question/view.html',
          controller: 'QuestionViewController as controller',
          title: 'menu.question.view',
        })

        .state('app.grade', {
          url: 'grade',
          abstract: true,
          template: '<ui-view/>',
          icon: 'assignment_turned_in',
          title: 'menu.grade',
          menu: {
            sidebar: true,
          },
        })
        .state('app.grade.list', {
          url: '/list',
          templateUrl: 'components/templates/grade/list.html',
          controller: 'GradeListController as controller',
          icon: 'view_list',
          title: 'menu.grade.list',
          menu: {
            sidebar: true,
          },
        })
        .state('app.grade.answer', {
          url: '/{packageSchedule_id:string}/answer',
          abstract: true,
          template: '<ui-view/>',
        })
        .state('app.grade.answer.list', {
          url: '/list',
          templateUrl: 'components/templates/grade/answer/list.html',
          controller: 'GradeAnswerListController as controller',
          title: 'menu.grade.answer.list',
        })
        .state('app.grade.answer.view', {
          url: '/{answer_id:string}/view',
          templateUrl: 'components/templates/grade/answer/view.html',
          controller: 'GradeAnswerViewController as controller',
          title: 'menu.grade.answer.view',
        })

        .state('app.test', {
          url: 'test',
          abstract: true,
          template: '<ui-view/>',
        })
        .state('app.test.start', {
          url: '/{code:string}/start',
          templateUrl: 'components/templates/test/start.html',
          controller: 'TestStartController as controller',
          title: 'menu.test.start',
        })
        .state('app.test.finish', {
          url: '/{id:string}/finish',
          templateUrl: 'components/templates/test/finish.html',
          controller: 'TestFinishController as controller',
          title: 'menu.test.finish',
        })

        .state('app.logout', {
          url: 'logout',
          icon: 'power_settings_new',
          title: 'menu.logout',
          menu: {
            sidebar: true,
          },
          resolve: {
            logout: ['Authentication', (Authentication) => {
              Authentication.logout();
            }],
          },
        });

      $urlRouterProvider.otherwise('/');
    },
  ]);