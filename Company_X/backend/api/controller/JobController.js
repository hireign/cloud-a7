const db = require('../db/sql')

const allJobs = (req, res) => {
    const query = 'SELECT * FROM jobs';
    db.query(query, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(JSON.stringify(result));
    });
}

const addJob = (req, res) => {
    let query = "SELECT * FROM jobs WHERE jobName = '" + req.body.jobName + "' and partId= " + req.body.partId;
    db.query(query, (err, result) => {
        if (err) {
            throw err;
        }
        if (result.length === 0) {
            let query = "INSERT INTO jobs VALUES ('" + req.body.jobName + "'," + req.body.partId + "," + req.body.qty + ")";
            db.query(query, (err, result) => {
                if (err) {
                    throw err;
                }
                res.send({"status": true, "message": "Job Added"});
            });
        } else {
            res.send({"status": false, "message": "Job already exists"});
        }
    });
}

const deleteJob = (req, res) => {
    let query = "DELETE FROM jobs WHERE jobName = '" + req.body.jobName + "' and partId= " + req.body.partId;
    db.query(query, (err, result) => {
        if (err) {
            throw err;
        }
        res.send({"status": true});
    });
}

const editJob = (req, res) => {
    let query = "SELECT * FROM jobs WHERE jobName = '" + req.body.jobName + "' and partId= " + req.body.partId;
    db.query(query, (err, result) => {
        if (err) {
            throw err;
        }
        if (result.length === 0) {
            res.send({"status": false, "message": "Job does not exists"});
        } else {
            let query = "UPDATE jobs SET qty =" + req.body.qty + " WHERE jobName='" + req.body.jobName + "' and partId= " + req.body.partId;
            db.query(query, (err, result) => {
                if (err) {
                    throw err;
                }
                res.send({"status": true});
            });
        }
    });
}

const getOneJob = (req, res) => {
    let query = "SELECT * FROM jobs WHERE jobName = '" + req.query.jobName + "' and partId= " + req.query.partId;
    db.query(query, (err, result) => {
        if (err) {
            throw err;
        }
        if (result.length === 0) {
            res.send({"status": false, "message": "Job does not exists"});
        } else {
            res.send(result);
        }
    });
}

const getJobs = (req, res) => {
    let query = "SELECT * FROM jobs WHERE jobName = '" + req.query.jobName + "'";
    db.query(query, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    });
}

module.exports.getOneJob = getOneJob;
module.exports.getJobs = getJobs;
module.exports.editJob = editJob;
module.exports.deleteJob = deleteJob;
module.exports.allJobs = allJobs;
module.exports.addJob = addJob;

