import QuestionHelper from './question';
import ResourceHelper from './resource';
import _ from 'lodash';

const mock = ({
  length,
  questionLength,
}) => {
  const packages = _.map(_.range(length), () => {
    const randomNumber = _.round(_.random(1, 100, true), 2);
    return {
      name: `PackageTest${randomNumber}`,
      sanction: -_.round(_.random(1, 10, true), 2),
      sanctionTrigger: _.random(1, 15),
      questions: QuestionHelper.mock({
        length: questionLength,
        questionPrefix: 'QuestionPackageTest',
      }),
    };
  });

  return packages;
};

const clean = async() => {
  const pkg = await ResourceHelper.query({
    model: 'Package',
    method: 'findOne',
    param1: {
      filter: {
        where: {
          name: 'Package Updated',
        },
        include: [{
          relation: 'questions',
          scope: {
            fields: {
              id: true,
            }
          }
        }, {
          relation: 'schedules',
          scope: {
            include: [{
              relation: 'answers',
              scope: {
                fields: {
                  id: true,
                }
              }
            }],
            fields: {
              id: true,
            }
          }
        }],
      },
    },
  });
  if (pkg) {
    for (const schedule of pkg.schedules) {
      for (const answer of pkg.schedules.answers) {
        await ResourceHelper.query({
          model: 'Answer',
          method: 'answerCheats.destroyAll',
          param1: {
            id: answer.id,
          },
        });
        await ResourceHelper.query({
          model: 'Answer',
          method: 'answerItems.destroyAll',
          param1: {
            id: answer.id,
          },
        });
      }

      await ResourceHelper.query({
        model: 'PackageSchedule',
        method: 'answers.destroyAll',
        param1: {
          id: schedule.id,
        },
      });
    }
    await ResourceHelper.query({
      model: 'Package',
      method: 'schedules.destroyAll',
      param1: {
        id: pkg.id,
      },
    });

    await ResourceHelper.query({
      model: 'Package',
      method: 'questions.destroyAll',
      param1: {
        id: pkg.id,
      },
    });

    await ResourceHelper.query({
      model: 'Package',
      method: 'deleteById',
      param1: {
        id: pkg.id,
      },
    });
  }
};

export default {
  clean,
  mock,
};