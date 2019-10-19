const mongoose = require('mongoose');

const CatSchema= new mongoose.Schema({
    name: String,
    race: String,
    color: String
});

module.exports = mongoose.model('cats', CatSchema);
