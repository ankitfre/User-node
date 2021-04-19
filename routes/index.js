var express = require('express');
var router = express.Router();
var {index,create,edit,update} = require('../controllers/UserController');

var {userRules} = require('./../middlewares/validation/UserValidator')

router.get('/',index)

router.get('/create-user', function(req, res, next) {
  res.render('user/create');
});
router.post('/create-user',userRules(),create)
router.get('/edit/user/:id',edit)
router.post('/edit/user/:id',userRules(),update)

module.exports = router;
