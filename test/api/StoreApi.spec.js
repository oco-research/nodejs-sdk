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
    factory(root.expect, root.PetStoreNodeJsSdk);
  }
}(this, function(expect, PetStoreNodeJsSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PetStoreNodeJsSdk.StoreApi();
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

  describe('StoreApi', function() {
    describe('deleteOrder', function() {
      it('should call deleteOrder successfully', function(done) {
        //uncomment below and update the code to test deleteOrder
        //instance.deleteOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInventory', function() {
      it('should call getInventory successfully', function(done) {
        //uncomment below and update the code to test getInventory
        //instance.getInventory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrderById', function() {
      it('should call getOrderById successfully', function(done) {
        //uncomment below and update the code to test getOrderById
        //instance.getOrderById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('placeOrder', function() {
      it('should call placeOrder successfully', function(done) {
        //uncomment below and update the code to test placeOrder
        //instance.placeOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
