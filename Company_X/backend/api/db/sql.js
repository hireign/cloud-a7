const sql = require('mysql');

const con = sql.createConnection({
    host: process.env.RDS_HOSTNAME || 'assign-6.cvitnfsfb6ab.us-east-1.rds.amazonaws.com',
    user: 'root',
    password: 'Cloudassign',
    port: '3306',
    database: 'assign6'
});

con.connect(function(err) {
    if(err){
        console.log("Database connection unsuccessful" + err + " ");
        throw err;
    }else{
        console.log("Database connection successful");
    }
});

module.exports = con;
