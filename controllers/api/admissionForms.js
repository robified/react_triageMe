const AdmissionForm = require('../../models/admissionForm');

module.exports = {
    index,
    show,
    create
};

async function index(req, res) {
    const admissionForms = await AdmissionForm.find({});
    res.status(200).json(admissionForms);
};

async function show(req, res) {
    const admissionForm = await AdmissionForm.findById(req.params.id);
    res.status(200).json(admissionForm);
};

async function create(req, res) {
    const admissionForm = await AdmissionForm.create(req.body);
    res.status(201).json(admissionForm);
};