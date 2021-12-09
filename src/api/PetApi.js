/*
* Garage Week 2021. All rights reserved.
* Your custom license text goes here.
*/


import ApiClient from "../ApiClient";
import ApiResponse from '../model/ApiResponse';
import Pet from '../model/Pet';

/**
* Pet service.
* @module api/PetApi
* @version 1.1.4
*/
export default class PetApi {

    /**
    * Constructs a new PetApi. 
    * @alias module:api/PetApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add a new pet to the store
     * Add a new pet to the store
     * @param {module:model/Pet} pet Create a new pet in the store
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Pet} and HTTP response
     */
    addPetWithHttpInfo(pet) {
      let postBody = pet;
      // verify the required parameter 'pet' is set
      if (pet === undefined || pet === null) {
        throw new Error("Missing the required parameter 'pet' when calling addPet");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['petstore_auth'];
      let contentTypes = ['application/json', 'application/xml', 'application/x-www-form-urlencoded'];
      let accepts = ['application/xml', 'application/json'];
      let returnType = Pet;
      return this.apiClient.callApi(
        '/pet', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add a new pet to the store
     * Add a new pet to the store
     * @param {module:model/Pet} pet Create a new pet in the store
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Pet}
     */
    addPet(pet) {
      return this.addPetWithHttpInfo(pet)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes a pet
     * @param {Number} petId Pet id to delete
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deletePetWithHttpInfo(petId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'petId' is set
      if (petId === undefined || petId === null) {
        throw new Error("Missing the required parameter 'petId' when calling deletePet");
      }

      let pathParams = {
        'petId': petId
      };
      let queryParams = {
      };
      let headerParams = {
        'api_key': opts['apiKey']
      };
      let formParams = {
      };

      let authNames = ['petstore_auth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/pet/{petId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deletes a pet
     * @param {Number} petId Pet id to delete
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deletePet(petId, opts) {
      return this.deletePetWithHttpInfo(petId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Finds Pets by status
     * Multiple status values can be provided with comma separated strings
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.status Status values that need to be considered for filter (default to 'available')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Pet>} and HTTP response
     */
    findPetsByStatusWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'status': opts['status']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['petstore_auth'];
      let contentTypes = [];
      let accepts = ['application/xml', 'application/json'];
      let returnType = [Pet];
      return this.apiClient.callApi(
        '/pet/findByStatus', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Finds Pets by status
     * Multiple status values can be provided with comma separated strings
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.status Status values that need to be considered for filter (default to 'available')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Pet>}
     */
    findPetsByStatus(opts) {
      return this.findPetsByStatusWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Finds Pets by tags
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.tags Tags to filter by
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Pet>} and HTTP response
     */
    findPetsByTagsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'tags': this.apiClient.buildCollectionParam(opts['tags'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['petstore_auth'];
      let contentTypes = [];
      let accepts = ['application/xml', 'application/json'];
      let returnType = [Pet];
      return this.apiClient.callApi(
        '/pet/findByTags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Finds Pets by tags
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.tags Tags to filter by
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Pet>}
     */
    findPetsByTags(opts) {
      return this.findPetsByTagsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Find pet by ID
     * Returns a single pet
     * @param {Number} petId ID of pet to return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Pet} and HTTP response
     */
    getPetByIdWithHttpInfo(petId) {
      let postBody = null;
      // verify the required parameter 'petId' is set
      if (petId === undefined || petId === null) {
        throw new Error("Missing the required parameter 'petId' when calling getPetById");
      }

      let pathParams = {
        'petId': petId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'petstore_auth'];
      let contentTypes = [];
      let accepts = ['application/xml', 'application/json'];
      let returnType = Pet;
      return this.apiClient.callApi(
        '/pet/{petId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Find pet by ID
     * Returns a single pet
     * @param {Number} petId ID of pet to return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Pet}
     */
    getPetById(petId) {
      return this.getPetByIdWithHttpInfo(petId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an existing pet
     * Update an existing pet by Id
     * @param {module:model/Pet} pet Update an existent pet in the store
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Pet} and HTTP response
     */
    updatePetWithHttpInfo(pet) {
      let postBody = pet;
      // verify the required parameter 'pet' is set
      if (pet === undefined || pet === null) {
        throw new Error("Missing the required parameter 'pet' when calling updatePet");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['petstore_auth'];
      let contentTypes = ['application/json', 'application/xml', 'application/x-www-form-urlencoded'];
      let accepts = ['application/xml', 'application/json'];
      let returnType = Pet;
      return this.apiClient.callApi(
        '/pet', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update an existing pet
     * Update an existing pet by Id
     * @param {module:model/Pet} pet Update an existent pet in the store
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Pet}
     */
    updatePet(pet) {
      return this.updatePetWithHttpInfo(pet)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates a pet in the store with form data
     * @param {Number} petId ID of pet that needs to be updated
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Name of pet that needs to be updated
     * @param {String} opts.status Status of pet that needs to be updated
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updatePetWithFormWithHttpInfo(petId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'petId' is set
      if (petId === undefined || petId === null) {
        throw new Error("Missing the required parameter 'petId' when calling updatePetWithForm");
      }

      let pathParams = {
        'petId': petId
      };
      let queryParams = {
        'name': opts['name'],
        'status': opts['status']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['petstore_auth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/pet/{petId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Updates a pet in the store with form data
     * @param {Number} petId ID of pet that needs to be updated
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Name of pet that needs to be updated
     * @param {String} opts.status Status of pet that needs to be updated
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updatePetWithForm(petId, opts) {
      return this.updatePetWithFormWithHttpInfo(petId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * uploads an image
     * @param {Number} petId ID of pet to update
     * @param {Object} opts Optional parameters
     * @param {String} opts.additionalMetadata Additional Metadata
     * @param {File} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponse} and HTTP response
     */
    uploadFileWithHttpInfo(petId, opts) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'petId' is set
      if (petId === undefined || petId === null) {
        throw new Error("Missing the required parameter 'petId' when calling uploadFile");
      }

      let pathParams = {
        'petId': petId
      };
      let queryParams = {
        'additionalMetadata': opts['additionalMetadata']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['petstore_auth'];
      let contentTypes = ['application/octet-stream'];
      let accepts = ['application/json'];
      let returnType = ApiResponse;
      return this.apiClient.callApi(
        '/pet/{petId}/uploadImage', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * uploads an image
     * @param {Number} petId ID of pet to update
     * @param {Object} opts Optional parameters
     * @param {String} opts.additionalMetadata Additional Metadata
     * @param {File} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponse}
     */
    uploadFile(petId, opts) {
      return this.uploadFileWithHttpInfo(petId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
