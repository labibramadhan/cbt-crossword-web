export default ({
  $scope,
  $mdDialog,
  $mdToast,
  $translate,
  Question,
}) => [{
  type: 'repeatable',
  key: 'packages',
  templateOptions: {
    applyClear: false,
    headerText: $translate.instant('package.multiple.label'),
    btnText: $translate.instant('package.multiple.add'),
    fields: [{
      key: 'name',
      type: 'input',
      templateOptions: {
        required: true,
        className: 'md-block',
        label: $translate.instant('package.name'),
      },
    }, {
      key: 'sanction',
      type: 'input',
      templateOptions: {
        required: true,
        className: 'md-block',
        label: $translate.instant('package.sanction'),
      },
    }, {
      key: 'sanctionTrigger',
      type: 'input',
      templateOptions: {
        required: true,
        className: 'md-block',
        label: $translate.instant('package.sanctionTrigger'),
      },
    }, {
      type: 'repeatable',
      key: 'questions',
      templateOptions: {
        applyClear: true,
        customActions: [{
          title: $translate.instant('package.question.multiple.add.existing'),
          icon: 'add_circle_outline',
          click: (e, index, model, templateOptions, fields) => {
            $mdDialog.show({
              controller: [
                '$scope',
                (
                  $scope,
                ) => {
                  const vmDialog = $scope;

                  let tags = [];

                  Question.getAllTags().$promise.then((res) => {
                    tags = res;
                  });

                  vmDialog.mdDialog = $mdDialog;
                  vmDialog.addModel = {
                    fields: [{
                      key: 'tags',
                      type: 'chipsAutocomplete',
                      templateOptions: {
                        cache: true,
                        selected: null,
                        label: $translate.instant('package.question.multiple.add.existing.tag'),
                        searchText: '',
                        search: (text) => {
                          return _.map(_.reject(tags, (t) => {
                            let p = new RegExp(text, 'i');
                            return !p.test(t);
                          }), (t) => {
                            return {
                              label: t,
                            };
                          });
                        },
                        display: 'label',
                      },
                    }, {
                      key: 'question',
                      type: 'autocomplete',
                      templateOptions: {
                        cache: false,
                        label: $translate.instant('package.question.multiple.add.choose'),
                        searchText: '',
                        search: async(criteria) => {
                          if (criteria.length >= 3) {
                            let filter = {
                              where: {
                                or: [{
                                  question: {
                                    like: '%' + criteria + '%',
                                  },
                                }],
                              },
                            };
                            if (_.has(vmDialog, 'addModel.values.tags')) {
                              let where = {
                                and: [],
                              };
                              _.each(vmDialog.addModel.values.tags, (tag) => {
                                where.and.push({
                                  tag: tag.label,
                                });
                              });
                              if (where.and.length) {
                                filter.where.and = where.and;
                              }
                            }
                            const questions = await Question.find({
                              filter: filter,
                            }).$promise;
                            return questions;
                          }
                        },
                        display: 'question',
                        template: '<span md-highlight-text="to.searchText" md-highlight-flags="^i">{{item[to.display]}} ({{item.answer}})</span>',
                      },
                    }],
                    values: {
                      tags: [],
                    },
                  };
                  if (_.get(model, 'id')) {
                    vmDialog.addModel.values.question = model;
                  }
                  vmDialog.choose = () => {
                    if (_.get(vmDialog, 'addModel.values.question')) {
                      _.each(fields, (field) => {
                        field.templateOptions.disabled = true;
                      });
                      model = Object.assign(
                        model,
                        Object.assign(vmDialog.addModel.values.question, {
                          asNew: true,
                        })
                      );
                      $mdDialog.hide();
                    } else {
                      $mdToast.show(
                        $mdToast.simple()
                        .textContent('Silahkan pilih question terlebih dahulu')
                        .position('bottom right')
                      );
                    }
                  };
                },
              ],
              templateUrl: 'components/templates/package/browse-question.html',
              targetEvent: e,
              scope: $scope,
              preserveScope: true,
              clickOutsideToClose: true,
            });
          },
        }],
        headerText: $translate.instant('question.multiple.label'),
        btnText: $translate.instant('question.multiple.add'),
        fields: [{
          key: 'id',
          type: 'input',
          templateOptions: {
            type: 'hidden',
          },
          hideExpression: 'true',
        }, {
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
    }],
  },
}];