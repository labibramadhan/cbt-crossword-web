angular.module('app')
	.config(['formlyConfigProvider', (formlyConfigProvider) => {
		let unique = 1;
		formlyConfigProvider.setType({
			name: 'repeatable',
			templateUrl: 'components/templates/formly/repeatable.html',
			controller: [
				'$rootScope',
				'$scope',
				'$mdDialog',
				'$mdToast',
				'$translate',
				(
					$rootScope,
					$scope,
					$mdDialog,
					$mdToast,
					$translate,
				) => {
					const vm = $scope;

					vm.formOptions = {
						formState: vm.formState,
					};
					vm.CRUDState = $rootScope.CRUDState;

					const copyFields = (fields) => {
						fields = angular.copy(fields);
						addRandomIds(fields);
						return fields;
					};

					const clearField = (fields, index, ) => {
						_.each(fields, (field) => {
							field.templateOptions.disabled = false;
						});
						vm.model[vm.options.key][index] = {
							$$hashKey: vm.model[vm.options.key][index]['$$hashKey'],
						};
					};

					const removeField = (index, event) => {
						if (vm.model[vm.options.key].length > 1) {
							let headerText = vm.options.templateOptions.headerText.replace('{0}', index + 1).toLowerCase();
							let confirm = $mdDialog.confirm()
								.title(
									$translate.instant('confirm.formly.repeatable.delete.title', {
										suffix: headerText,
									})
								)
								.textContent(
									$translate.instant('confirm.formly.repeatable.delete.description')
								)
								.targetEvent(event)
								.ok($translate.instant('button.delete'))
								.cancel($translate.instant('button.cancel'));
							$mdDialog.show(confirm).then(() => {
								vm.model[vm.options.key].splice(index, 1);
								$mdToast.show(
									$mdToast.simple()
									.textContent(
										$translate.instant('confirm.formly.repeatable.deleted', {
											suffix: headerText,
										})
									)
									.position('bottom right')
								);
							});
						}
					};

					const addNew = () => {
						vm.model[vm.options.key] =
							vm.model[vm.options.key] || [];
						let repeatsection = vm.model[vm.options.key];
						let newsection = {};
						repeatsection.push(newsection);
					};

					const addRandomIds = (fields) => {
						unique++;
						angular.forEach(fields, (field, index) => {
							if (field.fieldGroup) {
								addRandomIds(field.fieldGroup);
								return; // fieldGroups don't need an ID
							}

							if (field.templateOptions &&
								field.templateOptions.fields) {
								addRandomIds(field.templateOptions.fields);
							}

							field.id = field.id ||
								(field.key + '_' + index + '_' + unique +
									getRandomInt(0, 9999));
						});
					};

					const getRandomInt = (min, max) => {
						return Math.floor(Math.random() * (max - min)) + min;
					};

					vm.addNew = addNew;

					vm.copyFields = copyFields;

					vm.removeField = removeField;

					vm.clearField = clearField;
				},
			],
		});

		formlyConfigProvider.setType({
			name: 'datetimepicker',
			wrapper: ['label', 'messages', 'inputContainer'],
			defaultOptions: {
				templateOptions: {
					disabled: false,
				},
				ngModelAttrs: {
					disabled: {
						bound: 'ng-disabled',
					},
				},
			},
			templateUrl: 'components/templates/formly/datetimepicker.html',
		});

		formlyConfigProvider.setType({
			name: 'autocomplete',
			wrapper: ['label', 'messages', 'inputContainer'],
			defaultOptions: {
				templateOptions: {
					disabled: false,
				},
				ngModelAttrs: {
					disabled: {
						bound: 'ng-disabled',
					},
				},
			},
			templateUrl: 'components/templates/formly/autocomplete.html',
		});

		formlyConfigProvider.setType({
			name: 'chipsAutocomplete',
			wrapper: ['label', 'messages', 'inputContainer'],
			defaultOptions: {
				templateOptions: {
					disabled: false,
				},
				ngModelAttrs: {
					disabled: {
						bound: 'ng-disabled',
					},
				},
			},
			templateUrl: 'components/templates/formly/chips-autocomplete.html',
		});

		formlyConfigProvider.setType({
			name: 'ckeditor',
			templateUrl: 'components/templates/formly/ckeditor.html',
		});

		formlyConfigProvider.setWrapper({
			name: 'label',
			templateUrl: 'components/templates/formly/label.html',
			overwriteOk: true,
		});
	}])
	.run([
		'$translate',
		'formlyValidationMessages',
		(
			$translate,
			formlyValidationMessages
		) => {
			$translate('error.validation.required').then((message) => {
				formlyValidationMessages.addStringMessage('required', message);
			});
		}
	]);