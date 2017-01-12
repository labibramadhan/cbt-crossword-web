import _ from 'lodash';

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
  mock,
};