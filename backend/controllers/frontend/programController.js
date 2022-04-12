const { Program } = require("../../models");

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
