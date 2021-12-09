# OcoResearchNodejsSdk.PetApi

All URIs are relative to *https://petstore3.swagger.io/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPet**](PetApi.md#addPet) | **POST** /pet | Add a new pet to the store
[**deletePet**](PetApi.md#deletePet) | **DELETE** /pet/{petId} | Deletes a pet
[**findPetsByStatus**](PetApi.md#findPetsByStatus) | **GET** /pet/findByStatus | Finds Pets by status
[**findPetsByTags**](PetApi.md#findPetsByTags) | **GET** /pet/findByTags | Finds Pets by tags
[**getPetById**](PetApi.md#getPetById) | **GET** /pet/{petId} | Find pet by ID
[**updatePet**](PetApi.md#updatePet) | **PUT** /pet | Update an existing pet
[**updatePetWithForm**](PetApi.md#updatePetWithForm) | **POST** /pet/{petId} | Updates a pet in the store with form data
[**uploadFile**](PetApi.md#uploadFile) | **POST** /pet/{petId}/uploadImage | uploads an image



## addPet

> Pet addPet(pet)

Add a new pet to the store

Add a new pet to the store

### Example

```javascript
import OcoResearchNodejsSdk from 'oco-research-nodejs-sdk';
let defaultClient = OcoResearchNodejsSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: petstore_auth
let petstore_auth = defaultClient.authentications['petstore_auth'];
petstore_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OcoResearchNodejsSdk.PetApi();
let pet = new OcoResearchNodejsSdk.Pet(); // Pet | Create a new pet in the store
apiInstance.addPet(pet).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pet** | [**Pet**](Pet.md)| Create a new pet in the store | 

### Return type

[**Pet**](Pet.md)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

- **Content-Type**: application/json, application/xml, application/x-www-form-urlencoded
- **Accept**: application/xml, application/json


## deletePet

> deletePet(petId, opts)

Deletes a pet

### Example

```javascript
import OcoResearchNodejsSdk from 'oco-research-nodejs-sdk';
let defaultClient = OcoResearchNodejsSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: petstore_auth
let petstore_auth = defaultClient.authentications['petstore_auth'];
petstore_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OcoResearchNodejsSdk.PetApi();
let petId = 789; // Number | Pet id to delete
let opts = {
  'apiKey': "apiKey_example" // String | 
};
apiInstance.deletePet(petId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petId** | **Number**| Pet id to delete | 
 **apiKey** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## findPetsByStatus

> [Pet] findPetsByStatus(opts)

Finds Pets by status

Multiple status values can be provided with comma separated strings

### Example

```javascript
import OcoResearchNodejsSdk from 'oco-research-nodejs-sdk';
let defaultClient = OcoResearchNodejsSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: petstore_auth
let petstore_auth = defaultClient.authentications['petstore_auth'];
petstore_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OcoResearchNodejsSdk.PetApi();
let opts = {
  'status': "'available'" // String | Status values that need to be considered for filter
};
apiInstance.findPetsByStatus(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **String**| Status values that need to be considered for filter | [optional] [default to &#39;available&#39;]

### Return type

[**[Pet]**](Pet.md)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml, application/json


## findPetsByTags

> [Pet] findPetsByTags(opts)

Finds Pets by tags

Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

### Example

```javascript
import OcoResearchNodejsSdk from 'oco-research-nodejs-sdk';
let defaultClient = OcoResearchNodejsSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: petstore_auth
let petstore_auth = defaultClient.authentications['petstore_auth'];
petstore_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OcoResearchNodejsSdk.PetApi();
let opts = {
  'tags': ["null"] // [String] | Tags to filter by
};
apiInstance.findPetsByTags(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tags** | [**[String]**](String.md)| Tags to filter by | [optional] 

### Return type

[**[Pet]**](Pet.md)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml, application/json


## getPetById

> Pet getPetById(petId)

Find pet by ID

Returns a single pet

### Example

```javascript
import OcoResearchNodejsSdk from 'oco-research-nodejs-sdk';
let defaultClient = OcoResearchNodejsSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: petstore_auth
let petstore_auth = defaultClient.authentications['petstore_auth'];
petstore_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OcoResearchNodejsSdk.PetApi();
let petId = 789; // Number | ID of pet to return
apiInstance.getPetById(petId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petId** | **Number**| ID of pet to return | 

### Return type

[**Pet**](Pet.md)

### Authorization

[api_key](../README.md#api_key), [petstore_auth](../README.md#petstore_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml, application/json


## updatePet

> Pet updatePet(pet)

Update an existing pet

Update an existing pet by Id

### Example

```javascript
import OcoResearchNodejsSdk from 'oco-research-nodejs-sdk';
let defaultClient = OcoResearchNodejsSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: petstore_auth
let petstore_auth = defaultClient.authentications['petstore_auth'];
petstore_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OcoResearchNodejsSdk.PetApi();
let pet = new OcoResearchNodejsSdk.Pet(); // Pet | Update an existent pet in the store
apiInstance.updatePet(pet).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pet** | [**Pet**](Pet.md)| Update an existent pet in the store | 

### Return type

[**Pet**](Pet.md)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

- **Content-Type**: application/json, application/xml, application/x-www-form-urlencoded
- **Accept**: application/xml, application/json


## updatePetWithForm

> updatePetWithForm(petId, opts)

Updates a pet in the store with form data

### Example

```javascript
import OcoResearchNodejsSdk from 'oco-research-nodejs-sdk';
let defaultClient = OcoResearchNodejsSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: petstore_auth
let petstore_auth = defaultClient.authentications['petstore_auth'];
petstore_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OcoResearchNodejsSdk.PetApi();
let petId = 789; // Number | ID of pet that needs to be updated
let opts = {
  'name': "name_example", // String | Name of pet that needs to be updated
  'status': "status_example" // String | Status of pet that needs to be updated
};
apiInstance.updatePetWithForm(petId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petId** | **Number**| ID of pet that needs to be updated | 
 **name** | **String**| Name of pet that needs to be updated | [optional] 
 **status** | **String**| Status of pet that needs to be updated | [optional] 

### Return type

null (empty response body)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## uploadFile

> ApiResponse uploadFile(petId, opts)

uploads an image

### Example

```javascript
import OcoResearchNodejsSdk from 'oco-research-nodejs-sdk';
let defaultClient = OcoResearchNodejsSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: petstore_auth
let petstore_auth = defaultClient.authentications['petstore_auth'];
petstore_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OcoResearchNodejsSdk.PetApi();
let petId = 789; // Number | ID of pet to update
let opts = {
  'additionalMetadata': "additionalMetadata_example", // String | Additional Metadata
  'body': "/path/to/file" // File | 
};
apiInstance.uploadFile(petId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petId** | **Number**| ID of pet to update | 
 **additionalMetadata** | **String**| Additional Metadata | [optional] 
 **body** | **File**|  | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

- **Content-Type**: application/octet-stream
- **Accept**: application/json

