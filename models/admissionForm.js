const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const admissionFormSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
},{
    timestamps: true
});

module.exports = mongoose.model('AdmissionForm', admissionFormSchema);