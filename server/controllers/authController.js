const User = require('../models/User');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

class authContoller {

    async registration(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: 'Registration error', errors: errors.array() });
            }

            const { username, password } = req.body;
            const usernameInDataBase = await User.findOne({ username });

            if (usernameInDataBase) {
                return res.status(400).json({ message:'User with this name already exists' });
            }
            
            const hashPassword = bcrypt.hashSync(password, 10);

            const user = new User({ username, password: hashPassword });
            await user.save();

            return res.json({ message: 'User registered successfully' });
        } catch (err) {
            console.log(err);
            res.status(400).json({ message:'Registration error' });
        }
    }

    async login(req, res) {
        try {
            
        } catch (err) {
            console.log(err);
            res.status(400).json({ message: 'Login error' });
        }
    }

    async getUsers(req, res) {
        try {
            res.json('server work')
        } catch (err) {
            
        }
    }
}

module.exports = new authContoller();