const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/User");

// Manualy created
const cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) token = req.cookies["access_token"];
  return token;
};

const options = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: process.env.SECRET_ACCESS_TOKEN,
  passReqToCallback: true,
};

passport.use(
  new JWTStrategy(options, function (req, jwt_payload, done) {
  console.log(req)
    User.findOne({
      raw: true,
      where: {
        id: jwt_payload.id,
      },
    })
      .then((user) => {
  console.log(req)

        if (user) {
  console.log(req)

          const reqToken = req.cookies["access_token"];
          if (reqToken !== user.token) {
  console.log(req)

            done(null, false);
          }
  console.log(req)

          done(null, user);
        } else {
  console.log(req)

          done(null, false);
        }
      })
      .catch((err) => {
        done(null, err);
      });
  })
);
