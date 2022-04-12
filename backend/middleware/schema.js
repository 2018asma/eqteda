const { body, validationResult } = require("express-validator");

exports.signupSchema = () => {
  return [
    body("username").not().isEmpty().withMessage("username is required"),
    body("email")
      .isEmail()
      .normalizeEmail()
      .not()
      .isEmpty()
      .withMessage("Email is required"),
    body("password").exists().withMessage("password required"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must at least of 8 charachters"),
  ];
};

exports.validateSignup = (req, res, next) => {
  const validationErrors = validationResult(req);
  if (validationErrors.isEmpty()) {
    return next();
  }
  const errors = validationErrors.array().map((err) => {
    return { [err.param]: err.msg };
  });
  return res.status(400).json(errors);
};
