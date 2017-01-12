angular.module('app')
  .controller('TestFinishController', [
    '$rootScope',
    '$scope',
    '$state',
    '$stateParams',
    '$mdDialog',
    '$localStorage',
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
      Utils,
      createChangeStream,
      LiveSet,
      PackageSchedule,
      Answer
    ) => {
      const vm = $scope;

      vm.answer = await Answer.findById({
        id: $stateParams.id,
        filter: {
          include: [{
              relation: 'answerItems',
              scope: {
                include: ['question'],
              },
            }, {
              relation: 'answerCheats',
              scope: {
                order: 'created_at asc',
              },
            },
            'person',
          ],
        },
      }).$promise;

      vm.schedule = await PackageSchedule.findById({
        id: vm.answer.packageSchedule_id,
        filter: {
          include: [{
            relation: 'package',
            scope: {
              include: ['questions'],
            },
          }],
        },
      }).$promise;

      let questions = [];
      _.each(vm.answer.questionIds, (questionId) => {
        questions.push(_.find(vm.schedule.package.questions, {
          id: questionId,
        }));
      });
      let words = _.map(questions, (question) => {
        return question.answer;
      });
      let clues = _.map(questions, (question) => {
        return question.question;
      });
      let ids = _.map(questions, (question) => {
        return question.id;
      });
      vm.grids = vm.answer.grids;
      vm.legends = CrosswordUtils.getLegend(words, clues, ids, vm.grids);

      vm.values = [];
      _.each(_.range(vm.grids.length), (r) => {
        vm.values[r] = [];
        _.each(_.range(vm.grids[r].length), (c) => {
          vm.values[r][c] = null;
        });
      });

      _.each(vm.legends, (records, type) => {
        _.each(records, (cell) => {
          let answer = _.find(vm.answer.answerItems, {
            question_id: cell.id
          });
          if (answer.answer === null || answer.answer === '') {
            return;
          }
          let directions = [];
          switch (type) {
            case 'down':
              directions = _.range(cell.startRow, cell.endRow + 1);
              _.each(directions, (d, idx) => {
                vm.values[d][cell.startCol] = answer.answer[idx];
              });
              break;
            case 'across':
              directions = _.range(cell.startCol, cell.endCol + 1);
              _.each(directions, (d, idx) => {
                vm.values[cell.startRow][d] = answer.answer[idx];
              });
              break;
          }
        });
      });

      vm.getCellValue = (r, c) => {
        return vm.values[r][c];
      };

      vm.getCellRemark = (cell) => {
        let answer = _.find(vm.answer.answerItems, {
          question_id: cell.id
        });
        if (!answer.answer) {
          return -1;
        }
        return answer.remark;
      };

      vm.getCellTruth = (cell) => {
        let answer = _.find(vm.answer.answerItems, {
          question_id: cell.id
        });
        if (!_.get(answer)) {
          return false;
        }
        return answer.answer === cell.word;
      };
    },
  ]);