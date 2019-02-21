const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ChildSchema = new Schema({
    name: {type: String, required: true, max: 100},
    collection_id: {type: String, required: true},
    active: {type: Boolean, required: true},
    range_min: {type: Number, default: 2.0},
    range_max: {type: Number, default: 5.0},
    location: {type: String}
});


// Export the model
module.exports = mongoose.model('Child', ChildSchema);
