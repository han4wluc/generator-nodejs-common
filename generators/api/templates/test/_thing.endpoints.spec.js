var chai = require('chai');
var should = chai.should();
var request = require('supertest');
var mongoose = require('mongoose');
var MyFactory = require('./<%= name %>.factory')();

var config = require('../../../../config/env.json')[process.env.NODE_ENV || 'testing'];


before(function(done){
  if (mongoose.connection.db) {
    return done();
  }
  mongoose.connect(config.mongodb, done);
});

beforeEach(function(done){
  mongoose.connection.db.dropDatabase(function(err){
    if (err) {
      return done(err);
    }
    done();
  });
});

after(function(done){
  mongoose.connection.db.dropDatabase(function(){
    mongoose.connection.close(done);
  });
});

describe('GET /api/<%= pluralName %>', function() {
  it('should respond with 200', function(done) {
    request('http://localhost:' + config.port)
      .get('/api/<%= pluralName %>')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('GET /api/<%= pluralName %>/:id', function() {
  beforeEach(function(done){
    MyFactory.createOne<%= classedName %>(function(err, <%= name %>) {
      done();
    });
  });
  it('should respond with 200', function(done) {
    request('http://localhost:' + config.port)
      .get('/api/<%= pluralName %>/'+MyFactory.<%= name %>1._id)
      .expect(200, done);
  });
  it('should respond with 404', function(done){
    request('http://localhost:' + config.port)
      .get('/api/<%= pluralName %>/'+MyFactory.<%= name %>0._id)
      .expect(404, done);
  });
});

describe('POST /api/<%= pluralName %>', function() {
  it('should respond with 201', function(done) {
    var params = {
      <%= firstParam %>: 'asdf'
    };
    request('http://localhost:' + config.port)
      .post('/api/<%= pluralName %>')
      .send(params)
      .expect('Content-Type', /json/)
      .expect(201, done);
  });
});

describe('PUT /api/<%= pluralName %>/:id', function() {
  beforeEach(function(done){
    MyFactory.createOne<%= classedName %>(function(err, <%= name %>) {
      done();
    });
  });
  it('should respond with 200', function(done) {
    //params?
    request('http://localhost:' + config.port)
      .put('/api/<%= pluralName %>/'+ MyFactory.<%= name %>1._id)
      .expect(200, done);
  });
  it('should respond with 404', function(done){
    request('http://localhost:' + config.port)
      .put('/api/<%= pluralName %>/'+ MyFactory.<%= name %>0._id)
      .expect(404, done);
  });
});

describe('DELETE /api/<%= pluralName %>/:id', function() {
  beforeEach(function(done){
    MyFactory.createOne<%= classedName %>(function(err, <%= name %>) {
      done();
    });
  });
  it('should respond with 204', function(done) {
    request('http://localhost:' + config.port)
      .delete('/api/<%= pluralName %>/'+ MyFactory.<%= name %>1._id)
      .expect(204, done);
  });
  it('should respond with 404', function(done){
    request('http://localhost:' + config.port)
      .delete('/api/<%= pluralName %>/'+ MyFactory.<%= name %>0._id)
      .expect(404, done);
  });
});

