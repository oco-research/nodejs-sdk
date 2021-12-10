/*
* Garage Week 2021. All rights reserved.
* Your custom license text goes here.
*/

import ApiClient from '../ApiClient';

/**
 * The Address model module.
 * @module model/Address
 * @version 1.1.11
 */
class Address {
    /**
     * Constructs a new <code>Address</code>.
     * @alias module:model/Address
     */
    constructor() { 
        
        Address.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Address} obj Optional instance to populate.
     * @return {module:model/Address} The populated <code>Address</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Address();

            if (data.hasOwnProperty('street')) {
                obj['street'] = ApiClient.convertToType(data['street'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('zip')) {
                obj['zip'] = ApiClient.convertToType(data['zip'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} street
 */
Address.prototype['street'] = undefined;

/**
 * @member {String} city
 */
Address.prototype['city'] = undefined;

/**
 * @member {String} state
 */
Address.prototype['state'] = undefined;

/**
 * @member {String} zip
 */
Address.prototype['zip'] = undefined;






export default Address;

