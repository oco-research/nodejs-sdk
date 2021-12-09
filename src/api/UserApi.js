/*
* Garage Week 2021. All rights reserved.
* Your custom license text goes here.
*/


import ApiClient from "../ApiClient";
import User from '../model/User';

/**
* User service.
* @module api/UserApi
* @version 1.1.1
*/
export default class UserApi {

    /**
    * Constructs a new UserApi. 
    * @alias module:api/UserApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create user
     * This can only be done by the logged in user.
     * @param {Object} opts Optional parameters
     * @param {module:model/User} opts.user Created user object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
     */
    createUserWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['user'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/xml', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml'];
      let returnType = User;
      return this.apiClient.callApi(
        '/user', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create user
     * This can only be done by the logged in user.
     * @param {Object} opts Optional parameters
     * @param {module:model/User} opts.user Created user object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    createUser(opts) {
      return this.createUserWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creates list of users with given input array
     * Creates list of users with given input array
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/User>} opts.user 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
     */
    createUsersWithListInputWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['user'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/xml', 'application/json'];
      let returnType = User;
      return this.apiClient.callApi(
        '/user/createWithList', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates list of users with given input array
     * Creates list of users with given input array
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/User>} opts.user 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    createUsersWithListInput(opts) {
      return this.createUsersWithListInputWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete user
     * This can only be done by the logged in user.
     * @param {String} username The name that needs to be deleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteUserWithHttpInfo(username) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling deleteUser");
      }

      let pathParams = {
        'username': username
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/user/{username}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete user
     * This can only be done by the logged in user.
     * @param {String} username The name that needs to be deleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteUser(username) {
      return this.deleteUserWithHttpInfo(username)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get user by user name
     * @param {String} username The name that needs to be fetched. Use user1 for testing. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
     */
    getUserByNameWithHttpInfo(username) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getUserByName");
      }

      let pathParams = {
        'username': username
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/xml', 'application/json'];
      let returnType = User;
      return this.apiClient.callApi(
        '/user/{username}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get user by user name
     * @param {String} username The name that needs to be fetched. Use user1 for testing. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    getUserByName(username) {
      return this.getUserByNameWithHttpInfo(username)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Logs user into the system
     * @param {Object} opts Optional parameters
     * @param {String} opts.username The user name for login
     * @param {String} opts.password The password for login in clear text
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    loginUserWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'username': opts['username'],
        'password': opts['password']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/xml', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/user/login', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Logs user into the system
     * @param {Object} opts Optional parameters
     * @param {String} opts.username The user name for login
     * @param {String} opts.password The password for login in clear text
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    loginUser(opts) {
      return this.loginUserWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Logs out current logged in user session
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    logoutUserWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/user/logout', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Logs out current logged in user session
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    logoutUser() {
      return this.logoutUserWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update user
     * This can only be done by the logged in user.
     * @param {String} username name that need to be deleted
     * @param {Object} opts Optional parameters
     * @param {module:model/User} opts.user Update an existent user in the store
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updateUserWithHttpInfo(username, opts) {
      opts = opts || {};
      let postBody = opts['user'];
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling updateUser");
      }

      let pathParams = {
        'username': username
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/xml', 'application/x-www-form-urlencoded'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/user/{username}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update user
     * This can only be done by the logged in user.
     * @param {String} username name that need to be deleted
     * @param {Object} opts Optional parameters
     * @param {module:model/User} opts.user Update an existent user in the store
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateUser(username, opts) {
      return this.updateUserWithHttpInfo(username, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
