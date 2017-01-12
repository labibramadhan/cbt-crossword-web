// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "cbtCrosswordApi";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "http://localhost:1237/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }

  var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name cbtCrosswordApi
 * @module
 * @description
 *
 * The `cbtCrosswordApi` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("cbtCrosswordApi", ['ngResource']);

/**
 * @ngdoc object
 * @name cbtCrosswordApi.Person
 * @header cbtCrosswordApi.Person
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Person` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Person",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Persons/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#prototype$__findById__accessTokens
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Persons/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#prototype$__destroyById__accessTokens
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Persons/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#prototype$__updateById__accessTokens
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Persons/:id/accessTokens/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#prototype$__get__accessTokens
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Queries accessTokens of Person.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/Persons/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#prototype$__create__accessTokens
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/Persons/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#prototype$__delete__accessTokens
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/Persons/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#prototype$__count__accessTokens
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Counts accessTokens of Person.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/Persons/:id/accessTokens/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#create
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Persons",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#createMany
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Persons",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#patchOrCreate
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Persons",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#replaceOrCreate
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Persons/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#upsertWithWhere
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Persons/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#exists
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Persons/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#findById
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Persons/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#replaceById
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Persons/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#find
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Persons",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#findOne
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Persons/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#updateAll
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Persons/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#deleteById
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Persons/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#count
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Persons/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#prototype$patchAttributes
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Persons/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#createChangeStream
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Persons/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#login
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/Persons/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#logout
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/Persons/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#confirm
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Confirm a user registration with email verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/Persons/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#resetPassword
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/Persons/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#whoAmI
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
            "whoAmI": {
              url: urlBase + "/Persons/whoAmI",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#registerAdmin
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
            "registerAdmin": {
              url: urlBase + "/Persons/registerAdmin",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#registerGuru
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
            "registerGuru": {
              url: urlBase + "/Persons/registerGuru",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#registerParticipant
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
            "registerParticipant": {
              url: urlBase + "/Persons/registerParticipant",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#checkPassword
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `password` – `{string}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `result` – `{boolean=}` -
             */
            "checkPassword": {
              url: urlBase + "/Persons/checkPassword",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#findByRoles
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `roles` – `{string}` -
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
            "findByRoles": {
              isArray: true,
              url: urlBase + "/Persons/findByRoles",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#countByRoles
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `roles` – `{string}` -
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "countByRoles": {
              url: urlBase + "/Persons/countByRoles",
              method: "GET",
            },

            // INTERNAL. Use Question.person() instead.
            "::get::Question::person": {
              url: urlBase + "/Questions/:id/person",
              method: "GET",
            },

            // INTERNAL. Use Package.person() instead.
            "::get::Package::person": {
              url: urlBase + "/Packages/:id/person",
              method: "GET",
            },

            // INTERNAL. Use PackageQuestion.person() instead.
            "::get::PackageQuestion::person": {
              url: urlBase + "/PackageQuestions/:id/person",
              method: "GET",
            },

            // INTERNAL. Use Answer.person() instead.
            "::get::Answer::person": {
              url: urlBase + "/Answers/:id/person",
              method: "GET",
            },

            // INTERNAL. Use AnswerItem.person() instead.
            "::get::AnswerItem::person": {
              url: urlBase + "/AnswerItems/:id/person",
              method: "GET",
            },

            // INTERNAL. Use PackageSchedule.person() instead.
            "::get::PackageSchedule::person": {
              url: urlBase + "/PackageSchedules/:id/person",
              method: "GET",
            },

            // INTERNAL. Use AnswerCheat.person() instead.
            "::get::AnswerCheat::person": {
              url: urlBase + "/AnswerCheats/:id/person",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#getCurrent
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/Persons" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#upsert
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#updateOrCreate
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#patchOrCreateWithWhere
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#update
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#destroyById
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#removeById
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Person#updateAttributes
             * @methodOf cbtCrosswordApi.Person
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];

        /**
         * @ngdoc method
         * @name cbtCrosswordApi.Person#getCachedCurrent
         * @methodOf cbtCrosswordApi.Person
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link cbtCrosswordApi.Person#login} or
         * {@link cbtCrosswordApi.Person#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Person instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name cbtCrosswordApi.Person#isAuthenticated
         * @methodOf cbtCrosswordApi.Person
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name cbtCrosswordApi.Person#getCurrentId
         * @methodOf cbtCrosswordApi.Person
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name cbtCrosswordApi.Person#modelName
        * @propertyOf cbtCrosswordApi.Person
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Person`.
        */
        R.modelName = "Person";



        return R;
      }]);

