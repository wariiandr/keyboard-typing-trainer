const jwt = require('jsonwebtoken');
const { secret } = require('../../config');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];

        if (!token) {
            return res.status(403).json({ message: 'User not authorized' });
        }
        req.user = jwt.verify(token, secret);
        next();
    } catch (err) {
        console.log(err);
        return res.status(403).json({ message: 'User not authorized' });
    }
}