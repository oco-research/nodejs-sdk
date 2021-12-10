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
    instance = new OcoResearchNodejsSdk.Address();
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

  describe('Address', function() {
    it('should create an instance of Address', function() {
      // uncomment below and update the code to test Address
      //var instance = new OcoResearchNodejsSdk.Address();
      //expect(instance).to.be.a(OcoResearchNodejsSdk.Address);
    });

    it('should have the property street (base name: "street")', function() {
      // uncomment below and update the code to test the property street
      //var instance = new OcoResearchNodejsSdk.Address();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new OcoResearchNodejsSdk.Address();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new OcoResearchNodejsSdk.Address();
      //expect(instance).to.be();
    });

    it('should have the property zip (base name: "zip")', function() {
      // uncomment below and update the code to test the property zip
      //var instance = new OcoResearchNodejsSdk.Address();
      //expect(instance).to.be();
    });

  });

}));
