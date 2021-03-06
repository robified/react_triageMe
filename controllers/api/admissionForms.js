const AdmissionForm = require('../../models/admissionForm');

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteOne
};

async function index(req, res) {
    const admissionForms = await AdmissionForm.find({});
    res.status(200).json(admissionForms);
};

async function create(req, res) {
    const admissionForm = await AdmissionForm.create(req.body);
    res.status(201).json(admissionForm);
};

async function show(req, res) {
    const admissionForm = await AdmissionForm.findById(req.params.id);
    res.status(200).json(admissionForm);
};    

async function update(req, res) {
    const updatedAdmissionForm = await AdmissionForm.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedAdmissionForm);
};

async function deleteOne(req, res) {
    const deletedAdmissionForm = await AdmissionForm.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedAdmissionForm);
};