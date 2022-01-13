const Router = require('express');
const router = new Router();
const controller = require('../controllers/authController');
const { check } = require('express-validator');
 
router.post('/registration', [
    check('username', 'Username cannot be shorter than 4 characters or longer than 25 characters')
        .isLength({ min: 4, max: 25 }),
    check('password', 'Password cannot be shorter than 6 characters and must contain a number')
        .not()
        .isIn(['123456', 'password']).withMessage('Do not use a common word as the password')
        .isLength({ min: 6 })
        .matches(/\d/)
], controller.registration);
router.post('/login', controller.login);

module.exports = router;