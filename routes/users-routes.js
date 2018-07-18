var authController = require('../controllers/authcontroller.js');
var passport = require("../config/passport/passport.js")
console.log("we here")

module.exports = function(app, passport) {

    app.get('/seller_manager', isLoggedIn, authController.dashboard);
 
    app.get('/logout', authController.logout);

     app.post('/login',
       passport.authenticate('local-signin', {
           successRedirect: '/',
           failureRedirect: '/login',
           failureFlash : true // allow flash messages
       })
    );
    app.get('/signup', authController.signup);
 

    app.get('/login', authController.signin);

    app.post('/signup',
        passport.authenticate('local-signup', {
            successRedirect: '/login',
            failureRedirect: '/signup',
            failureFlash: true
        })
        
    )
    console.log("dick");

    function isLoggedIn(req, res, next) {
 
        if (req.isAuthenticated())
 
            return next();
 
        res.redirect('/login');
 
    }
}



