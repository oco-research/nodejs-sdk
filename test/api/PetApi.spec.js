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
    instance = new OcoResearchNodejsSdk.PetApi();
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

  describe('PetApi', function() {
    describe('addPet', function() {
      it('should call addPet successfully', function(done) {
        //uncomment below and update the code to test addPet
        //instance.addPet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePet', function() {
      it('should call deletePet successfully', function(done) {
        //uncomment below and update the code to test deletePet
        //instance.deletePet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findPetsByStatus', function() {
      it('should call findPetsByStatus successfully', function(done) {
        //uncomment below and update the code to test findPetsByStatus
        //instance.findPetsByStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findPetsByTags', function() {
      it('should call findPetsByTags successfully', function(done) {
        //uncomment below and update the code to test findPetsByTags
        //instance.findPetsByTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPetById', function() {
      it('should call getPetById successfully', function(done) {
        //uncomment below and update the code to test getPetById
        //instance.getPetById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePet', function() {
      it('should call updatePet successfully', function(done) {
        //uncomment below and update the code to test updatePet
        //instance.updatePet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePetWithForm', function() {
      it('should call updatePetWithForm successfully', function(done) {
        //uncomment below and update the code to test updatePetWithForm
        //instance.updatePetWithForm(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadFile', function() {
      it('should call uploadFile successfully', function(done) {
        //uncomment below and update the code to test uploadFile
        //instance.uploadFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
