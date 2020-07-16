const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const JobRoute = require('./api/route/JobRoute');
const OrderRoute = require('./api/route/OrderRoute');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get('/*', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.send("Application Working");
});

app.use('/job', JobRoute);
app.use('/order', OrderRoute);

app.listen(3000, function () {
    console.log("App is running on port 3000");
});
