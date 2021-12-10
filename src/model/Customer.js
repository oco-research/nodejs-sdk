/*
* Garage Week 2021. All rights reserved.
* Your custom license text goes here.
*/

import ApiClient from '../ApiClient';
import Address from './Address';

/**
 * The Customer model module.
 * @module model/Customer
 * @version 1.1.11
 */
class Customer {
    /**
     * Constructs a new <code>Customer</code>.
     * @alias module:model/Customer
     */
    constructor() { 
        
        Customer.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Customer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Customer} obj Optional instance to populate.
     * @return {module:model/Customer} The populated <code>Customer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Customer();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], [Address]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Customer.prototype['id'] = undefined;

/**
 * @member {String} username
 */
Customer.prototype['username'] = undefined;

/**
 * @member {Array.<module:model/Address>} address
 */
Customer.prototype['address'] = undefined;






export default Customer;

