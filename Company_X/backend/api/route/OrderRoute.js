const express = require('express');
const router = express.Router();
const method = require('../controller/OrderController');


router.get('/allorders', async function (req, res) {
    const data = await method.allOrders();
    res.send(data);
});

router.get('/oneorder', async function (req, res) {
    const data = await method.specificOrder(req.query.jobName);
    res.send(data);
});

router.post('/addorder', async function (req, res) {
    const data = await method.addOrder(req.body.partId, req.body.jobName, req.body.userId, req.body.qty);
    res.send(data);
});

module.exports = router;
