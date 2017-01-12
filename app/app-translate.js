angular.module('app')
  .config([
    '$translateProvider',
    'DEFAULT_LANGUAGE',
    async(
      $translateProvider,
      DEFAULT_LANGUAGE,
    ) => {
      $translateProvider.useStaticFilesLoader({
        prefix: '/assets/locales/',
        suffix: '.json',
      }).use(DEFAULT_LANGUAGE);
    }
  ]);