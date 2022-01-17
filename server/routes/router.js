const Router = require('express');
const router = new Router();
const controller = require('../controllers/authController');

router.get('/user', controller.getUser);

module.exports = router;