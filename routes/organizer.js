const express = require('express')

const organizerController = require('../controllers/organizerController')

const router = express.Router()


// GET Organizers
router.get('/', organizerController.getOrganizers)



// CREATE Organizer Form
router.get('/create', organizerController.createOrganizer)

// STORE Oragizer
router.post('/create', (organizerController.storeOrganizer))

// Get Organizr
router.get('/:id', organizerController.getOrganizer)



// Delete organizer
router.post('/destroy/:id', organizerController.destroyOrganizer)

module.exports = router;