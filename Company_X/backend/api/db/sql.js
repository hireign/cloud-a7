const sql = require('mysql');

// let con;

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

// function handleDisconnect() {
//
//     con = sql.createConnection({
//         host: process.env.RDS_HOSTNAME || 'assign-6.cvitnfsfb6ab.us-east-1.rds.amazonaws.com',
//         user: 'root',
//         password: 'Cloudassign',
//         port: '3306',
//         database: 'assign6'
//     });
//
//     con.connect(function(err) {
//         if(err) {
//             console.log('error when connecting to db:', err);
//             setTimeout(handleDisconnect, 2000);
//         } else{
//             console.log("Database connection successful");
//         }
//     });
//
//     con.on('error', function(err) {
//         console.log('db error', err);
//         if(err.code === 'PROTOCOL_CONNECTION_LOST') {
//             handleDisconnect();
//         } else {
//             throw err;
//         }
//     });
// }
//
// handleDisconnect();

module.exports = con;
