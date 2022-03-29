const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../db");
const User = require("../models/User");

// Custom fields
const customFields = {
  usernameField: "email",
  passwordField: "password",
};

// Verify calback passed to strategy:
const verifyCallback = (username, password, done) => {
  User.findOne({
    raw: true,
    where:{
      email: username,
    }
  })
    .then((user) => {
      if (!user) {
        return done(null, false);
      }

      const isValid = bcrypt.compareSync(password, user.password);

      if (isValid) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
    .catch((err) => {
      done(err);
    });
};

// Define verify call for local-strategy
const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy)

// these two function save /remove id in session 
passport.serializeUser((user, done)=>{
    done(null, user.id)
})

passport.deserializeUser((userId, done)=>{
    User.findOne({
        where:{
            id: userId
        }
    }).then(user=>{
        done(null, user)
    }).catch(err=>{
        done(null, err)
    })
})