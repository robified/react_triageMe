const express = require('express');
const router = express.Router();
const admissionFormsCtrl = require('../../controllers/api/admissionForms');

// GET /api/admissionForms
router.get('/', admissionFormsCtrl.index);
router.get('/:id', admissionFormsCtrl.show);
router.post('/', admissionFormsCtrl.create);
router.delete('/:id', admissionFormsCtrl.delete);
router.put('/:id', admissionFormsCtrl.update);

module.exports = router;