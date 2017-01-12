angular.module('app')
  .controller('UserListController', [
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

      vm.state = $state;
      vm.crud = {
        page: 1,
        selected: [],
        query: {
          filter: {
            limit: 10,
          },
        },
        order: 'name',
        records: {},
        total: 0,
        search: {
          show: false,
          fields: [{
            key: 'name',
            type: 'input',
            templateOptions: {
              type: 'text',
              label: $translate.instant('user.name'),
            },
          }, {
            key: 'username',
            type: 'input',
            templateOptions: {
              type: 'text',
              label: $translate.instant('user.id'),
            },
          }, {
            key: 'email',
            type: 'input',
            templateOptions: {
              type: 'text',
              label: $translate.instant('user.email'),
            },
          }, {
            key: 'roles',
            type: 'select',
            templateOptions: {
              label: $translate.instant('user.role'),
              labelProp: 'label',
              valueProp: 'value',
              options: [{
                value: 'admin,guru,participant',
                label: $translate.instant('user.type.all'),
              }, {
                value: 'admin',
                label: $translate.instant('user.type.admin'),
              }, {
                value: 'guru',
                label: $translate.instant('user.type.guru'),
              }, {
                value: 'participant',
                label: $translate.instant('user.type.participant'),
              }],
            },
          }],
          values: {
            roles: 'admin,guru,participant',
          },
          form: {},
          options: {
            name: {
              operator: 'like',
              preprocess: (value) => {
                return '%' + value + '%';
              },
            },
            email: {
              operator: 'like',
              preprocess: (value) => {
                return '%' + value + '%';
              },
            },
            roles: {
              exclude: true,
            },
          },
        },
      };
      vm.initCrud = angular.copy(vm.crud);

      vm.delete = async() => {
        for (const item of vm.crud.selected) {
          await Person.deleteById({
            id: item.id,
          }).$promise;
        }

        vm.fetch();
        vm.crud.selected = [];
      };

      vm.confirmDelete = async(ev) => {
        let confirm = $mdDialog.confirm()
          .title($translate.instant('confirm.delete.title'))
          .textContent($translate.instant('confirm.delete.description'))
          .targetEvent(ev)
          .ok($translate.instant('button.delete'))
          .cancel($translate.instant('button.cancel'));
        await $mdDialog.show(confirm);
        await vm.delete();
        $mdToast.show(
          $mdToast.simple()
          .textContent($translate.instant('success.deleted'))
          .position('bottom right')
        );
      };

      vm.importDialog = (e) => {
        $mdDialog.show({
          controller: [
            '$scope',
            'ExcelImporter',
            'Person',
            ($scope, ExcelImporter, Person) => {
              const vmDialog = $scope;

              vmDialog.importModel = {};
              vmDialog.import = async() => {
                let createModel;
                switch (vmDialog.importModel.type) {
                  case 'admin':
                    createModel = Person.registerAdmin;
                    break;
                  case 'guru':
                    createModel = Person.registerGuru;
                    break;
                  case 'participant':
                    createModel = Person.registerParticipant;
                    break;
                }
                ExcelImporter.import({
                  create: createModel,
                  update: Person.update,
                  count: Person.count,
                }, {
                  justCall: true,
                  name: 'person',
                  rowStart: 1,
                  cellStart: 'A',
                  maps: {
                    [$translate.instant('user.name')]: 'name',
                    [$translate.instant('user.id')]: 'username',
                    [$translate.instant('user.email')]: {
                      column: 'email',
                      updateReference: true,
                    },
                    [$translate.instant('user.password')]: 'password',
                  },
                  preSave: async(record) => {
                    switch (vmDialog.importModel.type) {
                      case 'participant':
                        record.email = record.username + '@mailinator.com';
                        break;
                    }
                    return record;
                  },
                }, vmDialog.fetch);
              };
            },
          ],
          templateUrl: 'components/templates/user/import.html',
          targetEvent: e,
          scope: vm,
          preserveScope: true,
        });
      };

      vm.fetch = async() => {
        let filter = Utils.buildFilter(vm.initCrud, vm.crud);

        const count = await Person.countByRoles({
          roles: vm.crud.search.values.roles,
          where: filter.where,
        }).$promise;
        vm.crud.total = count.count;

        vm.promise = Person.findByRoles({
          filter: filter,
          roles: vm.crud.search.values.roles,
        }).$promise;

        vm.promise.then((res) => {
          vm.crud.records = res;
        });
      };

      vm.fetch();

      vm.clearSearch = () => {
        vm.crud.search.values = {
          roles: vm.initCrud.search.values.roles,
        };
        vm.fetch();
      };
    },
  ]);
