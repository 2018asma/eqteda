const Oragizer = require("../models/Organizer");
const OrganizerAccount = require("../models/OrganizerAccount");
const { body, validationResult } = require("express-validator");
const { isFileNotExist } = require("../middleware/multer");

// --------------- Schema ---------------

exports.organizerValidateRules = () => {
  return [
    body("name").not().isEmpty().withMessage("name is required"),
    body("description").not().isEmpty().withMessage("description is required"),
    body("telegram")
      .isURL()
      .optional({ checkFalsy: true, nullable: true })
      .withMessage("Invalid URL"),
    body("youtube")
      .isURL()
      .optional({ checkFalsy: true, nullable: true })
      .withMessage("Invalid URL"),
    body("instagram")
      .isURL()
      .optional({ checkFalsy: true, nullable: true })
      .withMessage("Invalid URL"),
    body("twitter")
      .isURL()
      .optional({ checkFalsy: true, nullable: true })
      .withMessage("Invalid URL"),
  ];
};

exports.programValidateSchema = ()=>{
  return (
      [
          body("name").not().isEmpty().withMessage("name is required"),
          body("description").not().isEmpty().withMessage("description is required"),
          body("status").isBoolean().withMessage("status not boolean"),
          body("start")
            .isDate()
            .optional({ checkFalsy: true, nullable: true })
            .withMessage("Must be a date"),
          body("end")
            .isDate()
            .optional({ checkFalsy: true, nullable: true })
            .withMessage("Must be a date"),
          body('organizer_id').not().isEmpty().withMessage('organizer id is required')
        ]
  )
} 

// Create
exports.createValidate = (req, res, next) => {

  let fileError = "";

  const errors = validationResult(req);

  if (errors.isEmpty() && !isFileNotExist(req.file)) {
    return next();
  }

  if (isFileNotExist(req.file)) {
    fileError = isFileNotExist(req.file);
  }

  const extractedErrors = [];

  if (fileError) {
    extractedErrors.push({ file: fileError });
  }

  if (!errors.isEmpty()) {
    errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));
  }

  return res.status(400).json(extractedErrors);
};

// Update
exports.updateValidate = async (req, res, next) => {
  const { errors } = validationResult(req);

  if (errors.length === 0) {
    return next();
  }

  const organizer = await Oragizer.findOne({
    include: {
      model: OrganizerAccount,
      as: "accounts",
      attributes: ["telegram", "youtube", "instagram", "twitter"],
    },
    nest: true,
    where: {
      id: req.params.id,
    },
    raw: true,
  });

  const validateErrors = errors.map((err) => {
    return {
      [err.param]: err.msg,
    };
  });

  res.status(400).json(validateErrors);
};



exports.validations =  (req, res, next) => {

  let fileError = '';
  let errors = []

  const validationErrors = validationResult(req)

  if(validationErrors.isEmpty() &&req.file){
    return next()
  }

  if(!req.file){
     fileError = {file:'file not exist / valid type'}
     errors.push(fileError)
  }

  if(!validationErrors.isEmpty()){
    validationErrors.array().map(err=>{
      errors.push({[err.param]: err.msg})
    })
  }

  return res.status(400).json(errors)

}