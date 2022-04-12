const express = require("express");
const router = express.Router();

// Controllers
const organizerController = require("../../controllers/frontend/organizerController");

// Middelewares
const { uploads } = require("../../middleware/multer");
const {
  organizerValidateRules,
  updateValidate,
  validations,
} = require("../../middleware/express-validator");

const { Organizer } = require("../../models/Organizer");


// Program Middleware
const programController = require("../../controllers/frontend/programController");
const { programValidateSchema } = require("../../middleware/express-validator");
const passport = require("passport");
const isAdmin  = require("../../middleware/passport-jwt-auth").isAdmin;



// Get Organizers
router.get("/", organizerController.getOrganizers);


// Get Organizr
router.get("/:id", organizerController.getOrganizer);




module.exports = router;
