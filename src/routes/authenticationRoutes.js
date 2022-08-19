module.exports = function(app, authenticationController) {
    app.route('/authentication/register')
        .post(authenticationController.register);
};
