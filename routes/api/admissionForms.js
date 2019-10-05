const express = require('express');
const router = express.Router();
const admissionFormsCtrl = require('../../controllers/api/admissionForms');

// GET /api/admissionForms
router.post('/', admissionFormsCtrl.create);

module.exports = router;