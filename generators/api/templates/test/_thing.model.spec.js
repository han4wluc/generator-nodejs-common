var chai = require('chai');
var should = chai.should();
var <%= classedName %> = require('../<%= name %>.model');
var <%= classedName %>Factory = require('./<%= name %>.factory')();
var mongoose = require('mongoose');

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


// describe('<%= classedName %> Schema', function(){
//   beforeEach(function(done){
//     <%= classedName %>Factory.createMany(function(err, <%= name %>) {
//       done();
//     });
//   });

//   it('should responde validation error on non unique <%= name %>name', function(done){
//     var new<%= classedName %> = new <%= classedName %>(<%= classedName %>Factory.<%= name %>);
//     <%= classedName %>.create(new<%= classedName %>, function(err, created<%= classedName %>){
//       if(err.<%= firstParam %> === 'ValidationError'){
//         console.log(err.errors[Object.keys(err.errors)[0]].message);
//       }
//       should.exist(err);
//       done();
//     });
//   });

// });


describe('<%= classedName %> Static Methods', function(){
  describe('<%= classedName %>.index', function(){
    beforeEach(function(done){
      <%= classedName %>Factory.createMany<%= classedName %>s(function(){
        done();
      });
    });

    it('should return all matching <%= pluralName %>', function(done){
      var req = {
        query: {
          //empty
        }
      };
      <%= classedName %>.index(req, function(err, <%= pluralName %>){
        <%= pluralName %>.length.should.equal(2);
        done();
      });
    });

    it('should return all matching <%= pluralName %>', function(done){
      var req = {
        query: {
          <%= firstParam %>: <%= classedName %>Factory.<%= name %>1.<%= firstParam %>
        }
      };
      <%= classedName %>.index(req, function(err, <%= pluralName %>){
        <%= pluralName %>.length.should.equal(1);
        done();
      });
    });
  });

  describe('<%= classedName %>.show', function(){
    beforeEach(function(done){
      <%= classedName %>Factory.createOne<%= classedName %>(function(err, <%= name %>_) {
        done();
      });
    });
    it('should get correct <%= name %>', function(done){
      var req = {
        params: {
          id: <%= classedName %>Factory.<%= name %>1._id
        }
      };
      <%= classedName %>
      .show(req, function(err, <%= name %>){
        <%= name %>.<%= firstParam %>.should.equal(<%= classedName %>Factory.<%= name %>1.<%= firstParam %>);
        done();
      });
    });
    it('should get correct <%= name %>', function(done){
      var req = {
        params: {
          id: <%= classedName %>Factory.<%= name %>0._id  //Todo CastError
        }
      };
      <%= classedName %>
      .show(req, function(err, <%= name %>){
        should.not.exist(err);
        should.not.exist(<%= name %>);
        done();
      });
    });
  });

  describe('<%= classedName %>.new', function(){
    it('should create a new <%= name %>', function(done){
      var req = {
        body: {
          <%= firstParam %>: 'asdf'
        }
      };
      <%= classedName %>.new(req, function(err, <%= name %>){
        <%= name %>.<%= firstParam %>.should.equal(req.body.<%= firstParam %>);
        done();
      });
    });
  });

  describe('<%= classedName %>.update', function(){
    beforeEach(function(done){
      <%= classedName %>Factory.createOne<%= classedName %>(function(err, <%= name %>) {
        done();
      });
    });
    it('should update <%= name %>', function(done){
      var req = {
        body: {
          <%= firstParam %>: 'Mynew Name'
        },
        params:{
          id: <%= classedName %>Factory.<%= name %>1._id
        }
      };
      <%= classedName %>.update(req, function(err, <%= name %>){
        <%= name %>.<%= firstParam %>.should.equal('Mynew Name');
        <%= classedName %>.find({
          <%= firstParam %>: 'Mynew Name'
        }, function(err, found<%= classedName %>s){
          found<%= classedName %>s.length.should.equal(1);
          done();
        });
      });
    });
  });

  describe('<%= classedName %>.destroy', function(){
    beforeEach(function(done){
      <%= classedName %>Factory.createOne<%= classedName %>(function(err, <%= name %>) {
        done();
      });
    });
    it('should remove <%= name %>', function(done){
      var req = {
        params:{
          id: <%= classedName %>Factory.<%= name %>1._id
        }
      };
      <%= classedName %>.destroy(req, function(err, <%= name %>){
        <%= name %>.deleted.should.equal(true);
        <%= classedName %>.find({deleted:false}, function(err, found<%= classedName %>s){
          found<%= classedName %>s.length.should.equal(0);
        });
        done();
      });
    });
  });

});


