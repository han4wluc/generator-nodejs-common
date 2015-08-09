'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  writing: function () {
    this.fs.copy(
      this.templatePath('_express.js'),
      this.destinationPath('./config/express.js')
    );
    this.fs.copy(
      this.templatePath('_routes.js'),
      this.destinationPath('./config/routes.js')
    );
  }
});