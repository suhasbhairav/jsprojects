const Strategy = require("passport-local").Strategy
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const SignupStrategy = new Strategy({
    passReqToCallback: true,
    usernameField: "email"
}, function (req, email, password, done){
    User.findOne({email}).lean(),exec((err, user) => {
        if(err){
            return done(err, null);
        }

        if(!user){
            const encryptedPassword = bcrypt.hashSync(password, salt);
            const {first_name, last_name} = req.body;

            let newUser = new User({
                email,
                password: encryptedPassword,
                first_name,
                last_name,
            });

            newUser.save((error, inserted) => {
                if(error){
                    return done(error, null);
                }

                return done(null, inserted);
            });
        }
        if(user){
            return ("User already exists.", null);
        }
    });
});

module.exports = SignupStrategy;