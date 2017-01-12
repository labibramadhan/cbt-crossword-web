angular.module('app')
  .controller('GradeListController', [
    '$rootScope',
    '$scope',
    '$state',
    '$stateParams',
    '$mdDialog',
    '$mdToast',
    '$translate',
    '$window',
    'Utils',
    'PackageSchedule',
    'Answer',
    (
      $rootScope,
      $scope,
      $state,
      $stateParams,
      $mdDialog,
      $mdToast,
      $translate,
      $window,
      Utils,
      PackageSchedule,
      Answer
    ) => {
      const vm = $scope;

      vm.state = $state;
      vm.crud = {
        page: 1,
        selected: [],
        query: {
          filter: {
            include: [{
              relation: 'package',
            }],
            limit: 10,
          },
        },
        order: '-start',
        records: {},
        total: 0,
        search: {
          show: false,
          fields: [{
            key: 'name',
            type: 'input',
            templateOptions: {
              type: 'text',
              label: $translate.instant('package.schedule.name'),
            },
          }, {
            key: 'code',
            type: 'input',
            templateOptions: {
              type: 'text',
              label: $translate.instant('package.schedule.code'),
            },
          }, {
            key: 'start',
            type: 'datetimepicker',
            templateOptions: {
              label: $translate.instant('package.schedule.start'),
            },
          }, {
            key: 'end',
            type: 'datetimepicker',
            templateOptions: {
              label: $translate.instant('package.schedule.end'),
            },
          }],
          values: {},
          form: {},
          options: {
            name: {
              operator: 'like',
              preprocess: (value) => {
                return '%' + value + '%';
              },
            },
            code: {
              operator: 'like',
              preprocess: (value) => {
                return '%' + value + '%';
              },
            },
            start: {
              operator: 'gte',
              statisfy: 'and',
            },
            end: {
              operator: 'lte',
              statisfy: 'and',
            },

          },
        },
      };

      vm.initCrud = angular.copy(vm.crud);

      vm.fetch = async() => {
        let filter = Utils.buildFilter(vm.initCrud, vm.crud);

        const count = await PackageSchedule.count(filter).$promise;
        vm.crud.total = count.count;

        vm.promise = PackageSchedule.find({
          filter: filter,
        }, (res) => {
          vm.crud.records = res;
        }, (err) => {
          $rootScope.showErrorResponses(err);
        }).$promise;
      };

      vm.fetch();

      vm.clearSearch = () => {
        vm.crud.search.values = {};
        vm.fetch();
      };

      vm.export = async(record) => {
        const results = await Answer.find({
          filter: {
            include: [{
                relation: 'packageSchedule',
              },
              'person',
            ],
            where: {
              and: [{
                packageSchedule_id: record.id,
              }],
            },
          },
        }).$promise;

        let collections = [];
        for (const r of results) {
          const resRank = await Answer.getRank({
            id: r.id,
          }).$promise;
          collections.push({
            [$translate.instant('answer.rank')]: resRank.rank,
            [$translate.instant('user.name')]: r.person.name,
            [$translate.instant('user.id')]: r.person.username,
            [$translate.instant('answer.grade')]: r.grade,
          });
        }
        collections = _.sortBy(collections, (o) => {
          return o.Ranking;
        });
        let csv = Papa.unparse(collections);
        let csvData = new Blob([csv], {
          type: 'text/csv;charset=utf-8;',
        });
        let csvURL = $window.URL.createObjectURL(csvData);
        let tempLink = document.createElement('a');
        tempLink.href = csvURL;
        tempLink.setAttribute('download', `${$translate.instant('answer.grade')} ${record.name}.csv`);
        tempLink.click();
      };
    },
  ]);