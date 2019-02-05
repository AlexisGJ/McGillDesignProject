const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ChildSchema = new Schema({
    name: {type: String, required: true, max: 100},
    number: {type: Number, required: true},
});


// Export the model
module.exports = mongoose.model('Child', ChildSchema);
