# PetStoreNodeJsSdk.UserApi

All URIs are relative to */api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UserApi.md#createUser) | **POST** /user | Create user
[**createUsersWithListInput**](UserApi.md#createUsersWithListInput) | **POST** /user/createWithList | Creates list of users with given input array
[**deleteUser**](UserApi.md#deleteUser) | **DELETE** /user/{username} | Delete user
[**getUserByName**](UserApi.md#getUserByName) | **GET** /user/{username} | Get user by user name
[**loginUser**](UserApi.md#loginUser) | **GET** /user/login | Logs user into the system
[**logoutUser**](UserApi.md#logoutUser) | **GET** /user/logout | Logs out current logged in user session
[**updateUser**](UserApi.md#updateUser) | **PUT** /user/{username} | Update user



## createUser

> User createUser(opts)

Create user

This can only be done by the logged in user.

### Example

```javascript
import PetStoreNodeJsSdk from 'Pet Store Node.js SDK';

let apiInstance = new PetStoreNodeJsSdk.UserApi();
let opts = {
  'user': new PetStoreNodeJsSdk.User() // User | Created user object
};
apiInstance.createUser(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)| Created user object | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/xml, application/x-www-form-urlencoded
- **Accept**: application/json, application/xml


## createUsersWithListInput

> User createUsersWithListInput(opts)

Creates list of users with given input array

Creates list of users with given input array

### Example

```javascript
import PetStoreNodeJsSdk from 'Pet Store Node.js SDK';

let apiInstance = new PetStoreNodeJsSdk.UserApi();
let opts = {
  'user': [new PetStoreNodeJsSdk.User()] // [User] | 
};
apiInstance.createUsersWithListInput(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**[User]**](User.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/xml, application/json


## deleteUser

> deleteUser(username)

Delete user

This can only be done by the logged in user.

### Example

```javascript
import PetStoreNodeJsSdk from 'Pet Store Node.js SDK';

let apiInstance = new PetStoreNodeJsSdk.UserApi();
let username = "username_example"; // String | The name that needs to be deleted
apiInstance.deleteUser(username).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The name that needs to be deleted | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getUserByName

> User getUserByName(username)

Get user by user name

### Example

```javascript
import PetStoreNodeJsSdk from 'Pet Store Node.js SDK';

let apiInstance = new PetStoreNodeJsSdk.UserApi();
let username = "username_example"; // String | The name that needs to be fetched. Use user1 for testing. 
apiInstance.getUserByName(username).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The name that needs to be fetched. Use user1 for testing.  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml, application/json


## loginUser

> String loginUser(opts)

Logs user into the system

### Example

```javascript
import PetStoreNodeJsSdk from 'Pet Store Node.js SDK';

let apiInstance = new PetStoreNodeJsSdk.UserApi();
let opts = {
  'username': "username_example", // String | The user name for login
  'password': "password_example" // String | The password for login in clear text
};
apiInstance.loginUser(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The user name for login | [optional] 
 **password** | **String**| The password for login in clear text | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml, application/json


## logoutUser

> logoutUser()

Logs out current logged in user session

### Example

```javascript
import PetStoreNodeJsSdk from 'Pet Store Node.js SDK';

let apiInstance = new PetStoreNodeJsSdk.UserApi();
apiInstance.logoutUser().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## updateUser

> updateUser(username, opts)

Update user

This can only be done by the logged in user.

### Example

```javascript
import PetStoreNodeJsSdk from 'Pet Store Node.js SDK';

let apiInstance = new PetStoreNodeJsSdk.UserApi();
let username = "username_example"; // String | name that need to be deleted
let opts = {
  'user': new PetStoreNodeJsSdk.User() // User | Update an existent user in the store
};
apiInstance.updateUser(username, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| name that need to be deleted | 
 **user** | [**User**](User.md)| Update an existent user in the store | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/xml, application/x-www-form-urlencoded
- **Accept**: Not defined

