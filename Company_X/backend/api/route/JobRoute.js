const express = require('express');
const router = express.Router();
const method = require('../controller/JobController');

router.post('/',  method.registerUser);
router.get('/alljobs',method.allJobs);
router.get('/onejob',method.getOneJob);
router.get('/getparts',method.getJobs);
router.post('/addjob',method.addJob);
router.put('/modifyjob',method.editJob);
router.delete('/deletejob',method.deleteJob);


module.exports = router;