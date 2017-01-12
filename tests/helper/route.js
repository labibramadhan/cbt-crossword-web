/* eslint-disable no-undef */
import _ from 'lodash';
import path from 'path';

const populate = async() => {
  const allRoutes = {};
  const states = await browser.executeScript(() => {
    const injector = angular.element(document.body).injector();
    const $state = injector.get('$state');
    return $state.get();
  });
  for (const state of states) {
    let stateUrl = '';
    const names = state.name.split('.');
    _.forEach(names, (name, idx) => {
      let stateNames = [];
      for (let i = 0; i <= idx; i++) {
        stateNames.push(names[i]);
      }
      const stateName = stateNames.join('.');
      const resolvedState = _.find(states, {
        name: stateName,
      });
      if (resolvedState && _.has(resolvedState, 'url')) {
        stateUrl = path.join(stateUrl, resolvedState.url);
      }
    });
    state.url = stateUrl;

    allRoutes[state.name] = _.omit(state, 'name');
  }
  return allRoutes;
};

const resolve = (route, params = {}) => {
  const resolvedRoute = routes[route];
  if (_.size(params)) {
    _.forEach(params, (paramValue, paramKey) => {
      const regex = new RegExp(`{${paramKey}.*}`, 'g');
      const matches = resolvedRoute.url.match(regex);
      if(matches) {
        resolvedRoute.url = resolvedRoute.url.replace(matches[0], paramValue);
      }
    });
  }
  return resolvedRoute;
};

const current = async(wait = true) => {
  if(!_.isNumber(wait)) await browser.waitForAngular();
  if(_.isNumber(wait)) await browser.sleep(wait);
  return await browser.executeScript(() => {
    const injector = angular.element(document.body).injector();
    const $state = injector.get('$state');
    return $state.current;
  });
};

const go = async(route, params = {}) => {
  return await browser.executeScript((route, params) => {
    const injector = angular.element(document.body).injector();
    const $state = injector.get('$state');
    return $state.go(route, params);
  }, route, params);
};

export default {
  current,
  go,
  populate,
  resolve,
};
