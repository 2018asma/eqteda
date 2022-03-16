const Oragizer = require('../models/Organizer')
const { body, validationResult } = require('express-validator')
const {isFileNotExist} = require('../middleware/multer')

exports.organizerValidateRules = ()=>{
    return  ([
         body('name').not().isEmpty().withMessage('name is required'),
         body('description').not().isEmpty().withMessage('description is required'),
        ])
}


exports.validate = async (req, res, next) => {
  
    let fileError = '';
    const errors = validationResult(req)
    const organizer = await Oragizer.findOne({
        where:{
            id: req.params.id
        },
        raw: true
    })
    
    
    if (errors.isEmpty() && !isFileNotExist(req.file)) {
      return next()
    }

    if(isFileNotExist(req.file)){
      fileError = isFileNotExist(req.file)
    }
    
  
    const extractedErrors = []
    if(fileError){
      extractedErrors.push({file: fileError})
    }
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

    res.json(extractedErrors) 

    return res.render("organizers/edit", {
      organizer,
      errors: extractedErrors
    });
  }