const User = require('../models/User');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const { secret } = require('../../config.js');

const generateToken = (id) => {
    const payload = {
        id
    }
    return jwt.sign(payload, secret, { expiresIn: '4h'});
}

class authContoller {

    async registration(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: 'Registration error', errors:  errors.array()});
            }

            const { username, password } = req.body;

            const userInDataBase = await User.findOne({ username });

            if (userInDataBase) {
                res.status(400).json({ message: 'User with this name already exists' });
            }
            
            const hashPassword = bcrypt.hashSync(password, 10);

            const user = new User({ username, password: hashPassword });
            await user.save();

            return res.json({ message: 'User registered successfully' });
        } catch (err) {
            console.log(err);
            return res.status(400).json({ message: 'Registration error' });
        }
    }

    async login(req, res) {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({ username });

            const userInDataBase = await User.findOne({ username });

            if (!userInDataBase) {
                return res.status(400).json({ message: 'User not found' });
            }

            const validPassword = bcrypt.compareSync(password, user.password);

            if (!validPassword) {
                return res.status(400).json({ message: 'Wrong password' });
            }

            const token = generateToken(user._id);
            return res.json(token);
        } catch (err) {
            console.log(err);
            return res.status(400).json({ message: 'Login error' });
        }
    }
}

module.exports = new authContoller();