export default ($translate) => [{
  key: 'name',
  type: 'input',
  templateOptions: {
    required: true,
    className: 'md-block',
    label: $translate.instant('package.schedule.name'),
  },
}, {
  key: 'questionTotal',
  type: 'input',
  templateOptions: {
    required: true,
    className: 'md-block',
    label: $translate.instant('package.schedule.questionTotal'),
  },
}, {
  key: 'showGrade',
  type: 'radio',
  templateOptions: {
    required: true,
    className: 'md-block',
    label: $translate.instant('package.schedule.showGrade'),
    labelProp: 'label',
    valueProp: 'value',
    options: [{
      value: true,
      label: $translate.instant('package.schedule.showGrade.show'),
    }, {
      value: false,
      label: $translate.instant('package.schedule.showGrade.hide'),
    }],
  },
}, {
  key: 'start',
  type: 'datepicker',
  templateOptions: {
    required: true,
    placeholder: $translate.instant('datepicker.pick'),
    label: $translate.instant('package.schedule.start'),
  },
}, {
  key: 'startTime',
  type: 'input',
  templateOptions: {
    required: true,
    className: 'md-block',
    label: $translate.instant('package.schedule.start.time'),
    placeholder: 'HH:mm:ss',
  },
}, {
  key: 'end',
  type: 'datepicker',
  templateOptions: {
    required: true,
    placeholder: $translate.instant('datepicker.pick'),
    label: $translate.instant('package.schedule.end'),
  },
}, {
  key: 'endTime',
  type: 'input',
  templateOptions: {
    required: true,
    className: 'md-block',
    label: $translate.instant('package.schedule.end.time'),
    placeholder: 'HH:mm:ss',
  },
}];
