const con = require('../db/sql');

const allOrders = () => {
    return new Promise(function(resolve, reject) {
        const query='SELECT * FROM PartOrdersX';
        con.query(query,(err, result) => {
            if(err){
                return resolve({status: false, message: "Field format is wrong!!"});
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
                return resolve({status: false, message: "Field format is wrong!!"});
            }
            if (result.length === 0) {
                resolve({status: false, message: "Orders with provided job name does not exist"})
            } else {
                resolve({status: true, message: result});
            }
        });
    });
}

const addOrder = (partId, jobName, userId, qty) => {
    return new Promise(function(resolve, reject) {
        const query = "INSERT INTO PartOrdersX VALUES ('" + partId + "', '" + jobName + "','" + userId + "'," + qty + ")";
        con.query(query,(err, result) => {
            if(err){
                resolve({status: false});
            }
            resolve({status: true});
        });
    });
}

module.exports.allOrders = allOrders;
module.exports.specificOrder = specificOrder;
module.exports.addOrder = addOrder;
