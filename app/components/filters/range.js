angular.module('app')
  .filter('range', () => {
    return (n) => {
      let res = [];
      for (let i = 0; i < n; i++) {
        res.push(i);
      }
      return res;
    };
  });