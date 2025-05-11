const express = require('express');
const router = express.Router();
const statusController = require('../controllers/statusController');

router.get('/', statusController.getAllStatuses);
router.post('/', statusController.createStatus);

module.exports = router;
