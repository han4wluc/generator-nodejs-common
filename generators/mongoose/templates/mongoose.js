var mongoose = require('mongoose');

var env = require('./env.json');
var node_env = process.env.NODE_ENV || 'testing';
var config = env[node_env];

mongoose.connect(config.mongo);
mongoose.connection.once('open', function(callback){
  console.log('mongoose connection opened at ' + config.mongo);
});
mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', console.log);