const express = require('express');
const router = express.Router();
const method = require('../controller/OrderController');

router.get('/allorders', method.allOrders);
router.get('/oneorder', method.specificOrder);
router.post('/addorder', method.addOrder);

module.exports = router;
