const express = require('express');

const excelExportController = require('../controllers/excel');

const router = express.Router();

router.post('/excel', excelExportController.makeFile);

module.exports = router;
