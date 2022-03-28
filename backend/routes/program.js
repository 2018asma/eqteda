const express = require("express");
const multer = require("multer");
const router = express.Router();

// Middlewares
const { uploads } = require("../middleware/multer");
const { programValidateSchema } = require("../middleware/express-validator");
const { validations } = require("../middleware/express-validator");

const programController = require("../controllers/programController");

// Get All Programs
router.get("/", programController.getPrograms);


// Get Program
router.get("/:id", programController.getProgram);

module.exports = router;
