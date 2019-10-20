const express = require('express');
const router = express.Router();
const dogController = require('../controller/dog.controller');

//Cats routes
router.get('/', dogController.getDogs);
router.get('/:id', dogController.getDog);
router.post('/', dogController.saveDog);
router.put('/:id', dogController.updateDog);
router.delete('/:id', dogController.deleteDog);

module.exports = router;