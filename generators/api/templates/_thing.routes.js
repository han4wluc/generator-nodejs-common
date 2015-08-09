var express = require('express');
var <%= classedName %> = require('./<%= name %>.model');
var controller = require('./<%= name %>.controller')(<%= classedName %>);
var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.new);
router.put('/:id', controller.update);
// router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;