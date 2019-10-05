const AdmissionForm = require('../../models/admissionForm');

module.exports = {
    create
};



async function create(req, res) {
    const admissionForm = await AdmissionForm.create(req.body);
    res.status(201).json(admissionForm);
}