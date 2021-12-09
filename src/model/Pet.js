/*
* Garage Week 2021. All rights reserved.
* Your custom license text goes here.
*/

import ApiClient from '../ApiClient';
import Category from './Category';
import Tag from './Tag';

/**
 * The Pet model module.
 * @module model/Pet
 * @version 1.1.7
 */
class Pet {
    /**
     * Constructs a new <code>Pet</code>.
     * @alias module:model/Pet
     * @param name {String} 
     * @param photoUrls {Array.<String>} 
     */
    constructor(name, photoUrls) { 
        
        Pet.initialize(this, name, photoUrls);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, photoUrls) { 
        obj['name'] = name;
        obj['photoUrls'] = photoUrls;
    }

    /**
     * Constructs a <code>Pet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Pet} obj Optional instance to populate.
     * @return {module:model/Pet} The populated <code>Pet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Pet();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = Category.constructFromObject(data['category']);
            }
            if (data.hasOwnProperty('photoUrls')) {
                obj['photoUrls'] = ApiClient.convertToType(data['photoUrls'], ['String']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [Tag]);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Pet.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Pet.prototype['name'] = undefined;

/**
 * @member {module:model/Category} category
 */
Pet.prototype['category'] = undefined;

/**
 * @member {Array.<String>} photoUrls
 */
Pet.prototype['photoUrls'] = undefined;

/**
 * @member {Array.<module:model/Tag>} tags
 */
Pet.prototype['tags'] = undefined;

/**
 * pet status in the store
 * @member {module:model/Pet.StatusEnum} status
 */
Pet.prototype['status'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
Pet['StatusEnum'] = {

    /**
     * value: "available"
     * @const
     */
    "available": "available",

    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",

    /**
     * value: "sold"
     * @const
     */
    "sold": "sold"
};



export default Pet;

