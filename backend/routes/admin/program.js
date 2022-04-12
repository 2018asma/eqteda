const express = require("express");
const multer = require("multer");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const passport = require("passport");
const isAdmin = require("../../middleware/passport-jwt-auth").isAdmin;

// Middlewares
const { uploadProgram } = require("../../middleware/multer");
const { programValidateSchema } = require("../../middleware/express-validator");
const { validations } = require("../../middleware/express-validator");

const programController = require("../../controllers/admin/programController");

// Create Program
router.delete(
  "/destroy/:id",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  programController.destroyProgram
);

// Update Program
router.put(
  "/edit/:id",
  uploadProgram,
  [body("status").isBoolean().withMessage("status not boolean")],
  (req, res, next) => {
    const error = validationResult(req);
    if (error.isEmpty()) {
      return next();
    }
    res.status(401).json({ [error.errors[0].param]: error.errors[0].msg });
  },
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  programController.updateProgram
);

module.exports = router;
