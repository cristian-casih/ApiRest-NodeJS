const mongoose = require('mongoose');

const SchemaDog = new mongoose.Schema({
    name: String,
    race: String,
    color: String
})

module.exports = mongoose.model('Cat', SchemaDog);
