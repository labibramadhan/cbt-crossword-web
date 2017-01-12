angular.module('app')
  .factory('Menu', [
    '$state',
    '$translate',
    'AclService',
    (
      $state,
      $translate,
      AclService
    ) => {
      let methods = {};
      methods.menus = () => {
        let menus = {};
        let states = $state.get();
        let items = _.reject(states, (state) => {
          return !state.name || !AclService.can(state.name) || !_.get(state, 'menu.sidebar');
        });
        _.forEach(items, (item) => {
          if (_.get(item, 'abstract')) {
            menus[item.name] = item;
            menus[item.name].childrens = [];
          } else {
            let groupName = item.name.split('.');
            groupName = groupName.slice(0, groupName.length - 1).join('.');
            if (_.get(menus, groupName)) {
              menus[groupName].childrens.push(item);
            } else {
              menus[item.name] = item;
            }
          }
        });
        return menus;
      };
      return methods;
    },
  ]);