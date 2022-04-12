const { Organizer, Program, OrganizerAccount } = require("../../models");

// GET Oragizers
exports.getOrganizers = (req, res) => {
  Organizer.findAll({
    order: [["id", "DESC"]],
    attributes: ["id", "name", "description", "image"],
    include: [
      {
        model: OrganizerAccount,
        as: "accounts",
        attributes: ["id", "telegram", "youtube", "twitter", "instagram"],
      },
      {
        model: Program,
        as: "programs",
        attributes: [
          "id",
          "name",
          "description",
          "image",
          "status",
          "start",
          "end",
        ],
      },
    ],
  })
    .then((organizers) => {
      if (!organizers) {
        res.status(404).json({
          msg: "Not found",
        });
      }
      
      res.status(200).json(organizers);
    })
    .catch((err) => {
      res.status(500).json({
        msg: err,
      });
    });
};

// Get Organizer
exports.getOrganizer = (req, res, next) => {
  Organizer.findOne({
    include: [
      {
        model: OrganizerAccount,
        as: "accounts",
        attributes: ["telegram", "youtube", "instagram", "twitter"],
      },
    ],
    where: {
      id: req.params.id,
    },
    raw: true,
    nest: true,
  })
    .then((organizer) => {
      if (!organizer) {
        return res.status(404).json({
          msg: "Not found!",
        });
      }
      res.status(200).json(organizer);
    })
    .catch((err) => {
      res.status(500).send({
        msg: err,
      });
    });
};

