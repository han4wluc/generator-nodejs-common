'use strict';
var yeoman = require('yeoman-generator');
var _ = require('lodash');

module.exports = yeoman.generators.NamedBase.extend({
  promptPlural: function(){
    var done = this.async();
    var prompts = [{
      name: 'pluralName',
      message: 'Input plural name'
    }];

    this.prompt(prompts, function(props){
      this.pluralName = props.pluralName;
      done();
    }.bind(this));
  },
  promptFirstParam: function(){
    var done = this.async();
    var prompts = [{
      name: 'firstParam',
      message: 'Input the first parameter'
    }];

    this.prompt(prompts, function(props){
      this.firstParam = props.firstParam;
      done();
    }.bind(this));
  },
  generateTemplates: function(){
    var context = {
      name: this.name,
      pluralName: this.pluralName,
      classedName: _.capitalize(this.name),
      firstParam: this.firstParam
    };
    var myPath = 'app/api/' + this.name + '/';
    this.template('_thing.routes.js', myPath + this.name + '.routes.js', context);
    this.template('_thing.model.js', myPath + this.name + '.model.js', context);
    this.template('_thing.controller.js', myPath + this.name + '.controller.js', context);
    this.template('test/_thing.endpoints.spec.js', myPath + 'test/' + this.name + '.endpoints.spec.js', context);
    this.template('test/_thing.factory.js', myPath + 'test/' + this.name + '.factory.js', context);
    this.template('test/_thing.model.spec.js', myPath + 'test/' + this.name + '.model.spec.js', context);
  
    // var hook   = '//==HOOK==//',
    //     path   = 'routes.js',
    //     file   = require('html-wiring').readFileAsString(path);
    //     // slug   = this.name.toLowerCase().replace(/ /g, '_'),
    //     // insert = 'get 'styleguide/'+slug+'' => 'styleguide#'+slug+''';
    // var insert = 'app.use(\'/api/'+context.pluralName+'\', require(\'./app/api/'+context.name+ '/' + context.name + '.routes.js\'));';
    // if (file.indexOf(insert) === -1) {
    //   this.write(path, file.replace(hook, insert+'\n  '+hook));
    // }

  }

});