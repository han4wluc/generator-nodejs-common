var <%= classedName %>;
var methods = {};

function handleError(res, err) {
  console.log(err);
  var resJson = {
    data: {
      errorMsg: 'An Unexpected Error Occurred'
    }
  };
  if(err.name === 'ValidationError'){
    resJson.data.errorMsg = err.errors[Object.keys(err.errors)[0]].message;
    return res.status(403).send(resJson);
  }
  return res.status(500).json(resJson);
}

module.exports = function(<%= classedName %>_){
  <%= classedName %> = <%= classedName %>_;
  return methods;
};

// Get <%= pluralName %>
methods.index = function(req, res){
  <%= classedName %>.index(req, function(err, <%= pluralName %>){
    if(err) { return handleError(res, err); }
    return res.status(200).json(<%= pluralName %>);
  });
};

// Get a single <%= name %>
methods.show = function(req, res) {
  <%= classedName %>.show(req, function (err, <%= name %>) {
    if(err) { return handleError(res, err); }
    if(!<%= name %>) { return res.status(404).send(); }
    return res.status(200).json(<%= name %>);
  });
};

// Creates a new <%= name %> in the DB.
methods.new = function(req, res) {
  <%= classedName %>.new(req, function(err, <%= name %>) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(<%= name %>);
  });
};

// Updates an existing <%= name %> in the DB.
methods.update = function(req, res) {
  <%= classedName %>.update(req, function (err, <%= name %>) {
    if(err) { return handleError(res, err); }
    if(!<%= name %>) { return res.status(404).send(); }
    return res.status(200).json(<%= name %>);
  });
};

// Deletes a <%= name %> from the DB.
methods.destroy = function(req, res) {
  <%= classedName %>.destroy(req, function (err, <%= name %>) {
    if(err) { return handleError(res, err); }
    if(!<%= name %>) { return res.status(404).send(); }
    return res.status(204).send();
  });
};