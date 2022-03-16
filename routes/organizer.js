const express = require('express')

const organizerController = require('../controllers/organizerController')

const router = express.Router()

const {organizerValidateRules, validate} = require('../middleware/express-validator')
const { upload } = require('../middleware/multer')
const { body } = require('express-validator')

// const upload = require('../middleware/multer')



// GET Organizers
router.get('/', organizerController.getOrganizers)



// CREATE Organizer Form
router.get('/create', organizerController.createOrganizer)

// STORE Oragizer
router.post('/create', (organizerController.storeOrganizer))


// Edit form Organizer
router.get('/edit/:id', organizerController.editOrganizer)

// UPDATE Organizer
router.post('/edit/:id',upload, organizerValidateRules(), validate, organizerController.updateOrganizer)

// Get Organizr
router.get('/:id', organizerController.getOrganizer)


// Delete organizer
router.post('/destroy/:id', organizerController.destroyOrganizer)

module.exports = router;