'use strict';

const chai = require('chai');
const expect = require('chai').expect;
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

  // GET - Should be able to reach test endpoint
  it('should reach the child test endpoint', function() {
    return chai.request(app)
      .get('/api/child/test')
      .then(function(res) {
        expect(res).to.have.status(200);
      });
  });

});