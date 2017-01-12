angular.module('app')
  .controller('PackageScheduleListController', [
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
    async(
      $rootScope,
      $scope,
      $state,
      $stateParams,
      $mdDialog,
      $mdToast,
      $translate,
      $window,
      Utils,
      PackageSchedule
    ) => {
      const vm = $scope;

      vm.chart1 = {
        loaded: false,
        labels: [],
        series: ['Nilai Rata-rata'],
        data: [
          [],
        ],
      };
      Utils.buildAverageScores($stateParams.package_id).then(function (results) {
        if (!results.length) vm.chart1.loaded = true;
        _.each(results, function (r, idx) {
          vm.chart1.labels.push(r.name);
          vm.chart1.data[0].push(r.average);
          if (idx === results.length - 1) {
            vm.chart1.loaded = true;
          }
        });
      });

      vm.state = $state;
      vm.crud = {
        page: 1,
        query: {
          filter: {
            include: [{
              relation: 'package',
            }],
            where: {
              and: [{
                package_id: $stateParams.package_id,
              }],
            },
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

      vm.delete = async(id) => {
        await PackageSchedule.deleteById({
          id,
        }).$promise;
        if (!$window.testMode) {
          PackageSchedule.createChangeStream();
        }
        vm.fetch();
      };

      vm.confirmDelete = async(ev, record) => {
        let confirm = $mdDialog.confirm()
          .title($translate.instant('confirm.delete.title'))
          .textContent($translate.instant('confirm.delete.description'))
          .targetEvent(ev)
          .ok($translate.instant('button.delete'))
          .cancel($translate.instant('button.cancel'));
        await $mdDialog.show(confirm);
        await vm.delete(record.id);
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
            'PackageSchedule',
            ($scope, ExcelImporter, PackageSchedule) => {
              const vmDialog = $scope;
              vmDialog.import = async() => {
                let importConfig = {
                  name: 'schedule',
                  rowStart: 1,
                  cellStart: 'A',
                  maps: {
                    [$translate.instant('package.schedule.name')]: 'name',
                    [$translate.instant('package.schedule.questionTotal')]: 'questionTotal',
                    [$translate.instant('package.schedule.showGrade')]: 'showGrade',
                    [$translate.instant('package.schedule.start')]: 'start',
                    [$translate.instant('package.schedule.end')]: 'end',
                  },
                  preSave: async(objSource) => {
                    let obj = angular.copy(objSource);
                    obj.package_id = $stateParams.package_id;
                    if (/y/i.test(obj.showGrade))
                      obj.showGrade = true;
                    else if (/t/i.test(obj.showGrade))
                      obj.showGrade = false;
                    return obj;
                  },
                };
                ExcelImporter.import(PackageSchedule, importConfig, vmDialog.fetch);
              };
            },
          ],
          templateUrl: 'components/templates/package/schedule/import.html',
          targetEvent: e,
          scope: vm,
          preserveScope: true,
        });
      };

      vm.addEditDialog = (e, record) => {
        $mdDialog.show({
          controller: [
            '$rootScope',
            '$scope',
            '$stateParams',
            '$mdDialog',
            '$mdToast',
            '$translate',
            'PackageSchedule',
            (
              $rootScope,
              $scope,
              $stateParams,
              $mdDialog,
              $mdToast,
              $translate,
              PackageSchedule
            ) => {
              const vmDialog = $scope;

              vmDialog.isEdit = !_.isUndefined(record);
              vmDialog.fields = require('./model')($translate);
              vmDialog.schedule = {};

              if (vmDialog.isEdit) {
                vmDialog.schedule = record;
                vmDialog.schedule.start = new Date(vmDialog.schedule.start);
                vmDialog.schedule.startTime = moment(vmDialog.schedule.start).format('HH:mm');
                vmDialog.schedule.end = new Date(vmDialog.schedule.end);
                vmDialog.schedule.endTime = moment(vmDialog.schedule.end).format('HH:mm');
              }

              vmDialog.submit = async() => {
                let schedule = angular.copy(vmDialog.schedule);

                let startTime = moment(vmDialog.schedule.startTime, 'HH:mm');
                vmDialog.schedule.start =
                  moment(new Date(vmDialog.schedule.start))
                  .hour(startTime.hour())
                  .minute(startTime.minute());

                let endTime = moment(vmDialog.schedule.endTime, 'HH:mm');
                vmDialog.schedule.end =
                  moment(new Date(vmDialog.schedule.end))
                  .hour(endTime.hour())
                  .minute(endTime.minute());

                if (!vmDialog.isEdit) {
                  await PackageSchedule.create(_.extend(schedule, {
                    package_id: $stateParams.package_id,
                  })).$promise;
                } else {
                  await PackageSchedule.update({
                    where: {
                      id: vmDialog.schedule.id,
                    },
                  }, schedule).$promise;
                }

                if (!$window.testMode) {
                  PackageSchedule.createChangeStream();
                }
                vmDialog.fetch();
                $mdToast.show(
                  $mdToast.simple()
                  .textContent($translate.instant('success.package.schedule.saved'))
                  .position('bottom right')
                );
                $mdDialog.hide();
              };
            },
          ],
          templateUrl: 'components/templates/package/schedule/form.html',
          targetEvent: e,
          scope: vm,
          preserveScope: true,
          clickOutsideToClose: true,
        });
      };

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
    },
  ]);