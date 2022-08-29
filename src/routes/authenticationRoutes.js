module.exports = function(app, authenticationController) {
    app.route('/authentication/register')
        .post(authenticationController.register);

    app.route('/authentication/user/:id')
        .put(authenticationController.updateUser);

    app.route('/authentication/login')
        .post(authenticationController.login);

    app.route('/authentication/users')
        .get(authenticationController.getAllUsers);
};