/**
 * @ngdoc object
 * @name cbtCrosswordApi.Question
 * @header cbtCrosswordApi.Question
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Question` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Question",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Questions/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Question.person() instead.
            "prototype$__get__person": {
              url: urlBase + "/Questions/:id/person",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Question#create
             * @methodOf cbtCrosswordApi.Question
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Questions",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Question#createMany
             * @methodOf cbtCrosswordApi.Question
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Questions",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Question#patchOrCreate
             * @methodOf cbtCrosswordApi.Question
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Questions",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Question#replaceOrCreate
             * @methodOf cbtCrosswordApi.Question
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Questions/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Question#upsertWithWhere
             * @methodOf cbtCrosswordApi.Question
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Questions/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Question#exists
             * @methodOf cbtCrosswordApi.Question
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Questions/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Question#findById
             * @methodOf cbtCrosswordApi.Question
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Questions/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Question#replaceById
             * @methodOf cbtCrosswordApi.Question
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Questions/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Question#find
             * @methodOf cbtCrosswordApi.Question
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Questions",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Question#findOne
             * @methodOf cbtCrosswordApi.Question
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Questions/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Question#updateAll
             * @methodOf cbtCrosswordApi.Question
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Questions/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Question#deleteById
             * @methodOf cbtCrosswordApi.Question
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Questions/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Question#count
             * @methodOf cbtCrosswordApi.Question
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Questions/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Question#prototype$patchAttributes
             * @methodOf cbtCrosswordApi.Question
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Questions/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Question#createChangeStream
             * @methodOf cbtCrosswordApi.Question
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Questions/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Question#getAllTags
             * @methodOf cbtCrosswordApi.Question
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
            "getAllTags": {
              isArray: true,
              url: urlBase + "/Questions/getAllTags",
              method: "GET",
            },

            // INTERNAL. Use Package.questions.findById() instead.
            "::findById::Package::questions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Packages/:id/questions/:fk",
              method: "GET",
            },

            // INTERNAL. Use Package.questions.destroyById() instead.
            "::destroyById::Package::questions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Packages/:id/questions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Package.questions.updateById() instead.
            "::updateById::Package::questions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Packages/:id/questions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Package.questions.link() instead.
            "::link::Package::questions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Packages/:id/questions/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Package.questions.unlink() instead.
            "::unlink::Package::questions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Packages/:id/questions/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Package.questions.exists() instead.
            "::exists::Package::questions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Packages/:id/questions/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Package.questions() instead.
            "::get::Package::questions": {
              isArray: true,
              url: urlBase + "/Packages/:id/questions",
              method: "GET",
            },

            // INTERNAL. Use Package.questions.create() instead.
            "::create::Package::questions": {
              url: urlBase + "/Packages/:id/questions",
              method: "POST",
            },

            // INTERNAL. Use Package.questions.createMany() instead.
            "::createMany::Package::questions": {
              isArray: true,
              url: urlBase + "/Packages/:id/questions",
              method: "POST",
            },

            // INTERNAL. Use Package.questions.destroyAll() instead.
            "::delete::Package::questions": {
              url: urlBase + "/Packages/:id/questions",
              method: "DELETE",
            },

            // INTERNAL. Use Package.questions.count() instead.
            "::count::Package::questions": {
              url: urlBase + "/Packages/:id/questions/count",
              method: "GET",
            },

            // INTERNAL. Use PackageQuestion.question() instead.
            "::get::PackageQuestion::question": {
              url: urlBase + "/PackageQuestions/:id/question",
              method: "GET",
            },

            // INTERNAL. Use AnswerItem.question() instead.
            "::get::AnswerItem::question": {
              url: urlBase + "/AnswerItems/:id/question",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Question#upsert
             * @methodOf cbtCrosswordApi.Question
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Question#updateOrCreate
             * @methodOf cbtCrosswordApi.Question
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Question#patchOrCreateWithWhere
             * @methodOf cbtCrosswordApi.Question
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Question#update
             * @methodOf cbtCrosswordApi.Question
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Question#destroyById
             * @methodOf cbtCrosswordApi.Question
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Question#removeById
             * @methodOf cbtCrosswordApi.Question
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Question#updateAttributes
             * @methodOf cbtCrosswordApi.Question
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name cbtCrosswordApi.Question#modelName
        * @propertyOf cbtCrosswordApi.Question
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Question`.
        */
        R.modelName = "Question";


            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Question#person
             * @methodOf cbtCrosswordApi.Question
             *
             * @description
             *
             * Fetches belongsTo relation person.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
        R.person = function() {
          var TargetResource = $injector.get("Person");
          var action = TargetResource["::get::Question::person"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name cbtCrosswordApi.Package
 * @header cbtCrosswordApi.Package
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Package` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Package",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Packages/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Package.person() instead.
            "prototype$__get__person": {
              url: urlBase + "/Packages/:id/person",
              method: "GET",
            },

            // INTERNAL. Use Package.questions.findById() instead.
            "prototype$__findById__questions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Packages/:id/questions/:fk",
              method: "GET",
            },

            // INTERNAL. Use Package.questions.destroyById() instead.
            "prototype$__destroyById__questions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Packages/:id/questions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Package.questions.updateById() instead.
            "prototype$__updateById__questions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Packages/:id/questions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Package.questions.link() instead.
            "prototype$__link__questions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Packages/:id/questions/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Package.questions.unlink() instead.
            "prototype$__unlink__questions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Packages/:id/questions/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Package.questions.exists() instead.
            "prototype$__exists__questions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Packages/:id/questions/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Package.schedules.findById() instead.
            "prototype$__findById__schedules": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Packages/:id/schedules/:fk",
              method: "GET",
            },

            // INTERNAL. Use Package.schedules.destroyById() instead.
            "prototype$__destroyById__schedules": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Packages/:id/schedules/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Package.schedules.updateById() instead.
            "prototype$__updateById__schedules": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Packages/:id/schedules/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Package.questions() instead.
            "prototype$__get__questions": {
              isArray: true,
              url: urlBase + "/Packages/:id/questions",
              method: "GET",
            },

            // INTERNAL. Use Package.questions.create() instead.
            "prototype$__create__questions": {
              url: urlBase + "/Packages/:id/questions",
              method: "POST",
            },

            // INTERNAL. Use Package.questions.destroyAll() instead.
            "prototype$__delete__questions": {
              url: urlBase + "/Packages/:id/questions",
              method: "DELETE",
            },

            // INTERNAL. Use Package.questions.count() instead.
            "prototype$__count__questions": {
              url: urlBase + "/Packages/:id/questions/count",
              method: "GET",
            },

            // INTERNAL. Use Package.schedules() instead.
            "prototype$__get__schedules": {
              isArray: true,
              url: urlBase + "/Packages/:id/schedules",
              method: "GET",
            },

            // INTERNAL. Use Package.schedules.create() instead.
            "prototype$__create__schedules": {
              url: urlBase + "/Packages/:id/schedules",
              method: "POST",
            },

            // INTERNAL. Use Package.schedules.destroyAll() instead.
            "prototype$__delete__schedules": {
              url: urlBase + "/Packages/:id/schedules",
              method: "DELETE",
            },

            // INTERNAL. Use Package.schedules.count() instead.
            "prototype$__count__schedules": {
              url: urlBase + "/Packages/:id/schedules/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package#create
             * @methodOf cbtCrosswordApi.Package
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Package` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Packages",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package#createMany
             * @methodOf cbtCrosswordApi.Package
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Package` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Packages",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package#patchOrCreate
             * @methodOf cbtCrosswordApi.Package
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Package` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Packages",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package#replaceOrCreate
             * @methodOf cbtCrosswordApi.Package
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Package` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Packages/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package#upsertWithWhere
             * @methodOf cbtCrosswordApi.Package
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Package` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Packages/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package#exists
             * @methodOf cbtCrosswordApi.Package
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Packages/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package#findById
             * @methodOf cbtCrosswordApi.Package
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Package` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Packages/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package#replaceById
             * @methodOf cbtCrosswordApi.Package
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Package` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Packages/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package#find
             * @methodOf cbtCrosswordApi.Package
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Package` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Packages",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package#findOne
             * @methodOf cbtCrosswordApi.Package
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Package` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Packages/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package#updateAll
             * @methodOf cbtCrosswordApi.Package
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Packages/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package#deleteById
             * @methodOf cbtCrosswordApi.Package
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Package` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Packages/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package#count
             * @methodOf cbtCrosswordApi.Package
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Packages/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package#prototype$patchAttributes
             * @methodOf cbtCrosswordApi.Package
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Package` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Packages/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package#createChangeStream
             * @methodOf cbtCrosswordApi.Package
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Packages/change-stream",
              method: "POST",
            },

            // INTERNAL. Use PackageQuestion.package() instead.
            "::get::PackageQuestion::package": {
              url: urlBase + "/PackageQuestions/:id/package",
              method: "GET",
            },

            // INTERNAL. Use PackageSchedule.package() instead.
            "::get::PackageSchedule::package": {
              url: urlBase + "/PackageSchedules/:id/package",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package#upsert
             * @methodOf cbtCrosswordApi.Package
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Package` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package#updateOrCreate
             * @methodOf cbtCrosswordApi.Package
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Package` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package#patchOrCreateWithWhere
             * @methodOf cbtCrosswordApi.Package
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Package` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package#update
             * @methodOf cbtCrosswordApi.Package
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package#destroyById
             * @methodOf cbtCrosswordApi.Package
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Package` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package#removeById
             * @methodOf cbtCrosswordApi.Package
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Package` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package#updateAttributes
             * @methodOf cbtCrosswordApi.Package
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Package` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name cbtCrosswordApi.Package#modelName
        * @propertyOf cbtCrosswordApi.Package
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Package`.
        */
        R.modelName = "Package";


            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package#person
             * @methodOf cbtCrosswordApi.Package
             *
             * @description
             *
             * Fetches belongsTo relation person.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
        R.person = function() {
          var TargetResource = $injector.get("Person");
          var action = TargetResource["::get::Package::person"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name cbtCrosswordApi.Package.questions
     * @header cbtCrosswordApi.Package.questions
     * @object
     * @description
     *
     * The object `Package.questions` groups methods
     * manipulating `Question` instances related to `Package`.
     *
     * Call {@link cbtCrosswordApi.Package#questions Package.questions()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package#questions
             * @methodOf cbtCrosswordApi.Package
             *
             * @description
             *
             * Queries questions of Package.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R.questions = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::get::Package::questions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package.questions#count
             * @methodOf cbtCrosswordApi.Package.questions
             *
             * @description
             *
             * Counts questions of Package.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.questions.count = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::count::Package::questions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package.questions#create
             * @methodOf cbtCrosswordApi.Package.questions
             *
             * @description
             *
             * Creates a new instance in questions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R.questions.create = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::create::Package::questions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package.questions#createMany
             * @methodOf cbtCrosswordApi.Package.questions
             *
             * @description
             *
             * Creates a new instance in questions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R.questions.createMany = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::createMany::Package::questions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package.questions#destroyAll
             * @methodOf cbtCrosswordApi.Package.questions
             *
             * @description
             *
             * Deletes all questions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.questions.destroyAll = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::delete::Package::questions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package.questions#destroyById
             * @methodOf cbtCrosswordApi.Package.questions
             *
             * @description
             *
             * Delete a related item by id for questions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for questions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.questions.destroyById = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::destroyById::Package::questions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package.questions#exists
             * @methodOf cbtCrosswordApi.Package.questions
             *
             * @description
             *
             * Check the existence of questions relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for questions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R.questions.exists = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::exists::Package::questions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package.questions#findById
             * @methodOf cbtCrosswordApi.Package.questions
             *
             * @description
             *
             * Find a related item by id for questions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for questions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R.questions.findById = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::findById::Package::questions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package.questions#link
             * @methodOf cbtCrosswordApi.Package.questions
             *
             * @description
             *
             * Add a related item by id for questions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for questions
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R.questions.link = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::link::Package::questions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package.questions#unlink
             * @methodOf cbtCrosswordApi.Package.questions
             *
             * @description
             *
             * Remove the questions relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for questions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.questions.unlink = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::unlink::Package::questions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package.questions#updateById
             * @methodOf cbtCrosswordApi.Package.questions
             *
             * @description
             *
             * Update a related item by id for questions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for questions
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R.questions.updateById = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::updateById::Package::questions"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name cbtCrosswordApi.Package.schedules
     * @header cbtCrosswordApi.Package.schedules
     * @object
     * @description
     *
     * The object `Package.schedules` groups methods
     * manipulating `PackageSchedule` instances related to `Package`.
     *
     * Call {@link cbtCrosswordApi.Package#schedules Package.schedules()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package#schedules
             * @methodOf cbtCrosswordApi.Package
             *
             * @description
             *
             * Queries schedules of Package.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageSchedule` object.)
             * </em>
             */
        R.schedules = function() {
          var TargetResource = $injector.get("PackageSchedule");
          var action = TargetResource["::get::Package::schedules"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package.schedules#count
             * @methodOf cbtCrosswordApi.Package.schedules
             *
             * @description
             *
             * Counts schedules of Package.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.schedules.count = function() {
          var TargetResource = $injector.get("PackageSchedule");
          var action = TargetResource["::count::Package::schedules"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package.schedules#create
             * @methodOf cbtCrosswordApi.Package.schedules
             *
             * @description
             *
             * Creates a new instance in schedules of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageSchedule` object.)
             * </em>
             */
        R.schedules.create = function() {
          var TargetResource = $injector.get("PackageSchedule");
          var action = TargetResource["::create::Package::schedules"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package.schedules#createMany
             * @methodOf cbtCrosswordApi.Package.schedules
             *
             * @description
             *
             * Creates a new instance in schedules of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageSchedule` object.)
             * </em>
             */
        R.schedules.createMany = function() {
          var TargetResource = $injector.get("PackageSchedule");
          var action = TargetResource["::createMany::Package::schedules"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package.schedules#destroyAll
             * @methodOf cbtCrosswordApi.Package.schedules
             *
             * @description
             *
             * Deletes all schedules of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.schedules.destroyAll = function() {
          var TargetResource = $injector.get("PackageSchedule");
          var action = TargetResource["::delete::Package::schedules"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package.schedules#destroyById
             * @methodOf cbtCrosswordApi.Package.schedules
             *
             * @description
             *
             * Delete a related item by id for schedules.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for schedules
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.schedules.destroyById = function() {
          var TargetResource = $injector.get("PackageSchedule");
          var action = TargetResource["::destroyById::Package::schedules"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package.schedules#findById
             * @methodOf cbtCrosswordApi.Package.schedules
             *
             * @description
             *
             * Find a related item by id for schedules.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for schedules
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageSchedule` object.)
             * </em>
             */
        R.schedules.findById = function() {
          var TargetResource = $injector.get("PackageSchedule");
          var action = TargetResource["::findById::Package::schedules"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Package.schedules#updateById
             * @methodOf cbtCrosswordApi.Package.schedules
             *
             * @description
             *
             * Update a related item by id for schedules.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for schedules
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageSchedule` object.)
             * </em>
             */
        R.schedules.updateById = function() {
          var TargetResource = $injector.get("PackageSchedule");
          var action = TargetResource["::updateById::Package::schedules"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name cbtCrosswordApi.PackageQuestion
 * @header cbtCrosswordApi.PackageQuestion
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `PackageQuestion` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "PackageQuestion",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/PackageQuestions/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use PackageQuestion.package() instead.
            "prototype$__get__package": {
              url: urlBase + "/PackageQuestions/:id/package",
              method: "GET",
            },

            // INTERNAL. Use PackageQuestion.question() instead.
            "prototype$__get__question": {
              url: urlBase + "/PackageQuestions/:id/question",
              method: "GET",
            },

            // INTERNAL. Use PackageQuestion.person() instead.
            "prototype$__get__person": {
              url: urlBase + "/PackageQuestions/:id/person",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageQuestion#create
             * @methodOf cbtCrosswordApi.PackageQuestion
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageQuestion` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/PackageQuestions",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageQuestion#createMany
             * @methodOf cbtCrosswordApi.PackageQuestion
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageQuestion` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/PackageQuestions",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageQuestion#patchOrCreate
             * @methodOf cbtCrosswordApi.PackageQuestion
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageQuestion` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/PackageQuestions",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageQuestion#replaceOrCreate
             * @methodOf cbtCrosswordApi.PackageQuestion
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageQuestion` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/PackageQuestions/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageQuestion#upsertWithWhere
             * @methodOf cbtCrosswordApi.PackageQuestion
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageQuestion` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/PackageQuestions/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageQuestion#exists
             * @methodOf cbtCrosswordApi.PackageQuestion
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/PackageQuestions/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageQuestion#findById
             * @methodOf cbtCrosswordApi.PackageQuestion
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageQuestion` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/PackageQuestions/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageQuestion#replaceById
             * @methodOf cbtCrosswordApi.PackageQuestion
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageQuestion` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/PackageQuestions/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageQuestion#find
             * @methodOf cbtCrosswordApi.PackageQuestion
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageQuestion` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/PackageQuestions",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageQuestion#findOne
             * @methodOf cbtCrosswordApi.PackageQuestion
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageQuestion` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/PackageQuestions/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageQuestion#updateAll
             * @methodOf cbtCrosswordApi.PackageQuestion
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/PackageQuestions/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageQuestion#deleteById
             * @methodOf cbtCrosswordApi.PackageQuestion
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageQuestion` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/PackageQuestions/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageQuestion#count
             * @methodOf cbtCrosswordApi.PackageQuestion
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/PackageQuestions/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageQuestion#prototype$patchAttributes
             * @methodOf cbtCrosswordApi.PackageQuestion
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageQuestion` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/PackageQuestions/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageQuestion#createChangeStream
             * @methodOf cbtCrosswordApi.PackageQuestion
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/PackageQuestions/change-stream",
              method: "POST",
            },
          }
        );



            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageQuestion#upsert
             * @methodOf cbtCrosswordApi.PackageQuestion
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageQuestion` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageQuestion#updateOrCreate
             * @methodOf cbtCrosswordApi.PackageQuestion
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageQuestion` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageQuestion#patchOrCreateWithWhere
             * @methodOf cbtCrosswordApi.PackageQuestion
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageQuestion` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageQuestion#update
             * @methodOf cbtCrosswordApi.PackageQuestion
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageQuestion#destroyById
             * @methodOf cbtCrosswordApi.PackageQuestion
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageQuestion` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageQuestion#removeById
             * @methodOf cbtCrosswordApi.PackageQuestion
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageQuestion` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageQuestion#updateAttributes
             * @methodOf cbtCrosswordApi.PackageQuestion
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageQuestion` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name cbtCrosswordApi.PackageQuestion#modelName
        * @propertyOf cbtCrosswordApi.PackageQuestion
        * @description
        * The name of the model represented by this $resource,
        * i.e. `PackageQuestion`.
        */
        R.modelName = "PackageQuestion";


            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageQuestion#package
             * @methodOf cbtCrosswordApi.PackageQuestion
             *
             * @description
             *
             * Fetches belongsTo relation package.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Package` object.)
             * </em>
             */
        R.package = function() {
          var TargetResource = $injector.get("Package");
          var action = TargetResource["::get::PackageQuestion::package"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageQuestion#question
             * @methodOf cbtCrosswordApi.PackageQuestion
             *
             * @description
             *
             * Fetches belongsTo relation question.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R.question = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::get::PackageQuestion::question"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageQuestion#person
             * @methodOf cbtCrosswordApi.PackageQuestion
             *
             * @description
             *
             * Fetches belongsTo relation person.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
        R.person = function() {
          var TargetResource = $injector.get("Person");
          var action = TargetResource["::get::PackageQuestion::person"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name cbtCrosswordApi.Answer
 * @header cbtCrosswordApi.Answer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Answer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Answer",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Answers/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Answer.person() instead.
            "prototype$__get__person": {
              url: urlBase + "/Answers/:id/person",
              method: "GET",
            },

            // INTERNAL. Use Answer.answerItems.findById() instead.
            "prototype$__findById__answerItems": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Answers/:id/answerItems/:fk",
              method: "GET",
            },

            // INTERNAL. Use Answer.answerItems.destroyById() instead.
            "prototype$__destroyById__answerItems": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Answers/:id/answerItems/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Answer.answerItems.updateById() instead.
            "prototype$__updateById__answerItems": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Answers/:id/answerItems/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Answer.packageSchedule() instead.
            "prototype$__get__packageSchedule": {
              url: urlBase + "/Answers/:id/packageSchedule",
              method: "GET",
            },

            // INTERNAL. Use Answer.answerCheats.findById() instead.
            "prototype$__findById__answerCheats": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Answers/:id/answerCheats/:fk",
              method: "GET",
            },

            // INTERNAL. Use Answer.answerCheats.destroyById() instead.
            "prototype$__destroyById__answerCheats": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Answers/:id/answerCheats/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Answer.answerCheats.updateById() instead.
            "prototype$__updateById__answerCheats": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Answers/:id/answerCheats/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Answer.answerItems() instead.
            "prototype$__get__answerItems": {
              isArray: true,
              url: urlBase + "/Answers/:id/answerItems",
              method: "GET",
            },

            // INTERNAL. Use Answer.answerItems.create() instead.
            "prototype$__create__answerItems": {
              url: urlBase + "/Answers/:id/answerItems",
              method: "POST",
            },

            // INTERNAL. Use Answer.answerItems.destroyAll() instead.
            "prototype$__delete__answerItems": {
              url: urlBase + "/Answers/:id/answerItems",
              method: "DELETE",
            },

            // INTERNAL. Use Answer.answerItems.count() instead.
            "prototype$__count__answerItems": {
              url: urlBase + "/Answers/:id/answerItems/count",
              method: "GET",
            },

            // INTERNAL. Use Answer.answerCheats() instead.
            "prototype$__get__answerCheats": {
              isArray: true,
              url: urlBase + "/Answers/:id/answerCheats",
              method: "GET",
            },

            // INTERNAL. Use Answer.answerCheats.create() instead.
            "prototype$__create__answerCheats": {
              url: urlBase + "/Answers/:id/answerCheats",
              method: "POST",
            },

            // INTERNAL. Use Answer.answerCheats.destroyAll() instead.
            "prototype$__delete__answerCheats": {
              url: urlBase + "/Answers/:id/answerCheats",
              method: "DELETE",
            },

            // INTERNAL. Use Answer.answerCheats.count() instead.
            "prototype$__count__answerCheats": {
              url: urlBase + "/Answers/:id/answerCheats/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer#create
             * @methodOf cbtCrosswordApi.Answer
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Answers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer#createMany
             * @methodOf cbtCrosswordApi.Answer
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Answers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer#patchOrCreate
             * @methodOf cbtCrosswordApi.Answer
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Answers",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer#replaceOrCreate
             * @methodOf cbtCrosswordApi.Answer
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Answers/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer#upsertWithWhere
             * @methodOf cbtCrosswordApi.Answer
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Answers/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer#exists
             * @methodOf cbtCrosswordApi.Answer
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Answers/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer#findById
             * @methodOf cbtCrosswordApi.Answer
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Answers/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer#replaceById
             * @methodOf cbtCrosswordApi.Answer
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Answers/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer#find
             * @methodOf cbtCrosswordApi.Answer
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Answers",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer#findOne
             * @methodOf cbtCrosswordApi.Answer
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Answers/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer#updateAll
             * @methodOf cbtCrosswordApi.Answer
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Answers/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer#deleteById
             * @methodOf cbtCrosswordApi.Answer
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Answers/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer#count
             * @methodOf cbtCrosswordApi.Answer
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Answers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer#prototype$patchAttributes
             * @methodOf cbtCrosswordApi.Answer
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Answers/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer#createChangeStream
             * @methodOf cbtCrosswordApi.Answer
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Answers/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer#getRank
             * @methodOf cbtCrosswordApi.Answer
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{string}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
            "getRank": {
              url: urlBase + "/Answers/:id/rank",
              method: "GET",
            },

            // INTERNAL. Use AnswerItem.answer() instead.
            "::get::AnswerItem::answer": {
              url: urlBase + "/AnswerItems/:id/answer",
              method: "GET",
            },

            // INTERNAL. Use PackageSchedule.answers.findById() instead.
            "::findById::PackageSchedule::answers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/PackageSchedules/:id/answers/:fk",
              method: "GET",
            },

            // INTERNAL. Use PackageSchedule.answers.destroyById() instead.
            "::destroyById::PackageSchedule::answers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/PackageSchedules/:id/answers/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use PackageSchedule.answers.updateById() instead.
            "::updateById::PackageSchedule::answers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/PackageSchedules/:id/answers/:fk",
              method: "PUT",
            },

            // INTERNAL. Use PackageSchedule.answers() instead.
            "::get::PackageSchedule::answers": {
              isArray: true,
              url: urlBase + "/PackageSchedules/:id/answers",
              method: "GET",
            },

            // INTERNAL. Use PackageSchedule.answers.create() instead.
            "::create::PackageSchedule::answers": {
              url: urlBase + "/PackageSchedules/:id/answers",
              method: "POST",
            },

            // INTERNAL. Use PackageSchedule.answers.createMany() instead.
            "::createMany::PackageSchedule::answers": {
              isArray: true,
              url: urlBase + "/PackageSchedules/:id/answers",
              method: "POST",
            },

            // INTERNAL. Use PackageSchedule.answers.destroyAll() instead.
            "::delete::PackageSchedule::answers": {
              url: urlBase + "/PackageSchedules/:id/answers",
              method: "DELETE",
            },

            // INTERNAL. Use PackageSchedule.answers.count() instead.
            "::count::PackageSchedule::answers": {
              url: urlBase + "/PackageSchedules/:id/answers/count",
              method: "GET",
            },

            // INTERNAL. Use AnswerCheat.answer() instead.
            "::get::AnswerCheat::answer": {
              url: urlBase + "/AnswerCheats/:id/answer",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer#upsert
             * @methodOf cbtCrosswordApi.Answer
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer#updateOrCreate
             * @methodOf cbtCrosswordApi.Answer
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer#patchOrCreateWithWhere
             * @methodOf cbtCrosswordApi.Answer
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer#update
             * @methodOf cbtCrosswordApi.Answer
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer#destroyById
             * @methodOf cbtCrosswordApi.Answer
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer#removeById
             * @methodOf cbtCrosswordApi.Answer
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer#updateAttributes
             * @methodOf cbtCrosswordApi.Answer
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name cbtCrosswordApi.Answer#modelName
        * @propertyOf cbtCrosswordApi.Answer
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Answer`.
        */
        R.modelName = "Answer";


            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer#person
             * @methodOf cbtCrosswordApi.Answer
             *
             * @description
             *
             * Fetches belongsTo relation person.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
        R.person = function() {
          var TargetResource = $injector.get("Person");
          var action = TargetResource["::get::Answer::person"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name cbtCrosswordApi.Answer.answerItems
     * @header cbtCrosswordApi.Answer.answerItems
     * @object
     * @description
     *
     * The object `Answer.answerItems` groups methods
     * manipulating `AnswerItem` instances related to `Answer`.
     *
     * Call {@link cbtCrosswordApi.Answer#answerItems Answer.answerItems()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer#answerItems
             * @methodOf cbtCrosswordApi.Answer
             *
             * @description
             *
             * Queries answerItems of Answer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerItem` object.)
             * </em>
             */
        R.answerItems = function() {
          var TargetResource = $injector.get("AnswerItem");
          var action = TargetResource["::get::Answer::answerItems"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer.answerItems#count
             * @methodOf cbtCrosswordApi.Answer.answerItems
             *
             * @description
             *
             * Counts answerItems of Answer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.answerItems.count = function() {
          var TargetResource = $injector.get("AnswerItem");
          var action = TargetResource["::count::Answer::answerItems"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer.answerItems#create
             * @methodOf cbtCrosswordApi.Answer.answerItems
             *
             * @description
             *
             * Creates a new instance in answerItems of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerItem` object.)
             * </em>
             */
        R.answerItems.create = function() {
          var TargetResource = $injector.get("AnswerItem");
          var action = TargetResource["::create::Answer::answerItems"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer.answerItems#createMany
             * @methodOf cbtCrosswordApi.Answer.answerItems
             *
             * @description
             *
             * Creates a new instance in answerItems of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerItem` object.)
             * </em>
             */
        R.answerItems.createMany = function() {
          var TargetResource = $injector.get("AnswerItem");
          var action = TargetResource["::createMany::Answer::answerItems"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer.answerItems#destroyAll
             * @methodOf cbtCrosswordApi.Answer.answerItems
             *
             * @description
             *
             * Deletes all answerItems of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.answerItems.destroyAll = function() {
          var TargetResource = $injector.get("AnswerItem");
          var action = TargetResource["::delete::Answer::answerItems"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer.answerItems#destroyById
             * @methodOf cbtCrosswordApi.Answer.answerItems
             *
             * @description
             *
             * Delete a related item by id for answerItems.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for answerItems
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.answerItems.destroyById = function() {
          var TargetResource = $injector.get("AnswerItem");
          var action = TargetResource["::destroyById::Answer::answerItems"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer.answerItems#findById
             * @methodOf cbtCrosswordApi.Answer.answerItems
             *
             * @description
             *
             * Find a related item by id for answerItems.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for answerItems
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerItem` object.)
             * </em>
             */
        R.answerItems.findById = function() {
          var TargetResource = $injector.get("AnswerItem");
          var action = TargetResource["::findById::Answer::answerItems"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer.answerItems#updateById
             * @methodOf cbtCrosswordApi.Answer.answerItems
             *
             * @description
             *
             * Update a related item by id for answerItems.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for answerItems
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerItem` object.)
             * </em>
             */
        R.answerItems.updateById = function() {
          var TargetResource = $injector.get("AnswerItem");
          var action = TargetResource["::updateById::Answer::answerItems"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer#packageSchedule
             * @methodOf cbtCrosswordApi.Answer
             *
             * @description
             *
             * Fetches belongsTo relation packageSchedule.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageSchedule` object.)
             * </em>
             */
        R.packageSchedule = function() {
          var TargetResource = $injector.get("PackageSchedule");
          var action = TargetResource["::get::Answer::packageSchedule"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name cbtCrosswordApi.Answer.answerCheats
     * @header cbtCrosswordApi.Answer.answerCheats
     * @object
     * @description
     *
     * The object `Answer.answerCheats` groups methods
     * manipulating `AnswerCheat` instances related to `Answer`.
     *
     * Call {@link cbtCrosswordApi.Answer#answerCheats Answer.answerCheats()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer#answerCheats
             * @methodOf cbtCrosswordApi.Answer
             *
             * @description
             *
             * Queries answerCheats of Answer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerCheat` object.)
             * </em>
             */
        R.answerCheats = function() {
          var TargetResource = $injector.get("AnswerCheat");
          var action = TargetResource["::get::Answer::answerCheats"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer.answerCheats#count
             * @methodOf cbtCrosswordApi.Answer.answerCheats
             *
             * @description
             *
             * Counts answerCheats of Answer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.answerCheats.count = function() {
          var TargetResource = $injector.get("AnswerCheat");
          var action = TargetResource["::count::Answer::answerCheats"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer.answerCheats#create
             * @methodOf cbtCrosswordApi.Answer.answerCheats
             *
             * @description
             *
             * Creates a new instance in answerCheats of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerCheat` object.)
             * </em>
             */
        R.answerCheats.create = function() {
          var TargetResource = $injector.get("AnswerCheat");
          var action = TargetResource["::create::Answer::answerCheats"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer.answerCheats#createMany
             * @methodOf cbtCrosswordApi.Answer.answerCheats
             *
             * @description
             *
             * Creates a new instance in answerCheats of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerCheat` object.)
             * </em>
             */
        R.answerCheats.createMany = function() {
          var TargetResource = $injector.get("AnswerCheat");
          var action = TargetResource["::createMany::Answer::answerCheats"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer.answerCheats#destroyAll
             * @methodOf cbtCrosswordApi.Answer.answerCheats
             *
             * @description
             *
             * Deletes all answerCheats of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.answerCheats.destroyAll = function() {
          var TargetResource = $injector.get("AnswerCheat");
          var action = TargetResource["::delete::Answer::answerCheats"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer.answerCheats#destroyById
             * @methodOf cbtCrosswordApi.Answer.answerCheats
             *
             * @description
             *
             * Delete a related item by id for answerCheats.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for answerCheats
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.answerCheats.destroyById = function() {
          var TargetResource = $injector.get("AnswerCheat");
          var action = TargetResource["::destroyById::Answer::answerCheats"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer.answerCheats#findById
             * @methodOf cbtCrosswordApi.Answer.answerCheats
             *
             * @description
             *
             * Find a related item by id for answerCheats.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for answerCheats
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerCheat` object.)
             * </em>
             */
        R.answerCheats.findById = function() {
          var TargetResource = $injector.get("AnswerCheat");
          var action = TargetResource["::findById::Answer::answerCheats"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.Answer.answerCheats#updateById
             * @methodOf cbtCrosswordApi.Answer.answerCheats
             *
             * @description
             *
             * Update a related item by id for answerCheats.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for answerCheats
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerCheat` object.)
             * </em>
             */
        R.answerCheats.updateById = function() {
          var TargetResource = $injector.get("AnswerCheat");
          var action = TargetResource["::updateById::Answer::answerCheats"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name cbtCrosswordApi.AnswerItem
 * @header cbtCrosswordApi.AnswerItem
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `AnswerItem` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "AnswerItem",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/AnswerItems/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use AnswerItem.answer() instead.
            "prototype$__get__answer": {
              url: urlBase + "/AnswerItems/:id/answer",
              method: "GET",
            },

            // INTERNAL. Use AnswerItem.question() instead.
            "prototype$__get__question": {
              url: urlBase + "/AnswerItems/:id/question",
              method: "GET",
            },

            // INTERNAL. Use AnswerItem.person() instead.
            "prototype$__get__person": {
              url: urlBase + "/AnswerItems/:id/person",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerItem#create
             * @methodOf cbtCrosswordApi.AnswerItem
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerItem` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/AnswerItems",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerItem#createMany
             * @methodOf cbtCrosswordApi.AnswerItem
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerItem` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/AnswerItems",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerItem#patchOrCreate
             * @methodOf cbtCrosswordApi.AnswerItem
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerItem` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/AnswerItems",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerItem#replaceOrCreate
             * @methodOf cbtCrosswordApi.AnswerItem
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerItem` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/AnswerItems/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerItem#upsertWithWhere
             * @methodOf cbtCrosswordApi.AnswerItem
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerItem` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/AnswerItems/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerItem#exists
             * @methodOf cbtCrosswordApi.AnswerItem
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/AnswerItems/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerItem#findById
             * @methodOf cbtCrosswordApi.AnswerItem
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerItem` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/AnswerItems/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerItem#replaceById
             * @methodOf cbtCrosswordApi.AnswerItem
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerItem` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/AnswerItems/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerItem#find
             * @methodOf cbtCrosswordApi.AnswerItem
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerItem` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/AnswerItems",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerItem#findOne
             * @methodOf cbtCrosswordApi.AnswerItem
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerItem` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/AnswerItems/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerItem#updateAll
             * @methodOf cbtCrosswordApi.AnswerItem
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/AnswerItems/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerItem#deleteById
             * @methodOf cbtCrosswordApi.AnswerItem
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerItem` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/AnswerItems/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerItem#count
             * @methodOf cbtCrosswordApi.AnswerItem
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/AnswerItems/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerItem#prototype$patchAttributes
             * @methodOf cbtCrosswordApi.AnswerItem
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerItem` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/AnswerItems/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerItem#createChangeStream
             * @methodOf cbtCrosswordApi.AnswerItem
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/AnswerItems/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Answer.answerItems.findById() instead.
            "::findById::Answer::answerItems": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Answers/:id/answerItems/:fk",
              method: "GET",
            },

            // INTERNAL. Use Answer.answerItems.destroyById() instead.
            "::destroyById::Answer::answerItems": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Answers/:id/answerItems/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Answer.answerItems.updateById() instead.
            "::updateById::Answer::answerItems": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Answers/:id/answerItems/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Answer.answerItems() instead.
            "::get::Answer::answerItems": {
              isArray: true,
              url: urlBase + "/Answers/:id/answerItems",
              method: "GET",
            },

            // INTERNAL. Use Answer.answerItems.create() instead.
            "::create::Answer::answerItems": {
              url: urlBase + "/Answers/:id/answerItems",
              method: "POST",
            },

            // INTERNAL. Use Answer.answerItems.createMany() instead.
            "::createMany::Answer::answerItems": {
              isArray: true,
              url: urlBase + "/Answers/:id/answerItems",
              method: "POST",
            },

            // INTERNAL. Use Answer.answerItems.destroyAll() instead.
            "::delete::Answer::answerItems": {
              url: urlBase + "/Answers/:id/answerItems",
              method: "DELETE",
            },

            // INTERNAL. Use Answer.answerItems.count() instead.
            "::count::Answer::answerItems": {
              url: urlBase + "/Answers/:id/answerItems/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerItem#upsert
             * @methodOf cbtCrosswordApi.AnswerItem
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerItem` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerItem#updateOrCreate
             * @methodOf cbtCrosswordApi.AnswerItem
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerItem` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerItem#patchOrCreateWithWhere
             * @methodOf cbtCrosswordApi.AnswerItem
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerItem` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerItem#update
             * @methodOf cbtCrosswordApi.AnswerItem
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerItem#destroyById
             * @methodOf cbtCrosswordApi.AnswerItem
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerItem` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerItem#removeById
             * @methodOf cbtCrosswordApi.AnswerItem
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerItem` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerItem#updateAttributes
             * @methodOf cbtCrosswordApi.AnswerItem
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerItem` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name cbtCrosswordApi.AnswerItem#modelName
        * @propertyOf cbtCrosswordApi.AnswerItem
        * @description
        * The name of the model represented by this $resource,
        * i.e. `AnswerItem`.
        */
        R.modelName = "AnswerItem";


            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerItem#answer
             * @methodOf cbtCrosswordApi.AnswerItem
             *
             * @description
             *
             * Fetches belongsTo relation answer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
        R.answer = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::get::AnswerItem::answer"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerItem#question
             * @methodOf cbtCrosswordApi.AnswerItem
             *
             * @description
             *
             * Fetches belongsTo relation question.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Question` object.)
             * </em>
             */
        R.question = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::get::AnswerItem::question"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerItem#person
             * @methodOf cbtCrosswordApi.AnswerItem
             *
             * @description
             *
             * Fetches belongsTo relation person.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
        R.person = function() {
          var TargetResource = $injector.get("Person");
          var action = TargetResource["::get::AnswerItem::person"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name cbtCrosswordApi.PackageSchedule
 * @header cbtCrosswordApi.PackageSchedule
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `PackageSchedule` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "PackageSchedule",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/PackageSchedules/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use PackageSchedule.package() instead.
            "prototype$__get__package": {
              url: urlBase + "/PackageSchedules/:id/package",
              method: "GET",
            },

            // INTERNAL. Use PackageSchedule.answers.findById() instead.
            "prototype$__findById__answers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/PackageSchedules/:id/answers/:fk",
              method: "GET",
            },

            // INTERNAL. Use PackageSchedule.answers.destroyById() instead.
            "prototype$__destroyById__answers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/PackageSchedules/:id/answers/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use PackageSchedule.answers.updateById() instead.
            "prototype$__updateById__answers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/PackageSchedules/:id/answers/:fk",
              method: "PUT",
            },

            // INTERNAL. Use PackageSchedule.person() instead.
            "prototype$__get__person": {
              url: urlBase + "/PackageSchedules/:id/person",
              method: "GET",
            },

            // INTERNAL. Use PackageSchedule.answers() instead.
            "prototype$__get__answers": {
              isArray: true,
              url: urlBase + "/PackageSchedules/:id/answers",
              method: "GET",
            },

            // INTERNAL. Use PackageSchedule.answers.create() instead.
            "prototype$__create__answers": {
              url: urlBase + "/PackageSchedules/:id/answers",
              method: "POST",
            },

            // INTERNAL. Use PackageSchedule.answers.destroyAll() instead.
            "prototype$__delete__answers": {
              url: urlBase + "/PackageSchedules/:id/answers",
              method: "DELETE",
            },

            // INTERNAL. Use PackageSchedule.answers.count() instead.
            "prototype$__count__answers": {
              url: urlBase + "/PackageSchedules/:id/answers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule#create
             * @methodOf cbtCrosswordApi.PackageSchedule
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageSchedule` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/PackageSchedules",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule#createMany
             * @methodOf cbtCrosswordApi.PackageSchedule
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageSchedule` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/PackageSchedules",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule#patchOrCreate
             * @methodOf cbtCrosswordApi.PackageSchedule
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageSchedule` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/PackageSchedules",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule#replaceOrCreate
             * @methodOf cbtCrosswordApi.PackageSchedule
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageSchedule` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/PackageSchedules/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule#upsertWithWhere
             * @methodOf cbtCrosswordApi.PackageSchedule
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageSchedule` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/PackageSchedules/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule#exists
             * @methodOf cbtCrosswordApi.PackageSchedule
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/PackageSchedules/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule#findById
             * @methodOf cbtCrosswordApi.PackageSchedule
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageSchedule` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/PackageSchedules/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule#replaceById
             * @methodOf cbtCrosswordApi.PackageSchedule
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageSchedule` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/PackageSchedules/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule#find
             * @methodOf cbtCrosswordApi.PackageSchedule
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageSchedule` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/PackageSchedules",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule#findOne
             * @methodOf cbtCrosswordApi.PackageSchedule
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageSchedule` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/PackageSchedules/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule#updateAll
             * @methodOf cbtCrosswordApi.PackageSchedule
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/PackageSchedules/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule#deleteById
             * @methodOf cbtCrosswordApi.PackageSchedule
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageSchedule` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/PackageSchedules/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule#count
             * @methodOf cbtCrosswordApi.PackageSchedule
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/PackageSchedules/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule#prototype$patchAttributes
             * @methodOf cbtCrosswordApi.PackageSchedule
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageSchedule` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/PackageSchedules/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule#createChangeStream
             * @methodOf cbtCrosswordApi.PackageSchedule
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/PackageSchedules/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule#currentTime
             * @methodOf cbtCrosswordApi.PackageSchedule
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageSchedule` object.)
             * </em>
             */
            "currentTime": {
              url: urlBase + "/PackageSchedules/currentTime",
              method: "GET",
            },

            // INTERNAL. Use Package.schedules.findById() instead.
            "::findById::Package::schedules": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Packages/:id/schedules/:fk",
              method: "GET",
            },

            // INTERNAL. Use Package.schedules.destroyById() instead.
            "::destroyById::Package::schedules": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Packages/:id/schedules/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Package.schedules.updateById() instead.
            "::updateById::Package::schedules": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Packages/:id/schedules/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Package.schedules() instead.
            "::get::Package::schedules": {
              isArray: true,
              url: urlBase + "/Packages/:id/schedules",
              method: "GET",
            },

            // INTERNAL. Use Package.schedules.create() instead.
            "::create::Package::schedules": {
              url: urlBase + "/Packages/:id/schedules",
              method: "POST",
            },

            // INTERNAL. Use Package.schedules.createMany() instead.
            "::createMany::Package::schedules": {
              isArray: true,
              url: urlBase + "/Packages/:id/schedules",
              method: "POST",
            },

            // INTERNAL. Use Package.schedules.destroyAll() instead.
            "::delete::Package::schedules": {
              url: urlBase + "/Packages/:id/schedules",
              method: "DELETE",
            },

            // INTERNAL. Use Package.schedules.count() instead.
            "::count::Package::schedules": {
              url: urlBase + "/Packages/:id/schedules/count",
              method: "GET",
            },

            // INTERNAL. Use Answer.packageSchedule() instead.
            "::get::Answer::packageSchedule": {
              url: urlBase + "/Answers/:id/packageSchedule",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule#upsert
             * @methodOf cbtCrosswordApi.PackageSchedule
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageSchedule` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule#updateOrCreate
             * @methodOf cbtCrosswordApi.PackageSchedule
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageSchedule` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule#patchOrCreateWithWhere
             * @methodOf cbtCrosswordApi.PackageSchedule
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageSchedule` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule#update
             * @methodOf cbtCrosswordApi.PackageSchedule
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule#destroyById
             * @methodOf cbtCrosswordApi.PackageSchedule
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageSchedule` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule#removeById
             * @methodOf cbtCrosswordApi.PackageSchedule
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageSchedule` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule#updateAttributes
             * @methodOf cbtCrosswordApi.PackageSchedule
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PackageSchedule` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name cbtCrosswordApi.PackageSchedule#modelName
        * @propertyOf cbtCrosswordApi.PackageSchedule
        * @description
        * The name of the model represented by this $resource,
        * i.e. `PackageSchedule`.
        */
        R.modelName = "PackageSchedule";


            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule#package
             * @methodOf cbtCrosswordApi.PackageSchedule
             *
             * @description
             *
             * Fetches belongsTo relation package.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Package` object.)
             * </em>
             */
        R.package = function() {
          var TargetResource = $injector.get("Package");
          var action = TargetResource["::get::PackageSchedule::package"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name cbtCrosswordApi.PackageSchedule.answers
     * @header cbtCrosswordApi.PackageSchedule.answers
     * @object
     * @description
     *
     * The object `PackageSchedule.answers` groups methods
     * manipulating `Answer` instances related to `PackageSchedule`.
     *
     * Call {@link cbtCrosswordApi.PackageSchedule#answers PackageSchedule.answers()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule#answers
             * @methodOf cbtCrosswordApi.PackageSchedule
             *
             * @description
             *
             * Queries answers of PackageSchedule.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
        R.answers = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::get::PackageSchedule::answers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule.answers#count
             * @methodOf cbtCrosswordApi.PackageSchedule.answers
             *
             * @description
             *
             * Counts answers of PackageSchedule.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.answers.count = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::count::PackageSchedule::answers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule.answers#create
             * @methodOf cbtCrosswordApi.PackageSchedule.answers
             *
             * @description
             *
             * Creates a new instance in answers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
        R.answers.create = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::create::PackageSchedule::answers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule.answers#createMany
             * @methodOf cbtCrosswordApi.PackageSchedule.answers
             *
             * @description
             *
             * Creates a new instance in answers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
        R.answers.createMany = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::createMany::PackageSchedule::answers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule.answers#destroyAll
             * @methodOf cbtCrosswordApi.PackageSchedule.answers
             *
             * @description
             *
             * Deletes all answers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.answers.destroyAll = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::delete::PackageSchedule::answers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule.answers#destroyById
             * @methodOf cbtCrosswordApi.PackageSchedule.answers
             *
             * @description
             *
             * Delete a related item by id for answers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for answers
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.answers.destroyById = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::destroyById::PackageSchedule::answers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule.answers#findById
             * @methodOf cbtCrosswordApi.PackageSchedule.answers
             *
             * @description
             *
             * Find a related item by id for answers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for answers
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
        R.answers.findById = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::findById::PackageSchedule::answers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule.answers#updateById
             * @methodOf cbtCrosswordApi.PackageSchedule.answers
             *
             * @description
             *
             * Update a related item by id for answers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for answers
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
        R.answers.updateById = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::updateById::PackageSchedule::answers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.PackageSchedule#person
             * @methodOf cbtCrosswordApi.PackageSchedule
             *
             * @description
             *
             * Fetches belongsTo relation person.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
        R.person = function() {
          var TargetResource = $injector.get("Person");
          var action = TargetResource["::get::PackageSchedule::person"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name cbtCrosswordApi.AnswerCheat
 * @header cbtCrosswordApi.AnswerCheat
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `AnswerCheat` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "AnswerCheat",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/AnswerCheats/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use AnswerCheat.answer() instead.
            "prototype$__get__answer": {
              url: urlBase + "/AnswerCheats/:id/answer",
              method: "GET",
            },

            // INTERNAL. Use AnswerCheat.person() instead.
            "prototype$__get__person": {
              url: urlBase + "/AnswerCheats/:id/person",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerCheat#create
             * @methodOf cbtCrosswordApi.AnswerCheat
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerCheat` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/AnswerCheats",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerCheat#createMany
             * @methodOf cbtCrosswordApi.AnswerCheat
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerCheat` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/AnswerCheats",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerCheat#patchOrCreate
             * @methodOf cbtCrosswordApi.AnswerCheat
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerCheat` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/AnswerCheats",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerCheat#replaceOrCreate
             * @methodOf cbtCrosswordApi.AnswerCheat
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerCheat` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/AnswerCheats/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerCheat#upsertWithWhere
             * @methodOf cbtCrosswordApi.AnswerCheat
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerCheat` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/AnswerCheats/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerCheat#exists
             * @methodOf cbtCrosswordApi.AnswerCheat
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/AnswerCheats/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerCheat#findById
             * @methodOf cbtCrosswordApi.AnswerCheat
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerCheat` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/AnswerCheats/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerCheat#replaceById
             * @methodOf cbtCrosswordApi.AnswerCheat
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerCheat` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/AnswerCheats/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerCheat#find
             * @methodOf cbtCrosswordApi.AnswerCheat
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerCheat` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/AnswerCheats",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerCheat#findOne
             * @methodOf cbtCrosswordApi.AnswerCheat
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerCheat` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/AnswerCheats/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerCheat#updateAll
             * @methodOf cbtCrosswordApi.AnswerCheat
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/AnswerCheats/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerCheat#deleteById
             * @methodOf cbtCrosswordApi.AnswerCheat
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerCheat` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/AnswerCheats/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerCheat#count
             * @methodOf cbtCrosswordApi.AnswerCheat
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/AnswerCheats/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerCheat#prototype$patchAttributes
             * @methodOf cbtCrosswordApi.AnswerCheat
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerCheat` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/AnswerCheats/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerCheat#createChangeStream
             * @methodOf cbtCrosswordApi.AnswerCheat
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/AnswerCheats/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Answer.answerCheats.findById() instead.
            "::findById::Answer::answerCheats": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Answers/:id/answerCheats/:fk",
              method: "GET",
            },

            // INTERNAL. Use Answer.answerCheats.destroyById() instead.
            "::destroyById::Answer::answerCheats": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Answers/:id/answerCheats/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Answer.answerCheats.updateById() instead.
            "::updateById::Answer::answerCheats": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Answers/:id/answerCheats/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Answer.answerCheats() instead.
            "::get::Answer::answerCheats": {
              isArray: true,
              url: urlBase + "/Answers/:id/answerCheats",
              method: "GET",
            },

            // INTERNAL. Use Answer.answerCheats.create() instead.
            "::create::Answer::answerCheats": {
              url: urlBase + "/Answers/:id/answerCheats",
              method: "POST",
            },

            // INTERNAL. Use Answer.answerCheats.createMany() instead.
            "::createMany::Answer::answerCheats": {
              isArray: true,
              url: urlBase + "/Answers/:id/answerCheats",
              method: "POST",
            },

            // INTERNAL. Use Answer.answerCheats.destroyAll() instead.
            "::delete::Answer::answerCheats": {
              url: urlBase + "/Answers/:id/answerCheats",
              method: "DELETE",
            },

            // INTERNAL. Use Answer.answerCheats.count() instead.
            "::count::Answer::answerCheats": {
              url: urlBase + "/Answers/:id/answerCheats/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerCheat#upsert
             * @methodOf cbtCrosswordApi.AnswerCheat
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerCheat` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerCheat#updateOrCreate
             * @methodOf cbtCrosswordApi.AnswerCheat
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerCheat` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerCheat#patchOrCreateWithWhere
             * @methodOf cbtCrosswordApi.AnswerCheat
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerCheat` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerCheat#update
             * @methodOf cbtCrosswordApi.AnswerCheat
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerCheat#destroyById
             * @methodOf cbtCrosswordApi.AnswerCheat
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerCheat` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerCheat#removeById
             * @methodOf cbtCrosswordApi.AnswerCheat
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerCheat` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerCheat#updateAttributes
             * @methodOf cbtCrosswordApi.AnswerCheat
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AnswerCheat` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name cbtCrosswordApi.AnswerCheat#modelName
        * @propertyOf cbtCrosswordApi.AnswerCheat
        * @description
        * The name of the model represented by this $resource,
        * i.e. `AnswerCheat`.
        */
        R.modelName = "AnswerCheat";


            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerCheat#answer
             * @methodOf cbtCrosswordApi.AnswerCheat
             *
             * @description
             *
             * Fetches belongsTo relation answer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Answer` object.)
             * </em>
             */
        R.answer = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::get::AnswerCheat::answer"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name cbtCrosswordApi.AnswerCheat#person
             * @methodOf cbtCrosswordApi.AnswerCheat
             *
             * @description
             *
             * Fetches belongsTo relation person.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Person` object.)
             * </em>
             */
        R.person = function() {
          var TargetResource = $injector.get("Person");
          var action = TargetResource["::get::AnswerCheat::person"];
          return action.apply(R, arguments);
        };


        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name cbtCrosswordApi.LoopBackResourceProvider
   * @header cbtCrosswordApi.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name cbtCrosswordApi.LoopBackResourceProvider#setAuthHeader
     * @methodOf cbtCrosswordApi.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name cbtCrosswordApi.LoopBackResourceProvider#getAuthHeader
     * @methodOf cbtCrosswordApi.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name cbtCrosswordApi.LoopBackResourceProvider#setUrlBase
     * @methodOf cbtCrosswordApi.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name cbtCrosswordApi.LoopBackResourceProvider#getUrlBase
     * @methodOf cbtCrosswordApi.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
