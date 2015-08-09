var <%= classedName %> = require('../<%= name %>.model');
var self = {}; 

module.exports = function(){
  return self;
};

var <%= name %>0 = {
  _id: '5582903832211aec0b1b3e62'
}

var <%= name %>1 = {
  _id: '5582903832211aec0b1b3e63',
  <%= firstParam %>: 'First <%= classedName %>',
  deleted: false
};

var <%= name %>2 = {
  _id: '5582903832211aec0b1b3e64',
  <%= firstParam %>: 'Second <%= classedName %>',
  deleted: false
};

var <%= name %>3 = {
  _id: '5582903832211aec0b1b3e65',
  <%= firstParam %>: 'Third <%= classedName %>',
  deleted: true
};

self.<%= name %>0 = <%= name %>0;
self.<%= name %>1 = <%= name %>1;
self.<%= name %>2 = <%= name %>2;

self.createOne<%= classedName %> = function(cb){
  <%= classedName %>.create(<%= name %>1, cb);
};

self.createMany<%= classedName %>s = function(cb){
  <%= classedName %>.create(<%= name %>1, <%= name %>2, <%= name %>3, cb);
};