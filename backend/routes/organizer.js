const express = require("express");
const router = express.Router();

// Controllers
const organizerController = require("../controllers/organizerController");

// Middelewares
const { uploads } = require("../middleware/multer");
const {
  organizerValidateRules,
  updateValidate,
  validations,
} = require("../middleware/express-validator");

const { Organizer } = require("../models");


// Program Middleware
const programController = require("../controllers/programController");
const { programValidateSchema } = require("../middleware/express-validator");



// Get Organizers
router.get("/", organizerController.getOrganizers);

// Store Oragizer
router.post(
  "/create",
  uploads,
  organizerValidateRules(),
  validations,
  organizerController.storeOrganizer
);

// Update Organizer
router.put(
  "/edit/:id",
  uploads,
  organizerValidateRules(),
  updateValidate,
  organizerController.updateOrganizer
);

// Get Organizr
router.get("/:id", organizerController.getOrganizer);

// Delete Organizer
router.post("/destroy/:id", organizerController.destroyOrganizer);

// Update Image
router.post("/:id/update-image", uploads, (req, res, next) => {
  if (req.file) {
    Organizer.update(
      { image: req.file.path },
      {
        where: {
          id: req.params.id,
        },
        raw: true,
      }
    ).then(() => {
      res.redirect("back");
    });
  } else {
    res.send("No file Uploaded");
  }
});

// Create Program
router.post(
  "/:id/programs/create",
  uploads,
  programValidateSchema(),
  validations,
  programController.createProgram
);

module.exports = router;
