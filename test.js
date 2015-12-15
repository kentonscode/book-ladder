var request = require('supertest');
var should = require('should');
var agent = require('supertest')('http://localhost:1337');


describe('Backend route test for Google API', function() {

  it('status code 200', function(done) {
    agent
    .get('/author-search/milton')
    .expect(200)
    .end(done);
  });

  it('status code 200', function(done) {
    agent
    .get('/title-search/paradise-lost')
    .expect(200)
    .end(done);
  });
});