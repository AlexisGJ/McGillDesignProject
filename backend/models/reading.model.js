const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ReadingSchema = new Schema({
    device: {type: String},
    date: {type: Number},
    dateString: {type: String, required: true},
    sgv: {type: String, required: true},
    direction: {type: String}
})

// Export the model
module.exports = mongoose.model('Reading', ReadingSchema);
