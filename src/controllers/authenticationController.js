const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');

exports.register = (req, res) => {
    bcrypt.hash(req.body.password, 10).then((hash) => {
        req.body.password = hash;
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
    });
};

exports.login = (req, res) => {
    console.log('Login request');
    User.findOne({ username: req.body.username }, (err,user) => {
        if (!user) {
            res.status(401).json({
                message: 'Login not successful',
                error: 'Email or password wrong',
            });
        } else {
            bcrypt.compare(req.body.password, user.password).then(function(result) {
                result
                    ? res.status(200).json({
                        message: 'Login successful',
                        user,
                    })
                    : res.status(401).json({
                        message: 'Login not succesful',
                        error: 'Email or password wrong' });
            });
        }
        if (err) {
            res.status(400).json({
                message: 'An error occurred',
                error: err.message,
            });
        }
    });
};

exports.getAllUsers = (req, res) => {
    User.find({}, (err, users) => {
        if (!err) {
            res.json(users);
        }
    });
};
