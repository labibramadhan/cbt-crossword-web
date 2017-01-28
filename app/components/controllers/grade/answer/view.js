angular.module('app')
  .controller('GradeAnswerViewController', [
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

      $rootScope.backTo = 'app.grade.answer.list';
      $rootScope.backParams = {
        packageSchedule_id: $stateParams.packageSchedule_id,
      };

      vm.grids = false;

      const rank = await Answer.getRank({
        id: $stateParams.answer_id,
      }).$promise;
      vm.rank = rank.rank;

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


      vm.answer = await Answer.findById({
        id: $stateParams.answer_id,
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
          if (answer.answered === null || answer.answered === '') {
            return;
          }
          let directions = [];
          switch (type) {
            case 'down':
              directions = _.range(cell.startRow, cell.endRow + 1);
              _.each(directions, (d, idx) => {
                vm.values[d][cell.startCol] = answer.answered[idx];
              });
              break;
            case 'across':
              directions = _.range(cell.startCol, cell.endCol + 1);
              _.each(directions, (d, idx) => {
                vm.values[cell.startRow][d] = answer.answered[idx];
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
        if (!answer.answered) {
          return -1;
        }
        return answer.remark;
      };

      vm.getCellTruth = (cell) => {
        let answer = _.find(vm.answer.answerItems, {
          question_id: cell.id
        });
        if (_.isUndefined(answer) || !answer) {
          return false;
        }
        return answer.answered === cell.word;
      };
    },
  ]);