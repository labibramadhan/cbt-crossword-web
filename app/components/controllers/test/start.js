angular.module('app')
  .controller('TestStartController', [
    '$rootScope',
    '$scope',
    '$state',
    '$stateParams',
    '$mdDialog',
    '$localStorage',
    '$interval',
    '$timeout',
    '$translate',
    'Utils',
    'createChangeStream',
    'LiveSet',
    'PackageSchedule',
    'Answer',
    async(
      $rootScope,
      $scope,
      $state,
      $stateParams,
      $mdDialog,
      $localStorage,
      $interval,
      $timeout,
      $translate,
      Utils,
      createChangeStream,
      LiveSet,
      PackageSchedule,
      Answer
    ) => {
      const vm = $scope;

      vm.break = true;
      vm.timeUp = false;
      if (!_.has($localStorage, 'touched')) {
        $localStorage.touched = false;
      }

      await Utils.validateCode($stateParams.code, localStorage.getItem('$LoopBack$currentUserId')).then(() => {
        vm.break = false;
      }).catch((code) => {
        if (code === 1 && $localStorage.touched) {
          vm.break = false;
        } else {
          return;
        }
      });

      const schedule = await PackageSchedule.findOne({
        filter: {
          where: {
            code: $stateParams.code,
          },
          include: [{
            relation: 'package',
            scope: {
              include: ['questions'],
            },
          }],
        },
      }).$promise;

      let ids;
      let cw;
      let words;
      let clues;

      if (!_.has($localStorage, 'grids') && !_.has($localStorage, 'legends')) {
        let questions = _.shuffle(_.shuffle(schedule.package.questions))
          .slice(0, schedule.questionTotal);
        words = _.map(questions, (question) => {
          return question.answer;
        });
        clues = _.map(questions, (question) => {
          return question.question;
        });
        ids = $localStorage.questionIds = _.map(questions, (question) => {
          return question.id;
        });
        cw = new Crossword(words, clues);
      }

      vm.grids = $localStorage.grids = _.has($localStorage, 'grids') ? $localStorage.grids : cw.getSquareGrid(100);
      if (vm.grids == null) {
        delete $localStorage.grids;
        location.reload(false);
        return;
      }

      vm.legends = $localStorage.legends = _.has($localStorage, 'legends') ? $localStorage.legends : CrosswordUtils.getLegend(words, clues, ids, vm.grids);
      if (vm.legends['across'].length + vm.legends['down'].length !== schedule.questionTotal) {
        delete $localStorage.grids;
        delete $localStorage.legends;
        location.reload(false);
        return;
      }

      let gridNumber = 1;
      vm.model = {
        values: [],
        remarks: {
          'across': [],
          'down': [],
        },
      };
      vm.model.values = $localStorage.values = _.has($localStorage, 'values') ? $localStorage.values : [];
      vm.model.remarks = $localStorage.remarks = _.has($localStorage, 'remarks') ? $localStorage.remarks : {
        down: [],
        across: [],
      };

      _.each(_.range(vm.grids.length), (r) => {
        if (!_.has(vm, `model.values[${r}]`)) vm.model.values[r] = [];
        _.each(_.range(vm.grids[r].length), (c) => {
          if (!_.has(vm, `model.values[${r}][${c}]`)) vm.model.values[r][c] = null;
          let cell = vm.grids[r][c];
          if (cell !== null && ((cell['across'] && cell['across']['is_start_of_word']) || (cell['down'] && cell['down']['is_start_of_word']))) {
            vm.grids[r][c].number = gridNumber;
            gridNumber++;
          }
        });
      });

      vm.getCellRemark = (cell) => {
        return _.has(vm, `model.remarks[${cell.type}][${cell.position}]`) ? vm.model.remarks[cell.type][cell.position] : -1;
      };

      vm.getCellValue = (cell) => {
        let value = '';
        let length = 0;
        switch (cell.type) {
          case 'down':
            {
              let rows = _.range(cell.startRow, cell.endRow + 1);
              length = rows.length;
              _.each(rows, (row) => {
                if (vm.model.values[row][cell.startCol]) {
                  value += vm.model.values[row][cell.startCol];
                }
              });
            }
            break;
          case 'across':
            {
              let cols = _.range(cell.startCol, cell.endCol + 1);
              length = cols.length;
              _.each(cols, (col) => {
                if (vm.model.values[cell.startRow][col]) {
                  value += vm.model.values[cell.startRow][col];
                }
              });
            }
            break;
        }
        if (value.length < length) {
          value = '';
        }
        return value;
      };

      vm.setCellValue = (cell, value, remark, init) => {
        if (_.isUndefined(init)) {
          init = false;
        }
        let directions = [];
        switch (cell.type) {
          case 'down':
            directions = _.range(cell.startRow, cell.endRow + 1);
            break;
          case 'across':
            directions = _.range(cell.startCol, cell.endCol + 1);
            break;
        }
        _.each(directions, (direction, idx) => {
          let off1;
          let off2;
          switch (cell.type) {
            case 'down':
              off1 = direction;
              off2 = cell.startCol;
              break;
            case 'across':
              off1 = cell.startRow;
              off2 = direction;
              break;
          }
          if (
            ((vm.model.values[off1][off2] === '' || vm.model.values[off1][off2] === null) && !_.isUndefined(value)) ||
            !init
          ) {
            let passToModify = true;
            if (!init && (value === '' || value === null)) {
              let cells = CrosswordUtils.findLegendByCell(vm.legends, off1, off2, cell);
              _.each(cells, (c) => {
                let cellValue = vm.getCellValue(c);
                if (/[a-z]+/.test(cellValue)) {
                  passToModify = false;
                }
              });
            }
            if (passToModify) {
              if ((init && (value !== null && value !== '')) || !init) {
                vm.model.values[off1][off2] = value === null ? null : value[idx];
              }
            }
          }
        });
        if (!init) {
          $localStorage.touched = true;
          if (remark >= 0) {
            vm.model.remarks[cell.type][cell.position] = remark;
          } else {
            delete vm.model.remarks[cell.type][cell.position];
          }
        } else {
          vm.model.remarks[cell.type][cell.position] = remark;
        }
      };

      vm.fill = async(ev, number, forceDirection = false) => {
        if (vm.timeUp) return;

        let cells = CrosswordUtils.findLegendByNumber(vm.legends, number);

        let cell;
        if (cells.length > 1) {
          if (forceDirection) {
            cell = _.find(cells, {
              type: forceDirection
            });
          } else {
            vm.confirmPopup = $mdDialog.confirm()
              .title(
                $translate.instant('confirm.test.fill.title', {
                  num: number
                })
              )
              .textContent($translate.instant('confirm.test.fill.description'))
              .targetEvent(ev)
              .ok($translate.instant('button.across'))
              .cancel($translate.instant('button.down'));

            try {
              await $mdDialog.show(vm.confirmPopup)
              cell = _.find(cells, {
                type: 'across'
              });
            } catch (e) {
              cell = _.find(cells, {
                type: 'down'
              });
            }
          }
        } else {
          cell = cells[0];
        }

        vm.model.value = vm.getCellValue(cell);
        let title = 'No. ' + cell.position + ' ';
        title += cell.type === 'across' ?
          $translate.instant('button.across') : $translate.instant('button.down');

        $mdDialog.show({
          controller: ['$scope', ($scope) => {
            const vmDialog = $scope;

            vmDialog.cell = cell;
            vmDialog.title = title;

            vmDialog.actionDelete = () => {
              vmDialog.setCellValue(cell, null, -1);
              $mdDialog.hide();
            };
            vmDialog.actionUnsure = () => {
              vmDialog.setCellValue(cell, vmDialog.model.value, 0);
              $mdDialog.hide();
            };
            vmDialog.actionSure = () => {
              vmDialog.setCellValue(cell, vmDialog.model.value, 1);
              $mdDialog.hide();
            };
          }],
          templateUrl: 'components/templates/test/fill.html',
          targetEvent: ev,
          scope: vm,
          preserveScope: true,
        });
      };

      vm.buildAnswer = () => {
        let answers = [];
        _.each(vm.legends, (type) => {
          _.each(type, (cell) => {
            let value = vm.getCellValue(cell);
            let remark = vm.getCellRemark(cell);

            answers.push({
              answer: value,
              correct: value.toString().toUpperCase() == cell.word.toString().toUpperCase(),
              remark: remark,
              question_id: cell.id,
            });
          });
        });
        return answers;
      };

      vm.finishConfirm = (ev) => {
        vm.finishPopup = $mdDialog.confirm()
          .title($translate.instant('confirm.test.finish.title'))
          .textContent($translate.instant('confirm.test.finish.description'))
          .targetEvent(ev)
          .ok($translate.instant('button.finish'))
          .cancel($translate.instant('button.cancel'));

        $mdDialog.show(vm.finishPopup).then(() => {
          vm.finish();
        });
      };

      vm.finish = async() => {
        $mdDialog.hide();
        let answers = vm.buildAnswer();
        let grade = 0;
        let price = 100 / answers.length;
        const res = await Answer.count({
          where: {
            created_by: localStorage.getItem('$LoopBack$currentUserId'),
            packageSchedule_id: schedule.id,
          },
        }).$promise;
        if (!res.count) {
          const res1 = await Answer.create({
            grade,
            grids: vm.grids,
            packageSchedule_id: schedule.id,
            duration: vm.workingTime,
            questionIds: $localStorage.questionIds,
          }).$promise;
          for (const answer of answers) {
            if (answer.correct) {
              grade += price;
            }
            await Answer.answerItems.create({
              id: res1.id,
            }, _.extend(answer, {
              answer_id: res1.id,
            })).$promise;
          }
          grade = parseFloat(Math.round(grade * 100) / 100).toFixed(2);

          delete $localStorage.values;
          delete $localStorage.remarks;
          delete $localStorage.grids;
          delete $localStorage.legends;
          delete $localStorage.questionIds;
          delete $localStorage.touched;

          $interval.cancel(vm.tickingTime);

          vm.srcSchedule.close();
          vm.srcQuestion.close();

          await Answer.update({
            where: {
              id: res1.id,
            },
          }, {
            grade: grade,
          }).$promise;
          if (schedule.showGrade) {
            $state.go('app.test.finish', {
              id: res1.id,
            });
          } else {
            $state.go('app.dashboard');
          }
        }
      };

      let startTime = moment(new Date(schedule.start));
      let endTime = moment(new Date(schedule.end));
      let duration = endTime.diff(startTime);
      let startTest = startTime;
      vm.tickTime = async() => {
        if (!vm.timeUp) {
          const serverTimeQuery = await PackageSchedule.currentTime().$promise;
          const serverTime = serverTimeQuery.time;
          const currentMs = vm.workingTime = moment(serverTime).diff(startTest);
          const leftTime = duration - currentMs;
          if (leftTime < 0) {
            vm.timeUp = true;
            $interval.cancel(vm.tickingTime);
            $timeout(vm.finish, 3000);
            return;
          } else {
            vm.timeUp = false;
          }
          vm.halfTime = leftTime < (duration / 2);
          vm.timeCounter = moment.duration(leftTime, 'ms').format('HH:mm:ss', {
            trim: false,
          });
        }
      };
      vm.tickTime();
      vm.tickingTime = $interval(vm.tickTime, 1000);

      vm.srcSchedule = new EventSource('http://localhost:1237/api/packageSchedules/change-stream');
      let changesSchedule = createChangeStream(vm.srcSchedule);
      changesSchedule.on('data', (changes) => {
        if (changes.target === schedule.id && changes.type === 'update') {
          let dataChange = changes.data;
          startTime = moment(new Date(dataChange.start));
          endTime = moment(new Date(dataChange.end));
          duration = endTime.diff(startTime);
          startTest = startTime;
          vm.tickingTime = $interval(vm.tickTime, 1000);
        }
      });

      vm.srcQuestion = new EventSource('http://localhost:1237/api/questions/change-stream');
      let changesQuestion = createChangeStream(vm.srcQuestion);
      changesQuestion.on('data', (changes) => {
        if (changes.type === 'update') {
          _.each(vm.legends, (records, type) => {
            _.each(records, (s, idx) => {
              if (s.id === changes.target) {
                let dataChange = changes.data;
                if (dataChange.question !== s.clue) {
                  vm.legends[type][idx].clue = dataChange.question;
                }
              }
            });
          });
        }
      });

      let halfTimeWatchDestroy = vm.$watch('halfTime', (val) => {
        if (val && !vm.timeUp) {
          $rootScope.submit = vm.finishConfirm;
          $rootScope.submitText = $translate.instant('button.finish');
          $rootScope.submitIcon = 'check_circle';
          halfTimeWatchDestroy();
        }
      });

      let timeUpWatchDestroy = vm.$watch('timeUp', (val) => {
        if (val) {
          delete $rootScope.submit;
          delete $rootScope.submitText;
          delete $rootScope.submitIcon;
          timeUpWatchDestroy();
        }
      });
    },
  ]);