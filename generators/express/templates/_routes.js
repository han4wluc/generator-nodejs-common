module.exports = function(app){
  app.use('/api/something', require('../app/api/something/something.routes.js'));
  //==HOOK==//
};