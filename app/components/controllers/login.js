angular.module('app')
  .controller('LoginController', [
    '$scope',
    '$translate',
    'Authentication',
    (
      $scope,
      $translate,
      Authentication
    ) => {
      const vm = $scope;

      vm.loginType = '!participant';
      vm.user = {};
      vm.login = Authentication.login;
      vm.loginTypeChange = () => {
        vm.user = {};
      };

      document.getElementById('main-content').style = 'background-color: #34465d; height: 100vh;';
      vm.$on('$destroy', () => {
        document.getElementById('main-content').style = '';
      });
    },
  ]);