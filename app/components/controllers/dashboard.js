angular.module('app')
  .controller('DashboardController', [
    '$rootScope',
    '$scope',
    '$state',
    '$timeout',
    '$mdToast',
    '$translate',
    'AclService',
    'Utils',
    'Person',
    'Package',
    'PackageSchedule',
    'Question',
    (
      $rootScope,
      $scope,
      $state,
      $timeout,
      $mdToast,
      $translate,
      AclService,
      Utils,
      Person,
      Package,
      PackageSchedule,
      Question
    ) => {
      const vm = $scope;

      vm.model = {
        user: {},
        userFields: [{
          key: 'name',
          type: 'input',
          templateOptions: {
            type: 'text',
            required: true,
            label: $translate.instant('user.name'),
          },
        }, {
          key: 'email',
          type: 'input',
          templateOptions: {
            type: 'email',
            required: true,
            label: $translate.instant('user.email'),
          },
        }, {
          key: 'oldPassword',
          type: 'input',
          templateOptions: {
            type: 'password',
            label: $translate.instant('user.password'),
          },
        }, {
          key: 'password',
          type: 'input',
          templateOptions: {
            type: 'password',
            label: $translate.instant('user.newPassword'),
          },
          validators: {
            oldPasswordFilled: ($viewValue, $modelValue) => {
              let value = $modelValue || $viewValue;
              if (value) {
                return (
                  _.has(vm, 'model.user.oldPassword') &&
                  vm.model.user['oldPassword'].length
                );
              } else {
                return true;
              }
            },
          },
        }, {
          key: 'passwordConfirm',
          type: 'input',
          templateOptions: {
            type: 'password',
            label: $translate.instant('user.newPasswordConfirm'),
          },
          validators: {
            passwordMatch: ($viewValue, $modelValue) => {
              let value = $modelValue || $viewValue;
              if (
                _.has(vm, 'model.user.password') &&
                vm.model.user['password'].length
              ) {
                return value === vm.model.user['password'];
              } else {
                return true;
              }
            },
          },
        }],
        code: '',
      };

      $timeout(() => {
        if ($rootScope.currentUser) {
          vm.model.user.name = $rootScope.currentUser.name;
          vm.model.user.email = $rootScope.currentUser.email;
          vm.model.user.username = $rootScope.currentUser.username;
        }
      });

      if (AclService.hasRole('participant')) {
        vm.model.userFields[1].key = 'username';
        vm.model.userFields[1].templateOptions.label =
          $translate.instant('user.id');

        vm.doTest = async() => {
          await Utils.validateCode(vm.model.code, $rootScope.currentUser.id);
          $state.go('app.test.start', {
            code: vm.model.code,
          });
        };
      }

      vm.updateProfile = async() => {
        if (_.has(vm, 'model.user.oldPassword') && vm.model.user.oldPassword.length) {
          const correctPassword = await Person.checkPassword({
            password: vm.model.user.oldPassword,
          }).$promise;
          if (!correctPassword.result) {
            return $mdToast.show(
              $mdToast.simple()
              .textContent($translate.instant('error.user.profile.incorrectPassword'))
              .position('bottom right')
            );
          }
          if (vm.userForm.$valid) {
            const updated = await Person.updateAttributes({
              id: $rootScope.currentUser.id,
            }, vm.model.user).$promise;

            delete vm.model.user.oldPassword;
            delete vm.model.user.password;
            delete vm.model.user.passwordConfirm;

            $rootScope.currentUser.name = updated.name;
            $rootScope.currentUser.email = updated.email;
            $rootScope.currentUser.username = updated.username;

            $mdToast.show(
              $mdToast.simple()
              .textContent($translate.instant('success.user.profile.updated'))
              .position('bottom right')
            );
          }
        }
      };

      if (AclService.hasRole('guru')) {
        vm.chart1 = {
          type: 'bar',
          labels: [],
          series: [$translate.instant('total')],
          data: [
            [],
          ],
          scale: 'monthly',
          loaded: false,
          streams: [],
          change: async() => {
            vm.chart1.labels = [];
            vm.chart1.streams = [];
            vm.chart1.data[0] = [];
            vm.chart1.loaded = false;

            let dates = [];
            let range;
            let n;
            let i;
            let c = moment();
            switch (vm.chart1.scale) {
              case 'monthly':
                range = 4;
                for (i = range; i >= 0; i--) {
                  n = moment(c).subtract(i, 'months');
                  dates.push({
                    d: n,
                    start: n.format('YYYY-MM-01'),
                    end: n.endOf('month').format('YYYY-MM-DD'),
                  });
                }
                break;
              case 'daily':
                range = 6;
                for (i = range; i >= 0; i--) {
                  n = moment(c).subtract(i, 'days');
                  dates.push({
                    d: n,
                    start: n.format('YYYY-MM-DD 00:00:00'),
                    end: n.format('YYYY-MM-DD 23:59:59'),
                  });
                }
                break;
            }

            let idxChart1 = 0;
            for (const date of dates) {
              const packages = await Package.find({
                filter: {
                  where: {
                    and: [{
                      created_at: {
                        gte: date.start,
                      },
                    }, {
                      created_at: {
                        lte: date.end,
                      },
                    }],
                  },
                  fields: {
                    name: true,
                    id: true,
                  },
                },
              }).$promise;

              vm.chart1.streams[idxChart1] = [];
              vm.chart1.labels[idxChart1] = vm.chart1.scale === 'monthly' ? date.d.format('MMMM') : date.d.format('dddd');
              vm.chart1.data[0][idxChart1] = packages.length;
              if (packages.length) {
                for (const pkg of packages) {
                  const questionCount = await Package.questions.count({
                    id: pkg.id,
                  }).$promise;
                  vm.chart1.streams[idxChart1].push(Object.assign({},
                    pkg,
                    questionCount
                  ));
                }
              }

              idxChart1++;
            }
            vm.chart1.loaded = true;
          }
        };
        vm.chart1.change();

        vm.chart2 = {
          type: 'bar',
          labels: [],
          series: [$translate.instant('total')],
          data: [
            [],
          ],
          scale: 'monthly',
          loaded: false,
          change: async() => {
            vm.chart2.loaded = false;
            let dates = [];
            let range;
            let n;
            let i;
            let c = moment();
            switch (vm.chart2.scale) {
              case 'monthly':
                range = 4;
                for (i = range; i >= 0; i--) {
                  n = moment(c).subtract(i, 'months');
                  dates.push({
                    d: n,
                    start: n.format('YYYY-MM-01'),
                    end: n.endOf('month').format('YYYY-MM-DD'),
                  });
                }
                break;
              case 'daily':
                range = 6;
                for (i = range; i >= 0; i--) {
                  n = moment(c).subtract(i, 'days');
                  dates.push({
                    d: n,
                    start: n.format('YYYY-MM-DD 00:00:00'),
                    end: n.format('YYYY-MM-DD 23:59:59'),
                  });
                }
                break;
            }

            let idxChart2 = 0;
            for (const date of dates) {
              const questionCountChart2 = await Question.count({
                where: {
                  and: [{
                    created_at: {
                      gte: date.start,
                    },
                  }, {
                    created_at: {
                      lte: date.end,
                    },
                  }],
                },
              }).$promise;
              vm.chart2.labels[idxChart2] = vm.chart2.scale === 'monthly' ? date.d.format('MMMM') : date.d.format('dddd');
              vm.chart2.data[0][idxChart2] = questionCountChart2.count;
              vm.chart2.loaded = true;

              idxChart2++;
            }
          }
        };
        vm.chart2.change();
      }
    },
  ]);