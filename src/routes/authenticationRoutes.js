module.exports = function(app, authenticationController) {
    app.route('/authentication/register')
        .post(authenticationController.register);

    app.route('/authentication/users')
        .get(authenticationController.getAllUsers);
};
