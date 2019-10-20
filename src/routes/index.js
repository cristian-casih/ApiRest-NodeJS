const express = require('express');
const router = express.Router();

//routes
router.use('/cat', require('./cat.routes'));
router.use('/dog', require('./dog.routes'));

module.exports=router;