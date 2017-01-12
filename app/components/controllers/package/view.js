angular.module('app')
  .controller('PackageViewController', [
    '$rootScope',
    '$scope',
    '$state',
    '$stateParams',
    '$mdDialog',
    '$mdToast',
    '$translate',
    'Utils',
    'ExcelImporter',
    'Package',
    'Question',
    async(
      $rootScope,
      $scope,
      $state,
      $stateParams,
      $mdDialog,
      $mdToast,
      $translate,
      Utils,
      ExcelImporter,
      Package,
      Question
    ) => {
      const vm = $scope;

      vm.mainFields = require('./model')({
        $state,
        $mdDialog,
        $mdToast,
        $translate,
        Question,
      });
      vm.model = {
        package: {},
      };
      $rootScope.backTo = 'app.package.list';
      vm.fields = angular.copy(vm.mainFields[0].templateOptions.fields);
      _.each(vm.fields, (field) => {
        if (_.has(field, 'templateOptions')) {
          field.templateOptions.disabled = true;
        }
        if (_.has(field, 'templateOptions.fields')) {
          _.each(field.templateOptions.fields, (fieldChildren) => {
            if (_.has(fieldChildren, 'templateOptions')) {
              fieldChildren.templateOptions.disabled = true;
            }
          });
        }
      });
      vm.model.package = await Package.findById({
        id: $stateParams.id,
        filter: {
          include: [{
            relation: 'questions',
            scope: {
              order: 'created_at asc',
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
      let chart12 = Utils.buildAnswersRank($stateParams.id);
      chart12.then((results) => {
        if (!results[0].length) vm.chart1.loaded = true;
        _.each(results[0], (r, idx) => {
          vm.chart1.labels.push(r.pertanyaanShort);
          vm.chart1.data[0].push(r.count);
          if (idx === results[0].length - 1) {
            vm.chart1.loaded = true;
          }
        });

        if (!results[1].length) vm.chart2.loaded = true;
        _.each(results[1], (r, idx) => {
          vm.chart2.labels.push(r.pertanyaanShort);
          vm.chart2.data[0].push(r.count);
          if (idx === results[1].length - 1) {
            vm.chart2.loaded = true;
          }
        });
      });
    },
  ]);