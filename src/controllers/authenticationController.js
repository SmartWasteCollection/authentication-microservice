const User = require('../models/UserModel');

exports.register = (req, res) => {
    new User(req.body).save((err, user) => {
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

exports.getAllUsers = (req, res) =>{
    User.find({}, (err, users) => {
        if (!err) {
            res.json(users);
        }
    });
};
