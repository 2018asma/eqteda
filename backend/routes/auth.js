const { json } = require("body-parser");
const express = require("express");
const multer = require("multer");
const passport = require("passport");
const router = express.Router();

const authController = require("../controllers/authController");

router.post("/signup", multer().none(), authController.signup);

router.post("/signin", multer().none(), (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (!user) {
      return res
        .status(401)
        .json({ message: "كلمة المرور او الايميل غير صحيح" });
    }
    console.log('=====Signin====')
    console.log(req.isAuthenticated())
    console.log(req.session.id, user)
    return res.status(200).json(info);
  })(req, res, next);
});

module.exports = router;
