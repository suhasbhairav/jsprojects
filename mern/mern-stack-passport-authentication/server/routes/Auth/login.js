const express = require("express");
const login = express.Router();

const passport = require("../../Auth");

login.post("/login", function (req, res){
    passport.authenticate("local-login", function (error, user, info){
        if(error){
            return res.status(500).json({
                message: error || "Error",
                error: error.message || "Server error",
            });
        }

        req.logIn(user, function(error, data){
            if(error) {
                return res.status(500).json({
                    message: error || "Something happened",
                    error: error.message || "Server error",
                });
            }
            });

            user.isAuthenticated = true;
            return res.json(user);
        })(req, res);
    });

    module.exports = login;