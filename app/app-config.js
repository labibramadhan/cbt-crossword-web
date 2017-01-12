angular.module('app')
  .config([
    '$compileProvider',
    (
      $compileProvider
    ) => {
      $compileProvider.preAssignBindingsEnabled(true);
    }
  ]);