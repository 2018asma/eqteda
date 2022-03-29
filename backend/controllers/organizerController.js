const { Organizer, Program, OrganizerAccount } = require("../models");

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

// Store Organizer
exports.storeOrganizer = (req, res) => {
  const organizer = {
    name: req.body.name,
    description: req.body.description,
    image: req.file.path,
  };

  Organizer.create(organizer).then((organizer) => {
    res.status(201).json(organizer);
  });
};

// Update Organizer
exports.updateOrganizer = async (req, res) => {
  const orgData = await Organizer.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!orgData) {
    return res.status(201).json({
      msg: "Not Exist",
    });
  }
  await OrganizerAccount.update(
    {
      telegram: req.body.telegram,
      youtube: req.body.youtube,
      instagram: req.body.instagram,
      twitter: req.body.twitter,
    },
    {
      where: {
        organizerId: req.params.id,
      },
    }
  );

  let organizer = {
    name: req.body.name,
    description: req.body.description,
  };

  if (req.file) {
    organizer.image = req.file.path;
  }

  Organizer.update(organizer, {
    where: {
      id: req.params.id,
    },
  })
    .then((organizer) => {
      return res.json({
        msg: "Updated Successfully",
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

// Destroy Organizer
exports.destroyOrganizer = async (req, res) => {
  await Organizer.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((organizer) => {
      res.status(200).json(organizer);
    })
    .catch((err) => {
      res.status(500).json({
        msg: err,
      });
    });
};
