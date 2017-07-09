// Main requirements

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

// App setup
const app = express();

// App Functionality
app.use(session({secret: 'slkjasd098nasd987nasd987asd65asdey'}));  

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/static/"));
app.set('views', __dirname + "/views/");
app.set('view engine', 'ejs');

app.get('/', function (req, res){ 
    // res.send('Hello World This is the counter app');
    let counter = 0; 
    res.render('index')
})

//Use Session to hold the counter. 

// Use a route to process one additional to the counter, the page reload will add the second. 

// Use the degault route to add one to the counter. 

// Use the form button to reset the counter and allow the page load to cause the counter to hit 1. 

// Listener and Port
port = 5000;
app.listen(port, function () {
    console.log("Listening on port", port);
})

