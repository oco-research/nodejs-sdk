/*
* Garage Week 2021. All rights reserved.
* Your custom license text goes here.
*/

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OcoResearchNodejsSdk);
  }
}(this, function(expect, OcoResearchNodejsSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OcoResearchNodejsSdk.Order();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Order', function() {
    it('should create an instance of Order', function() {
      // uncomment below and update the code to test Order
      //var instance = new OcoResearchNodejsSdk.Order();
      //expect(instance).to.be.a(OcoResearchNodejsSdk.Order);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new OcoResearchNodejsSdk.Order();
      //expect(instance).to.be();
    });

    it('should have the property petId (base name: "petId")', function() {
      // uncomment below and update the code to test the property petId
      //var instance = new OcoResearchNodejsSdk.Order();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instance = new OcoResearchNodejsSdk.Order();
      //expect(instance).to.be();
    });

    it('should have the property shipDate (base name: "shipDate")', function() {
      // uncomment below and update the code to test the property shipDate
      //var instance = new OcoResearchNodejsSdk.Order();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new OcoResearchNodejsSdk.Order();
      //expect(instance).to.be();
    });

    it('should have the property complete (base name: "complete")', function() {
      // uncomment below and update the code to test the property complete
      //var instance = new OcoResearchNodejsSdk.Order();
      //expect(instance).to.be();
    });

  });

}));
