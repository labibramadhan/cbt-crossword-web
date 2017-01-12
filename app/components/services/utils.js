angular.module('app')
  .factory('Utils', [
    '$rootScope',
    '$q',
    '$mdToast',
    '$timeout',
    '$translate',
    'Package',
    'PackageSchedule',
    'Answer',
    'AnswerItem',
    (
      $rootScope,
      $q,
      $mdToast,
      $timeout,
      $translate,
      Package,
      PackageSchedule,
      Answer,
      AnswerItem
    ) => {
      let services = [];
      services['buildFilter'] = (initCrud, crud) => {
        let filter = angular.copy(crud.query.filter);

        if (!_.isUndefined(crud.order)) {
          filter.order = angular.copy(crud.order);

          if (/^-/.test(filter.order)) {
            filter.order = filter.order.replace('-', '').concat(' desc');
          } else {
            filter.order = filter.order.concat(' asc');
          }
        }

        filter = _.extend(filter, {
          skip: (crud.page - 1) * filter.limit,
        });

        if (!_.isUndefined(crud.search)) {
          let search = {
            or: [],
            and: [],
          };
          _.each(crud.search.values, (value, key) => {
            let statisfy = 'or';
            let op = 'eq';
            if (_.has(crud, `search.options[${key}]`)) {
              if (_.get(crud, `search.options[${key}].exclude`)) {
                return;
              }
              if (_.has(crud, `search.options[${key}].preprocess`)) {
                value = crud.search.options[key].preprocess(value);
              }
              if (_.has(crud, `search.options[${key}].statisfy`)) {
                statisfy = crud.search.options[key].statisfy;
              }
              if (_.has(crud, `search.options[${key}].operator`)) {
                op = crud.search.options[key].operator;
              }
            }
            if (value === '' || value === null || value === '%' || value === '%%') {
              if (_.has(filter, `where[${op}]`)) {
                filter.where[op] = _.reject(filter.where[op], (v, k) => {
                  return k === key;
                });
              }
            } else {
              let tempObj = {};
              switch (op) {
                case 'eq':
                  tempObj[key] = value;
                  break;
                default:
                  {
                    let tempObj2 = {};
                    tempObj2[op] = value;
                    tempObj[key] = tempObj2;
                  }
                  break;
              }
              search[statisfy].push(tempObj);
            }
          });
          if (_.has(crud, 'search.options.all.preprocess')) {
            search = crud.search.options.all.preprocess(search);
          }
          if (!_.has(filter, 'where')) {
            filter.where = {};
          }
          if (search.or.length) {
            if (!_.has(filter, 'where.or')) {
              filter.where.or = [];
            }
            filter.where.or = filter.where.or.concat(search.or);
          } else {
            delete filter.where.or;
            if (_.has(initCrud, 'query.filter.where.or')) {
              filter.where.or = initCrud.query.filter.where.or;
            }
          }
          if (search.and.length) {
            if (!_.has(filter, 'where.and')) {
              filter.where.and = [];
            }
            filter.where.and = filter.where.and.concat(search.and);
          } else {
            delete filter.where.and;
            if (_.has(initCrud, 'query.filter.where.and')) {
              filter.where.and = initCrud.query.filter.where.and;
            }
          }
        }

        return filter;
      };

      services['diffRecords'] = function (originalRecords, modifiedRecords, removedCriteria, newCriteria) {
        let removedRecords = _.reject(originalRecords, function (record) {
          return _.find(modifiedRecords, removedCriteria(record));
        });
        let updatedRecords = [];
        let newRecords = _.filter(modifiedRecords, function (record) {
          if (!newCriteria(record)) {
            updatedRecords.push(record);
          }
          return newCriteria(record);
        });
        return [removedRecords, newRecords, updatedRecords];
      };

      services['buildAnswersRank'] = async(package_id, packageSchedule_id, limit = 15) => {
        let results = [
          [],
          [],
        ];
        let params = {
          filter: {
            where: {},
          },
        };
        let paket;
        if (!(_.isUndefined(package_id) && !_.isUndefined(packageSchedule_id))) {
          paket = await Package.findById({
            id: package_id,
            filter: {
              include: ['questions'],
            },
          }).$promise;
        } else {
          const packageSchedule = await PackageSchedule.findById({
            id: packageSchedule_id,
            filter: {
              include: [{
                relation: 'package',
                scope: {
                  include: ['questions'],
                },
              }],
            },
          }).$promise;
          paket = packageSchedule.package;
        }
        let packageSchedule_ids = [];
        if (!_.isUndefined(packageSchedule_id)) {
          packageSchedule_ids.push(packageSchedule_id);
        } else {
          const packageSchedules = await PackageSchedule.find({
            filter: {
              where: {
                package_id: package_id,
              },
              fields: {
                id: true,
              },
            },
          }).$promise;
          packageSchedule_ids = _.map(packageSchedules, 'id');
        }

        const answers = await Answer.find({
          filter: {
            where: {
              packageSchedule_id: {
                inq: packageSchedule_ids,
              },
            },
            fields: {
              id: true,
            },
          },
        }).$promise;
        params.filter.where.answer_id = {
          inq: _.map(answers, 'id'),
        };

        for (const q of paket.questions) {
          const questionShort = (q.question.toString().length > 30) ? q.question.toString().substr(0, 30) + '...' : q.question;

          const count1 = await AnswerItem.count({
            where: Object.assign({}, params.filter.where, {
              question_id: q.id,
              correct: false,
            }),
          }).$promise;
          results[0].push(Object.assign({}, q, {
            count: count1.count,
            questionShort: questionShort,
          }));

          const count2 = await AnswerItem.count({
            where: Object.assign({}, params.filter.where, {
              question_id: q.id,
              correct: true,
            }),
          }).$promise;
          results[1].push(Object.assign({}, q, {
            count: count2.count,
            questionShort: questionShort,
          }));
        }
        results[0] = _.sortBy(results[0], (r) => {
          return -r.count;
        });
        results[1] = _.sortBy(results[1], (r) => {
          return -r.count;
        });

        results[0] = _.reject(results[0], (r) => {
          return !r.count;
        });
        results[1] = _.reject(results[1], (r) => {
          return !r.count;
        });

        results[0] = results[0].slice(0, limit);
        results[1] = results[1].slice(0, limit);

        return results;
      };

      services['buildAverageScores'] = async(package_id) => {
        let results = [];
        const schedules = await PackageSchedule.find({
          filter: {
            where: {
              package_id,
            },
            fields: {
              id: true,
              name: true,
            },
            order: 'created_at desc',
          },
        }).$promise;
        if (schedules.length) {
          for (const s of schedules) {
            let thisResult = {
              name: s.name,
            };
            const answers = await Answer.find({
              filter: {
                where: {
                  packageSchedule_id: s.id,
                },
                fields: {
                  grade: true,
                },
              },
            }).$promise;
            if (answers.length) {
              let total = 0;
              _.each(answers, function (answer) {
                total += parseFloat(answer.grade);
              });
              thisResult.average = total / answers.length;
              results.push(thisResult);
            }
          }
          results = _.filter(results, _.identity);
          return results;
        } else {
          return results;
        }
      };
      
      services['UCWords'] = (str) => {
        if (_.isUndefined(str)) return;
        return str.toLowerCase().replace(/\b[a-z]/g, (letter) => {
          return letter.toUpperCase();
        });
      };

      services['validateCode'] = async(code, userId) => {
        const res = await PackageSchedule.find({
          filter: {
            where: {
              code: code,
            },
            include: [{
              relation: 'package',
              scope: {
                include: ['questions'],
              },
            }],
          },
        }).$promise;
        if (res.length) {
          let schedule = res[0];
          let start = new Date(schedule.start);
          let end = new Date(schedule.end);
          let range = moment.range(start, end);
          if (!range.contains(new Date())) {
            $mdToast.show(
              $mdToast.simple()
              .textContent($translate.instant('error.package.schedule.inactive'))
              .position('bottom right')
            );
            throw new Error(1);
          } else if (schedule.package.questions.length < 5) {
            $mdToast.show(
              $mdToast.simple()
              .textContent($translate.instant('error.package.schedule.unqualified', {
                total: schedule.package.questions.length,
              }))
              .position('bottom right')
            );
            throw new Error(2);
          } else {
            const count = await Answer.count({
              where: {
                packageSchedule_id: schedule.id,
                created_by: userId,
              },
            }).$promise;
            if (!count.count) {
              return res;
            } else {
              $mdToast.show(
                $mdToast.simple()
                .textContent($translate.instant('error.package.schedule.taken'))
                .position('bottom right')
              );
              throw new Error(4);
            }
          }
        } else {
          $mdToast.show(
            $mdToast.simple()
            .textContent($translate.instant('error.package.schedule.notFound'))
            .position('bottom right')
          );
          throw new Error(3);
        }
      };

      return services;
    },
  ]);