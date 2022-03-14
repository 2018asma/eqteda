const Organizer = require("../models/Organizer");
const OrganizerAccount = require('../models/OrganizerAccount')
const { upload } = require("../middleware/multer");


const Joi = require("joi");

// GET Oragizers
exports.getOrganizers = (req, res) => {
  Organizer.findAll({
    raw: true
  }).then((organizers) => {
    res.render("organizers", { organizers });
  });
};



// Get Organizer
exports.getOrganizer =  (req, res, next)=>{
  Organizer.findOne({
    include: [
      {
        model: OrganizerAccount,
        as: 'accounts',
        attributes: ['telegram','youtube', 'instagram', 'twitter']      }
    ],
    where:{
      id: req.params.id
    },
    raw: true,
    nest: true,
    }).then((organizer)=>{
    if(organizer === null){
      return res.status(404).json({
        message: 'Not found!'
      })
    }
    res.status(200).render('organizers/show', {organizer})
  }).catch(err=>{
    res.status(500).send(err)
  })
}


// Create Organizer Form
exports.createOrganizer = (req, res) => {
  res.render("organizers/create");
};

// Store Organizer
exports.storeOrganizer = (req, res) => {
  upload(req, res, (reqError) => {
    const schema = Joi.object().keys({
      name: Joi.string().required(),
      description: Joi.string(),
      telegram: Joi.optional(),
      youtube: Joi.optional(),
      twitter: Joi.optional(),
      instagram: Joi.optional(),
    });

    const { value, error } = schema.validate(req.body, {
      abortEarly: false,
      language: {
        string: {
          base: `{{key}} must be a string`,
        },
      },
    });

    const valid = error == undefined;
    if (!req.file || !valid) {
      let errMsg = reqError ? reqError.message : "no file!";
      let inputErrors = !valid ? error.details : "";
      if (req.file) {
        errMsg = "";
      }
      res.render("organizers/create", {
        fileError: errMsg,
        errors: inputErrors,
        values: value,
      });
    } else {
      const organizer = {
        name: value.name,
        description: value.description,
        image: req.file.path,
        accounts:{
          telegram: req.body.telegram,
          youtube: req.body.youtube,
          instagram: req.body.instagram,
          twitter: req.body.twitter
        }      
      };
      Organizer.create(organizer,{
        include: {
          model: OrganizerAccount,
          as: 'accounts',
        }
        
      }).then(()=>{
        res.redirect("/organizers");
      });
    }
  });
};

// Destroy Organizer
exports.destroyOrganizer = async (req, res) => {
  await Organizer.destroy({
    where: {
      id: req.params.id
    }
  })
  res.redirect('/organizers');
};

