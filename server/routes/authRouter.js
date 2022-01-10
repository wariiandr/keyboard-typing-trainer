const Router = require('express');
const router = new Router();
const controller = require('../controllers/authController');
const { check } = require('express-validator');
 
router.post('/registration', [
    check('username', 'Username cannot be shorter than 4 characters or longer than 25 characters').isLength({ min: 4, max: 25 }),
    check('password', 'Password cannot be shorter than 6 characters').isLength({ min: 6 })
], controller.registration);
router.post('/login', controller.login);
router.get('/users', controller.getUsers);

module.exports = router;