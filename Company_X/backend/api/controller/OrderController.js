const con = require('../db/sql');

const allOrders = (req, res) => {
    const query='SELECT * FROM PartOrdersX';
    con.query(query,(err, result) => {
        if(err){
            throw err;
        }
        console.log(result);
        res.send(JSON.stringify(result));
    });
}

const specificOrder = (req, res) => {
    const query = "SELECT * FROM PartOrdersX WHERE jobName='\" + req.query.jobName + \"' ORDER BY jobName ASC, userId ASC, partId ASC\";
    con.query(query,(err, result) => {
        if(err){
            throw err;
        }
        console.log(result);
        res.send(JSON.stringify(result));
    });
}

const addOrder = (req, res) => {
    const query = "INSERT INTO PartOrdersX VALUES ('" + req.params.partId + "', " + req.body.jobName + ",'" + req.body.userId + "'," + req.body.qty + ")";
        con.query(query,(err, result) => {
        if(err){
            throw err;
        }
        res.send({"message": true});
    });
}

module.exports.allOrders = allOrders;
module.exports.specificOrder = specificOrder;
module.exports.addOrder = addOrder;
