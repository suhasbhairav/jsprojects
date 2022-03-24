const express = require("express");
const register = express.Router();

const passport = require("../../Auth");

register.post("/register", (req, res) => {
    passport.authenticate("local-register", function (error, user, info){
        if(error){
            return res.status(500).json({
                message: error || "Something happened",
                error: error.message || "Server error",
            });
        }

        req.logIn(user, function (error, data){
            if(error){
                return res.status(500).json({
                    message: error || "Something happened",
                    error: error.message || "Server error",
                });
            }

            return res.json(user);
        });
    })(req, res);
});

module.exports = register;