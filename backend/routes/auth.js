const { json } = require("body-parser");
const express = require("express");
const { send } = require("express/lib/response");
const multer = require("multer");
const passport = require("passport");
const router = express.Router();

const authController = require("../controllers/admin/authController");

router.post("/signup", multer().none(), authController.signup);

router.post(
  "/signin",
  multer().none(),
  passport.authenticate("local"),
  (req, res, next) => {
    res.send(req.user);
  }
);

router.get("/signout", (req, res) => {
  req.logout();
  res.send("your loggedout");
});

module.exports = router;
