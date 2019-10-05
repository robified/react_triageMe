const express = require('express');
const router = express.Router();
const admissionFormsCtrl = require('../../controllers/api/admissionForms');

// GET /api/admissionForms
router.get('/', admissionFormsCtrl.index);
router.post('/', admissionFormsCtrl.create);
router.get('/:id', admissionFormsCtrl.show);
router.put('/:id', admissionFormsCtrl.update);
router.delete('/:id', admissionFormsCtrl.delete);

module.exports = router;