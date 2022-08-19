const User = require('../models/UserModel');

exports.register = (req, res) => {
    const { username, password } = req.body;
    new User({
        username,
        password
    }).save((err, user) => {
        if (err) {
            res.status(401).json({
                message: 'User not successful created',
                error: err
            });
        } else {
            res.status(200).json({
                message: 'User successfully created',
                user,
            });
        }
    });
};
