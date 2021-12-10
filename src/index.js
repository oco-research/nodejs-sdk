/*
* Garage Week 2021. All rights reserved.
* Your custom license text goes here.
*/


import ApiClient from './ApiClient';
import Address from './model/Address';
import ApiResponse from './model/ApiResponse';
import Category from './model/Category';
import Customer from './model/Customer';
import Order from './model/Order';
import Pet from './model/Pet';
import Tag from './model/Tag';
import User from './model/User';
import PetApi from './api/PetApi';
import StoreApi from './api/StoreApi';
import UserApi from './api/UserApi';


/**
* NodeJS SDK for Pet Store API.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var OcoResearchNodejsSdk = require('index'); // See note below*.
* var xxxSvc = new OcoResearchNodejsSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new OcoResearchNodejsSdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new OcoResearchNodejsSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new OcoResearchNodejsSdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.1.10
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Address model constructor.
     * @property {module:model/Address}
     */
    Address,

    /**
     * The ApiResponse model constructor.
     * @property {module:model/ApiResponse}
     */
    ApiResponse,

    /**
     * The Category model constructor.
     * @property {module:model/Category}
     */
    Category,

    /**
     * The Customer model constructor.
     * @property {module:model/Customer}
     */
    Customer,

    /**
     * The Order model constructor.
     * @property {module:model/Order}
     */
    Order,

    /**
     * The Pet model constructor.
     * @property {module:model/Pet}
     */
    Pet,

    /**
     * The Tag model constructor.
     * @property {module:model/Tag}
     */
    Tag,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
    * The PetApi service constructor.
    * @property {module:api/PetApi}
    */
    PetApi,

    /**
    * The StoreApi service constructor.
    * @property {module:api/StoreApi}
    */
    StoreApi,

    /**
    * The UserApi service constructor.
    * @property {module:api/UserApi}
    */
    UserApi
};
