import ResourceHelper from './resource';
import _ from 'lodash';

const clean = async() => {
  const questions = await ResourceHelper.query({
    model: 'Question',
    method: 'find',
    param1: {
      filter: {
        where: {
          question: {
            like: '%Test%',
          },
        },
        fields: {
          id: true,
        },
      },
    },
  });

  for (const question of questions) {
    const packageQuestions = await ResourceHelper.query({
      model: 'PackageQuestion',
      method: 'find',
      param1: {
        filter: {
          where: {
            question_id: question.id,
          },
          fields: {
            id: true,
          },
        },
      },
    });
    for (const packageQuestion of packageQuestions) {
      await ResourceHelper.query({
        model: 'PackageQuestion',
        method: 'deleteById',
        param1: {
          id: packageQuestion.id,
        },
      });
    }

    await ResourceHelper.query({
      model: 'Question',
      method: 'deleteById',
      param1: {
        id: question.id,
      },
    });
  }
};

const mock = ({
  length,
  questionPrefix = 'QuestionTest',
}) => {
  const questions = _.map(_.range(length), () => {
    const randomNumber = _.round(_.random(1, 200, true), 2);
    return {
      question: `${questionPrefix}${randomNumber}`,
      answer: `Answer${randomNumber}`,
      tag: _.sample([`Tag1${randomNumber}`, `Tag2${randomNumber}`, `Tag3${randomNumber}`]),
    };
  });

  return questions;
};

export default {
  clean,
  mock,
};