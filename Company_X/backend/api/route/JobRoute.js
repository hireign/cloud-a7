const express = require('express');
const router = express.Router();
const method = require('../controller/JobController');

router.get('/alljobs', async function (req, res) {
    const data = await method.allJobs();
    res.send(data);
});

router.get('/onejob', async function (req, res) {
    const data = await method.getOneJob(req.query.jobName, req.query.partId);
    res.send(data);
});

router.get('/getparts', async function (req, res) {
    const data = await method.getJobs(req.query.jobName);
    res.send(data);
});

router.post('/addjob', async function (req, res) {
    const data = await method.addJob(req.body.jobName, req.body.partId, req.body.qty);
    res.send(data);
});

router.put('/modifyjob', async function (req, res) {
    const data = await method.editJob(req.body.jobName, req.body.partId, req.body.qty);
    res.send(data);
});

router.put('/deletejob', async function (req, res) {
    const data = await method.deleteJob(req.body.jobName, req.body.partId);
    res.send(data);
});

module.exports = router;
