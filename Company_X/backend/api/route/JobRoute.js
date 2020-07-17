const express = require('express');
const router = express.Router();
const method = require('../controller/JobController');

router.get('/alljobs', async function (req, res) {
    const data = await method.allJobs();
    res.send(data);
});

router.get('/onejob',method.getOneJob);
router.get('/getparts',method.getJobs);
router.post('/addjob',method.addJob);
router.put('/modifyjob',method.editJob);
router.delete('/deletejob',method.deleteJob);

module.exports = router;
