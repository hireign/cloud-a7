const con = require('../db/sql');

const allOrders = () => {
    return new Promise(function(resolve, reject) {
        const query='SELECT * FROM PartOrdersX';
        con.query(query,(err, result) => {
            if(err){
                return reject({status: false, message: "Database Issue"});
            }
            resolve({status: true, message: result});
        });
    });
}

const specificOrder = (jobName) => {
    return new Promise(function(resolve, reject) {
        const query = "SELECT * FROM PartOrdersX WHERE jobName='" + jobName + "' ORDER BY jobName ASC, userId ASC, partId ASC";
        con.query(query, (err, result) => {
            if (err) {
                return reject({status: false, message: "Database Issue"});
            }
            if (result.length === 0) {
                resolve({status: false, message: "Orders with provided jobname does not exist"})
            } else {
                resolve({status: true, message: result});
            }
        });
    });
}

const addOrder = (req, res) => {
    const query = "INSERT INTO PartOrdersX VALUES ('" + req.body.partId + "', '" + req.body.jobName + "','" + req.body.userId + "'," + req.body.qty + ")";
        con.query(query,(err, result) => {
        if(err){
            throw err;
        }
        res.send({"status": true});
    });
}

module.exports.allOrders = allOrders;
module.exports.specificOrder = specificOrder;
module.exports.addOrder = addOrder;
