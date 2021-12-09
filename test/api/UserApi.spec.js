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
    instance = new OcoResearchNodejsSdk.UserApi();
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

  describe('UserApi', function() {
    describe('createUser', function() {
      it('should call createUser successfully', function(done) {
        //uncomment below and update the code to test createUser
        //instance.createUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createUsersWithListInput', function() {
      it('should call createUsersWithListInput successfully', function(done) {
        //uncomment below and update the code to test createUsersWithListInput
        //instance.createUsersWithListInput(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteUser', function() {
      it('should call deleteUser successfully', function(done) {
        //uncomment below and update the code to test deleteUser
        //instance.deleteUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserByName', function() {
      it('should call getUserByName successfully', function(done) {
        //uncomment below and update the code to test getUserByName
        //instance.getUserByName(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('loginUser', function() {
      it('should call loginUser successfully', function(done) {
        //uncomment below and update the code to test loginUser
        //instance.loginUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('logoutUser', function() {
      it('should call logoutUser successfully', function(done) {
        //uncomment below and update the code to test logoutUser
        //instance.logoutUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateUser', function() {
      it('should call updateUser successfully', function(done) {
        //uncomment below and update the code to test updateUser
        //instance.updateUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
