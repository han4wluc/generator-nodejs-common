var amqp = require('amqp');
var connection = amqp.createConnection({ host: 'dev.rabbitmq.com' });

connection.on('error', function (e) {
  console.log(e);
})

connection.on('close', function (e) {
  console.log('amqp connection closed.');
});

connection.on('ready', function () {
  console.log('ready', "connected to " + connection.serverProperties.product);
  var exchange = connection.exchange('node-topic-exchange');
  var queue = connection.queue('node-topic-queue-one');
  queue.bind(exchange, "topic_a.*");
  queue.subscribe(function (message) {
    console.log(message);
  });
});