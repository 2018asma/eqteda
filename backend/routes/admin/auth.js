const express = require("express");
const multer = require("multer");
const router = express.Router();
const passport = require("passport");

const { signupSchema, validateSignup } = require("../../middleware/schema");
const isEmailExist = require("../../middleware/isEmailExist").isEmailExist;
const isAdmin = require("../../middleware/passport-jwt-auth").isAdmin;
const authController = require("../../controllers/admin/authController");

router.post(
  "/signup",
  multer().none(),
  passport.authenticate("jwt", { session: false }),
  // isAdmin,
  signupSchema(),
  validateSignup,
  isEmailExist,
  authController.signup
);

router.post("/signin", multer().none(), authController.signin);

router.get(
  "/signout",
  // passport.authenticate("jwt", { session: false }),
  // isAdmin,
  (req, res) => {
    res.clearCookie('access_token')
    res.send('done');
  }
);


module.exports = router;
