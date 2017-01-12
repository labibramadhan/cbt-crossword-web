angular.module('app')
  .controller('GradeAnswerListController', [
    '$rootScope',
    '$scope',
    '$state',
    '$stateParams',
    '$translate',
    'Utils',
    'PackageSchedule',
    'Answer',
    async(
      $rootScope,
      $scope,
      $state,
      $stateParams,
      $translate,
      Utils,
      PackageSchedule,
      Answer
    ) => {
      const vm = $scope;

      vm.schedule = await PackageSchedule.findById({
        id: $stateParams.packageSchedule_id,
        filter: {
          include: [{
            relation: 'package',
            scope: {
              include: ['questions'],
            },
          }],
        },
      }).$promise;

      vm.chart1 = {
        loaded: false,
        labels: [],
        series: [$translate.instant('incorrect')],
        data: [
          [],
        ],
      };
      vm.chart2 = {
        loaded: false,
        labels: [],
        series: [$translate.instant('correct')],
        data: [
          [],
        ],
      };
      let chart12 = Utils.buildAnswersRank(undefined, $stateParams.packageSchedule_id);
      chart12.then((results) => {
        if (!results[0].length) vm.chart1.loaded = true;
        _.each(results[0], (r, idx) => {
          vm.chart1.labels.push(r.questionShort);
          vm.chart1.data[0].push(r.count);
          if (idx === results[0].length - 1) {
            vm.chart1.loaded = true;
          }
        });

        if (!results[1].length) vm.chart2.loaded = true;
        _.each(results[1], (r, idx) => {
          vm.chart2.labels.push(r.questionShort);
          vm.chart2.data[0].push(r.count);
          if (idx === results[1].length - 1) {
            vm.chart2.loaded = true;
          }
        });
      });

      vm.state = $state;
      vm.crud = {
        selected: [],
        query: {
          filter: {
            include: [{
                relation: 'packageSchedule',
              },
              'person',
            ],
            where: {
              and: [{
                packageSchedule_id: $stateParams.packageSchedule_id,
              }],
            },
          },
        },
        records: {},
        total: 0,
        search: {
          show: false,
          fields: [{
            key: 'grade',
            type: 'input',
            templateOptions: {
              type: 'text',
              label: $translate.instant('answer.grade'),
            },
          }],
          values: {},
          form: {},
        },
      };
      vm.initCrud = angular.copy(vm.crud);

      vm.fetch = async() => {
        let filter = Utils.buildFilter(vm.initCrud, vm.crud);

        const count = await Answer.count(filter).$promise;
        vm.crud.total = count.count;

        vm.promise = Answer.find({
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
    },
  ]);
