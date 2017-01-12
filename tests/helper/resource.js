/* eslint-disable no-undef */
import RouteHelper from './route';

const query = async({
  model,
  method,
  param1,
  param2 = {},
}) => {
  let results = await browser.executeAsyncScript((model, method, param1, param2, callback) => {
    let Model = angular.element(document.body)
      .injector()
      .get(model);

    let methodChains = method.split('.');
    let methodToCall = Model;
    methodChains.forEach((chain) => {
      if (angular.isUndefined(methodToCall[chain])) {
        console.error(`method ${chain} not found`); // eslint-disable-line angular/log
        methodToCall = false;
        return;
      }
      methodToCall = methodToCall[chain];
    });
    if (methodToCall) {
      methodToCall(param1, param2).$promise.then((res) => {
        callback(angular.toJson(res));
      }).catch(() => {
        callback(false);
      });
    } else {
      callback(false);
    }
  }, model, method, param1, param2);
  return results ? JSON.parse(results) : []; // eslint-disable-line angular/json-functions
};

const create = async({
  modelValues,
  nextRoute,
  route,
  targetVar,
}) => {
  await RouteHelper.go(route);

  await browser.sleep(WAIT_TIME);

  const createForm = await element.all(by.tagName('ng-form')).first();
  await browser.executeScript((el, targetVar, modelValues) => {
    angular.element(el).scope().$evalAsync(`model.${targetVar} = modelValues`, {
      modelValues,
    });
  }, createForm, targetVar, modelValues);

  await createForm.evaluate('submit()');

  expect((await RouteHelper.current()).name).toEqual(nextRoute);
};

const update = async({
  modifier,
  route,
  routeParams,
  nextRoute,
}) => {
  await RouteHelper.go(route, routeParams);

  await browser.sleep(WAIT_TIME);

  const updateForm = element.all(by.tagName('ng-form')).first();
  const model = await browser.executeScript((el) => {
    return angular.toJson(angular.element(el).scope().model);
  }, updateForm);

  const modifiedModel = modifier(JSON.parse(model)); // eslint-disable-line angular/json-functions
  await browser.executeScript((el, modifiedModel) => {
    angular.element(el).scope().$evalAsync('model = modifiedModel', {
      modifiedModel,
    });
  }, updateForm, modifiedModel);

  await updateForm.evaluate('submit()');

  expect((await RouteHelper.current()).name).toEqual(nextRoute);
};

const remove = async({
  route,
  instances,
}) => {
  await RouteHelper.go(route);

  const table = element(by.tagName('md-table-container'));
  await browser.executeScript((el, selected) => {
    angular.element(el).scope().$evalAsync('crud.selected = selected', {
      selected,
    });
  }, table, instances);
  await table.evaluate('delete()');
  await table.evaluate('$apply()');

  expect(await table.evaluate('crud.selected')).toEqual([]);
};

const search = async({
  table,
  searchValue,
}) => {
  table.evaluate('crud.search.show = true');

  await browser.executeScript((el, searchValue) => {
    angular.element(el).scope().$evalAsync('crud.search.values = searchValue', {
      searchValue,
    });
  }, table, searchValue);
  await table.evaluate('fetch()');
  await table.evaluate('$apply()');
};

export default {
  create,
  delete: remove,
  query,
  search,
  update,
};