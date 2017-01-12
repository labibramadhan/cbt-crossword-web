export default ($translate) => [{
  type: 'repeatable',
  key: 'questions',
  templateOptions: {
    headerText: $translate.instant('question.multiple.label'),
    btnText: $translate.instant('question.multiple.add'),
    fields: [{
      key: 'tag',
      type: 'input',
      templateOptions: {
        required: true,
        className: 'md-block',
        label: $translate.instant('question.tag'),
      },
    }, {
      key: 'question',
      type: 'textarea',
      templateOptions: {
        required: true,
        className: 'md-block',
        rows: 5,
        label: $translate.instant('question.question'),
      },
    }, {
      key: 'answer',
      type: 'input',
      templateOptions: {
        required: true,
        className: 'md-block',
        label: $translate.instant('question.answer'),
      },
    }],
  },
}];
