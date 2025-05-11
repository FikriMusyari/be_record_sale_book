const express = require('express');
const router = express.Router();
const queueController = require('../controllers/queueController');

router.get('/', queueController.getAllQueue);
router.post('/', queueController.addToQueue);

module.exports = router;
