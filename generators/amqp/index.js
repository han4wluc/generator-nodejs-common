'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  writing: function () {
    this.fs.copy(
      this.templatePath('_amqp_exchange.js'),
      this.destinationPath('./config/amqp.js')
    );
  }
});