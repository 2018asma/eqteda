const express = require("express");
const router = express.Router();

const programController = require("../../controllers/frontend/programController");

// Get All Programs
router.get("/", programController.getPrograms);

// Get Program
router.get("/:id", programController.getProgram);

module.exports = router;
