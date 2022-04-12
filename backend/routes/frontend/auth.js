const express = require("express");
const multer = require("multer");
const router = express.Router();

const User = require("../../models/User");

const authController = require("../../controllers/admin/authController");

router.post("/signup", multer().none(), authController.signup);

router.post("/signin", multer().none(), authController.signin);

router.get("/signout", (req, res) => {
  req.logout();
  res.send("your loggedout");
});

module.exports = router;
