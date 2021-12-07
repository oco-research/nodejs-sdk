# PetStoreNodeJsSdk.StoreApi

All URIs are relative to */api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteOrder**](StoreApi.md#deleteOrder) | **DELETE** /store/order/{orderId} | Delete purchase order by ID
[**getInventory**](StoreApi.md#getInventory) | **GET** /store/inventory | Returns pet inventories by status
[**getOrderById**](StoreApi.md#getOrderById) | **GET** /store/order/{orderId} | Find purchase order by ID
[**placeOrder**](StoreApi.md#placeOrder) | **POST** /store/order | Place an order for a pet



## deleteOrder

> deleteOrder(orderId)

Delete purchase order by ID

For valid response try integer IDs with value &lt; 1000. Anything above 1000 or nonintegers will generate API errors

### Example

```javascript
import PetStoreNodeJsSdk from 'Pet Store Node.js SDK';

let apiInstance = new PetStoreNodeJsSdk.StoreApi();
let orderId = 789; // Number | ID of the order that needs to be deleted
apiInstance.deleteOrder(orderId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**| ID of the order that needs to be deleted | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getInventory

> {String: Number} getInventory()

Returns pet inventories by status

Returns a map of status codes to quantities

### Example

```javascript
import PetStoreNodeJsSdk from 'Pet Store Node.js SDK';
let defaultClient = PetStoreNodeJsSdk.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new PetStoreNodeJsSdk.StoreApi();
apiInstance.getInventory().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

**{String: Number}**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrderById

> Order getOrderById(orderId)

Find purchase order by ID

For valid response try integer IDs with value &lt;&#x3D; 5 or &gt; 10. Other values will generated exceptions

### Example

```javascript
import PetStoreNodeJsSdk from 'Pet Store Node.js SDK';

let apiInstance = new PetStoreNodeJsSdk.StoreApi();
let orderId = 789; // Number | ID of order that needs to be fetched
apiInstance.getOrderById(orderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**| ID of order that needs to be fetched | 

### Return type

[**Order**](Order.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml, application/json


## placeOrder

> Order placeOrder(opts)

Place an order for a pet

Place a new order in the store

### Example

```javascript
import PetStoreNodeJsSdk from 'Pet Store Node.js SDK';

let apiInstance = new PetStoreNodeJsSdk.StoreApi();
let opts = {
  'order': new PetStoreNodeJsSdk.Order() // Order | 
};
apiInstance.placeOrder(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | [**Order**](Order.md)|  | [optional] 

### Return type

[**Order**](Order.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/xml, application/x-www-form-urlencoded
- **Accept**: application/json

