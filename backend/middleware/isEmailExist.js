const User = require("../models/User");
exports.isEmailExist = (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    if (!user) {
      return next();
    }
    return res.status(302).json({ msg: "Email already exist" });
  });
};
