// var uniqueValidator = require('mongoose-unique-validator');
var _ = require('lodash');

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var <%= classedName %>Schema = new Schema({
  <%= firstParam %>: String,
  friends: [{ type: Schema.Types.ObjectId, ref: '<%= classedName %>'}],
  deleted: { type: Boolean, default: false }
});

// <%= classedName %>Schema.path('profileImgUrl').validate(function (value) {
//   return /blue|green|white|red|orange|periwinkle/i.test(value);
// }, 'Invalid {PATH} color {VALUE}');

// <%= classedName %>Schema.plugin(uniqueValidator, { message: '{PATH} {VALUE} is already in use.' });

<%= classedName %>Schema.statics = {
  index: function(req, cb){
    //TODO check for invalid params
    var query = req.query || {};
    query.deleted = false;
    this
    .find(query)
    .select('<%= firstParam %>')
    .populate('')
    .exec(cb);
  },
  show: function(req, cb){
    this.findById(req.params.id)
    .select('<%= firstParam %>')
    .populate('')
    .exec(function (err, <%= name %>) {
      if(err) { return cb(err); }
      if(!<%= name %>) { return cb(null, null); }
      return cb(null, <%= name %>);
    });
  },
  new: function(req, cb){
    this
    .create(req.body, function(err, <%= name %>){
      if(err){ return cb(err); }
      return cb(null, <%= name %>);
    });
  },
  update: function(req, cb){
    if(req.body._id) { 
      delete req.body._id; 
    }
    this.findById(req.params.id, function (err, <%= name %>) {
      if (err) { return cb(err); }
      if(!<%= name %>) { return cb(null, null); }
      var updated = _.merge(<%= name %>, req.body);
      updated.save(function (err) {
        if (err) { return cb(err); }
        return cb(null, <%= name %>);
      });
    });
  },
  destroy: function(req, cb){
    this.findById(req.params.id, function (err, <%= name %>) {
      if(err) { return cb(err); }
      if(!<%= name %>) { return cb(null, null); }
      <%= name %>.deleted = true;
      <%= name %>.save(cb);
    });
  }
};

module.exports = mongoose.model('<%= classedName %>', <%= classedName %>Schema);