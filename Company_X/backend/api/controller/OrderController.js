const con = require('../db/sql');

const insertOrder17 = (req, res) => {
    const query='SELECT * FROM PartOrdersX';
    con.query(query,(err, result) => {
        if(err){
            throw err;
        }
        res.send(JSON.stringify(result));
    });
}


module.exports.addOrder = addOrder;
