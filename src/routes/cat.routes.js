const express= require('express');
const router =express.Router();
const catController= require('../controller/cat.controller');

//Cats routes
router.get('/',catController.getCats);
router.get('/:id',catController.getCat);
router.post('/',catController.saveCat);
router.put('/:id',catController.updateCat);
router.delete('/:id',catController.deleteCat);
module.exports=router;