import ResourceHelper from './resource';
import _ from 'lodash';
import moment from 'moment';

const clean = async() => {
  const schedules = await ResourceHelper.query({
    model: 'PackageSchedule',
    method: 'find',
    param1: {
      filter: {
        where: {
          or: [{
            name: 'Schedule Updated',
          }, {
            name: {
              like: 'ScheduleTest%',
            }
          }]
        },
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
        },
      },
    },
  });
  for (const schedule of schedules) {
    for (const answer of schedule.answers) {
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
    await ResourceHelper.query({
      model: 'PackageSchedule',
      method: 'deleteById',
      param1: {
        id: schedule.id,
      },
    });
  }
};

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
  clean,
  mock,
};