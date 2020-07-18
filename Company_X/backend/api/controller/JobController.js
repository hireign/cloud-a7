const con = require('../db/sql')

const allJobs = () => {
    return new Promise(function(resolve, reject) {
        const query = 'SELECT * FROM jobs';
        con.query(query, (err, result) => {
            if (err) {
                return resolve({status: false, message: "Field format is wrong!!"})
            }
            resolve({status: true, message: result});
        });
    });
}

const getOneJob = (jobName, partId) => {
    return new Promise(function(resolve, reject) {
        const query = "SELECT * FROM jobs WHERE jobName = '" + jobName + "' and partId= " + partId;
        con.query(query, (err, result) => {
            if (err) {
                return resolve({status: false, message: "Field format is wrong!!"});
            }
            if (result.length === 0) {
                resolve({status: false, message: "Job does not exist"})
            } else {
                resolve({status: true, message: result});
            }
        });
    });
}

const getJobs = (jobName) => {
    return new Promise(function(resolve, reject) {
        const query = "SELECT * FROM jobs WHERE jobName = '" + jobName + "'";
        con.query(query, (err, result) => {
            if (err) {
                return resolve({status: false, message: "Field format is wrong!!"});
            }
            resolve({status: true, message: result});
        });
    });
}

const addJob = (jobName, partId, qty) => {
    return new Promise(function(resolve, reject) {
        const query = "SELECT * FROM jobs WHERE jobName = '" + jobName + "' and partId= " + partId;
        con.query(query, (err, result) => {
            if (err) {
                return resolve({status: false, message: "Field format is wrong!!"});
            }
            if (result.length === 0) {
                const query = "INSERT INTO jobs VALUES ('" + jobName + "'," + partId + "," + qty + ")";
                con.query(query, (err, result) => {
                    if (err) {
                        return resolve({status: false, message: "Field format is wrong!!"});
                    }
                    resolve({status: true, message: "Job added successfully!!"});
                });
            } else {
                resolve({status: false, message: "Job already exists!!"});
            }
        });
    });
}

const editJob = (jobName, partId, qty) => {
    return new Promise(function(resolve, reject) {
        const query = "SELECT * FROM jobs WHERE jobName = '" + jobName + "' and partId= " + partId;
        con.query(query, (err, result) => {
            if (err) {
                return resolve({status: false, message: "Field format is wrong!!"});
            }
            if (result.length === 0) {
                resolve({status: false, message: "Job does not exist!!"});
            } else {
                let query = "UPDATE jobs SET qty =" + qty + " WHERE jobName='" + jobName + "' and partId= " + partId;
                con.query(query, (err, result) => {
                    if (err) {
                        return resolve({status: false, message: "Field format is wrong!!"});
                    }
                    resolve({status: true, message: "Job modified successfully!!"});
                });
            }
        });
    });
}

const deleteJob = (jobName, partId) => {
    return new Promise(function(resolve, reject) {
        const query = "DELETE FROM jobs WHERE jobName = '" + jobName + "' and partId= " + partId;
        con.query(query, (err, result) => {
            if (err) {
                return resolve({status: false, message: "Field format is wrong!!"});
            }
            resolve({status: true, message: "Job deleted!!"});
        });
    });
}

module.exports.allJobs = allJobs;
module.exports.getOneJob = getOneJob;
module.exports.getJobs = getJobs;
module.exports.addJob = addJob;
module.exports.editJob = editJob;
module.exports.deleteJob = deleteJob;
