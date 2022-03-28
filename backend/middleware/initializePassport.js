const User = require("../models/User");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;

module.exports = (passport) => {
  const authenticateUser = (email, password, done) => {
    User.findOne({
      raw: true,
      where: { email: email },
    }).then((user) => {
      if (!user) {
        return done(null, false, { message: 'Incorrect username or password.' });
      }
      bcrypt.compare(password, user.password, (err, resulte) => {
        if (err) throw err;
        if (resulte === true) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Incorrect username or password.' });
        }
      });
    });
  };

  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));

  passport.serializeUser((user, done) => {
    console.log(user);
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findOne({
      where: {
        id: id,
      },
    }).then((user) => {
      done(null, user);
    });
  });

};
