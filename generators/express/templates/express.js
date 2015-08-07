var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');

var env = require('./env.json');
var node_env = process.env.NODE_ENV || 'testing';
var config = env[node_env];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
require('./routes')(app);

var port = config.port;
http.listen(port, function(){
  console.log('server listening on: ' + port + ' started on ' + new Date());
});