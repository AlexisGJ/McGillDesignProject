'use strict';

const chai = require('chai');
const expect = require('chai').expect;
const chaiContained = require('chai-contained');
chai.use(require('chai-http'));

require('dotenv').config()

const app = require('../app.js'); // Our app

// const godMode = {
// 	"email": "god@realemail.com",
// 	"password": "cdb234",
// 	"type": "Applicant"
// };

// var godToken = null;

describe('Testing carowanis web application backend server', function() {
  this.timeout(5000); // How long to wait for a response (ms)

  before(function() {

  });

  after(function() {

  });

  // GET - Should be able to reach child test endpoint
  it('should reach the child test endpoint', function() {
    return chai.request(app)
      .get('/api/child/test')
      .then(function(res) {
        expect(res).to.have.status(200);
      });
  });

    // GET - Should be able to reach reading test endpoint
    it('should reach the reading test endpoint', function() {
      return chai.request(app)
        .get('/api/reading/test')
        .then(function(res) {
          expect(res).to.have.status(200);
        });
    });

    // GET - Should be able to get all children 
    it('should get all children', function() {
      return chai.request(app)
        .get('/api/child/all')
        .then(function(res) {
          expect(res).to.have.status(200);
        });
    });

    // GET - Should be able to get all readings from active children 
    it('should get all readings from active children', function() {
      return chai.request(app)
        .get('/api/reading/allActiveChildren')
        .then(function(res) {
          expect(res).to.have.status(200);
        });
    });      

});