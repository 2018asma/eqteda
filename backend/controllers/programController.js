const { Program } = require("../models");

// Get All programs
exports.getPrograms = (req, res) => {
  Program.findAll()
    .then((programs) => {
      if (programs.length !== 0) {
        return res.status(200).json(programs);
      }
      res.status(404).json({
        msg: "not found",
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

// Get Program
exports.getProgram = (req, res) => {
  const { id } = req.params;
  Program.findOne({
    where: {
      id,
    },
  })
    .then((program) => {
      if (program) {
        return res.status(200).json(program);
      }
      res.status(404).json({
        msg: "Not found",
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

// Create Program
exports.createProgram = (req, res) => {
  const program = { ...req.body };
  program.image = req.file.path;

  Program.create(program)
    .then((program) => {
      res.status(201).json(program);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

