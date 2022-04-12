const express = require("express");
const router = express.Router();

// Controllers
const organizerController = require("../../controllers/admin/organizerController");

// Middelewares
const { uploadOrganizer } = require("../../middleware/multer");
const {
  organizerValidateRules,
  updateValidate,
  validations,
} = require("../../middleware/express-validator");

const { Organizer } = require("../../models");

// Program Middleware
const programController = require("../../controllers/admin/programController");
const { programValidateSchema } = require("../../middleware/express-validator");
const passport = require("passport");
const isAdmin = require("../../middleware/passport-jwt-auth").isAdmin;

// Store Oragizer
router.post(
  "/create",
  uploadOrganizer,
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  organizerValidateRules(),
  validations,
  organizerController.storeOrganizer
);

// Update Organizer
router.put(
  "/edit/:id",
  uploadOrganizer,
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  organizerValidateRules(),
  updateValidate,
  organizerController.updateOrganizer
);

// Delete Organizer
router.delete(
  "/destroy/:id",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  organizerController.destroyOrganizer
);

// Update Image
router.put(
  "/:id/update-image",
  uploadOrganizer,
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  (req, res, next) => {
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
        res.status(201).json({msg: 'Image updated successfully'})
      }).catch(err=>{
        res.status(500).send(err)
      })
    } else {
      res.send("No file Uploaded");
    }
  }
);

// Create Program
router.post(
  "/:id/programs/create",
  uploadOrganizer,
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  programValidateSchema(),
  validations,
  programController.createProgram
);

module.exports = router;
