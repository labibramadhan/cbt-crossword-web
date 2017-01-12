export default ({
  $translate,
}) => [{
  type: 'repeatable',
  key: 'users',

  templateOptions: {
    headerText: $translate.instant('user.multiple.label'),
    btnText: $translate.instant('user.multiple.add'),
    fields: [{
      key: 'role',
      type: 'select',
      templateOptions: {
        required: true,
        label: $translate.instant('user.role'),
        labelProp: 'label',
        valueProp: 'value',
        options: [{
          value: 'admin',
          label: $translate.instant('user.type.admin'),
        }, {
          value: 'guru',
          label: $translate.instant('user.type.guru'),
        }, {
          value: 'participant',
          label: $translate.instant('user.type.participant'),
        }],
      },
    }, {
      key: 'name',
      type: 'input',
      templateOptions: {
        required: true,
        type: 'text',
        className: 'md-block',
        label: $translate.instant('user.name'),
      },
      hideExpression: ($viewValue, $modelValue, scope) => {
        return !scope.model['role'];
      },
    }, {
      key: 'username',
      type: 'input',
      templateOptions: {
        required: true,
        type: 'text',
        label: $translate.instant('user.id'),
      },
      hideExpression: ($viewValue, $modelValue, scope) => {
        return scope.model['role'] !== 'participant';
      },
    }, {
      key: 'email',
      type: 'input',
      templateOptions: {
        required: true,
        type: 'email',
        className: 'md-block',
        rows: 5,
        label: $translate.instant('user.email'),
      },
      hideExpression: ($viewValue, $modelValue, scope) => {
        return !(scope.model['role'] === 'admin' ||
          scope.model['role'] === 'guru');
      },
    }, {
      key: 'password',
      type: 'input',
      templateOptions: {
        required: true,
        type: 'text',
        label: $translate.instant('user.password'),
      },
      hideExpression: ($viewValue, $modelValue, scope) => {
        return !scope.model['role'];
      },
    }],
  },
}];
