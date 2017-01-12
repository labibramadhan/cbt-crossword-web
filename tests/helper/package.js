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
  const packages = await ResourceHelper.query({
    model: 'Package',
    method: 'find',
    param1: {
      filter: {
        where: {
          or: [{
            name: 'Package Updated',
          }, {
            name: {
              like: 'PackageTest%',
            }
          }]
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
            fields: {
              id: true,
            }
          }
        }],
      },
    },
  });
  for (const pkg of packages) {
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