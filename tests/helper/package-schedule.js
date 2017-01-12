import _ from 'lodash';
import moment from 'moment';

const mock = ({
  length,
}) => {
  const schedules = _.map(_.range(length), () => {
    const randomNumber = _.round(_.random(1, 100), 2);
    const start = moment();
    const end = moment(start).add(3, 'h');
    const timeFormat = 'HH:mm';
    return {
      name: `ScheduleTest${randomNumber}`,
      questionTotal: _.random(5, 10),
      showGrade: _.random(0, 1),
      start: start.toDate(),
      startTime: start.format(timeFormat),
      end: end.toDate(),
      endTime: end.format(timeFormat),
    };
  });

  return schedules;
};

export default {
  mock,
};
