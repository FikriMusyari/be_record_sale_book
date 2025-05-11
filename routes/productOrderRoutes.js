const express = require('express');
const router = express.Router();
const productOrderController = require('../controllers/productOrderController');

router.get('/', productOrderController.getAllProductOrders);
router.post('/', productOrderController.createProductOrder);

module.exports = router;
