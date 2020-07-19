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
// let query = "SELECT * FROM jobs WHERE jobName = '" + req.body.jobName + "' and partId= " + req.body.partId;
    
app.get('/searchOrder17', function (req, res) {
	const query = "SELECT * FROM PartOrdersY where jobName = " + req.query.jobName;
	console.log(query)
	con.query(query, (err, result) => {
        if (err) {
            throw err;
        }
        res.render("searchResult",{result: result})
    });

});

app.get('/handler17', function (req, res) {
	var find17 = req.body.id;
	const query = "SELECT * FROM PartOrdersY where id = " + find17;
	con.query(query, (err, result) => {
        if (err) {
            throw err;
        }
        const query1 = "SELECT * FROM parts where id = " + find17;
        con.query(query1, (err, result1) => {
        if (err) {
            throw err;
        }
        var change17 = result1.qoh - result.qty;
        const query2 = "update parts SET qoh = " + change17 + " where id = " + find17;
        con.query(query2, (err, result1) => {
        if (err) {
            throw err;
        }
        res.send(result1);
    });
});

app.get('/insertOrder17', function (req, res) {
	const query = "SELECT * FROM PartOrdersY where id = " + find17+ " and jobName = " + req.body.jobName + 
					"and userId = " + req.body.userId;
	con.query(query, (err, result) => {
        if (err) {
            throw err;
        }
        if (result.length === 0) {
    		let query = "INSERT INTO PartOrdersY VALUES ('" + req.body.id + "'," + req.body.jobName + "," +
    					 req.body.userId + "," + req.body.qty + ")";
            if (err) {
            	throw err;
        	}
        	res.send({msg: "Order Added"});

        }
        else {
            res.send({msg: "Order already exist"});
        }
	});

app.get('/getAllParts17', function (req, res) {
	const query = "SELECT * FROM parts";
	con.query(query, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
	});

app.get('/getPartById17', function (req, res) {
	const query = "SELECT * FROM parts where id = " + req.params.id;
	con.query(query, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);

	});
app.get('/getQtyById17', function (req, res) {
	const query = "SELECT * FROM parts where id = " + req.params.id;
	con.query(query, (err, result) => {
        if (err) {
            throw err;
        }
        res.send("" + parts17[0].qoh);
	});

app.get('/displayAllParts17', function (req, res) {
	const query = "SELECT * FROM parts";
	con.query(query, (err, result) => {
        if (err) {
            throw err;
        }
        res.render("parts",{parts17: result})
	});

app.get('/displayPartByIdPage17', function (req, res) {
	const query = "SELECT * FROM parts where id = " + null;
	con.query(query, (err, result) => {
        if (err) {
            throw err;
        }
        res.render("findpart",{parts17: result})

	});

app.get('/displayPartById17', function (req, res) {
	const query = "SELECT * FROM parts where id = " + req.body.id;
	con.query(query, (err, result) => {
        if (err) {
            throw err;
        }
        res.render("findpart",{parts17: result})


	});

app.get('/addPart17', function (req, res) {
	partId17 = req.body.partId;
    partName17 = req.body.partName;
    qty17 = req.body.qty;

    const query = "SELECT * FROM parts where id = " + partId17;
	con.query(query, (err, result) => {
        if (err) {
            throw err;
        }
        if (parts17.length > 0) {
        	errorMessage17 = "A record with part id " + partId17 + " already exists.";
        	res.render("error", {errorMessage17: errorMessage17});
      	} 
      	else {
      		const query = "INSERT INTO parts VALUES ('" + partId17 + "'," + partName17 + "," +
    					 qty17 + ")";
    		if (err) {
            	throw err;
        	}
        	res.redirect('/parts17'); // need to change
      }

	});

app.get('/updatePartPage17', function (req, res) {
	const query = "SELECT * FROM parts where id = " + req.params.partId + " and partName = " + req.params.partName;
	con.query(query, (err, result) => {
        if (err) {
            throw err;
        }
        res.render("updatepart",{parts17: result})
	});

app.get('/updateQuantity17', function (req, res) {
	const query = "UPDATE parts set qoh = " + req.body.qty + " where partName = " + req.params.partName + " and id = " + req.params.partId;
	con.query(query, (err, result) => {
        if (err) {
            throw err;
        }
        res.redirect('/parts17'); // need to change

	});

app.get('/partExist17', function (req, res) {
	const query = "SELECT * FROM parts where id = " + req.params.id;
	con.query(query, (err, result) => {
        if (err) {
            throw err;
        }
        if (parts17.length > 0) {
         	res.send({status: true});
        } 
        else {
         	res.send({status: false});
        }
	});

app.listen(3000, function () {
    console.log("App is running on port 3000");
});
