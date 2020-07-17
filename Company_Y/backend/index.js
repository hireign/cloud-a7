const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require("path");

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');


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
        throw err;
    }else{
        console.log("Database connection successful");
    }
});

app.get('/', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.send("Application Working");
});

app.get('/displayAllOrder17', function (req, res) {
	const query = 'SELECT * FROM PartOrdersY';
    con.query(query, (err, result) => {
        if (err) {
            throw err;
        }
        res.render("order",{orders17: result})
    });

});

app.listen(3000, function () {
    console.log("App is running on port 3000");
});
