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

//root route
//Use Session to hold the counter. 
//passing data to the page in "locals" object
app.get('/', function (req, res){ 
    // res.send('Hello World This is the counter app');
    if(req.session.counter){
        console.log("Root Incrementing")
        req.session.counter++;
    }
    else {
        req.session.counter = 1;
    }
    locals = {
        sesscount: req.session.counter
    }
    console.log("in root route, locals = ", locals);
    res.render('index', locals);
});


// Use a route to process one additional to the counter, the page reload will add the second. 
// This only works because I am adding 1 here, plus the redirect adds another. 
app.post('/plus2', function (req, res){
    if(req.session.counter){
        console.log("plus2 Incrementing")
        req.session.counter++
    }
    locals = {
        sesscount: req.session.counter
    }
    console.log("in plus2 route, locals = ", locals);
    res.redirect('/');
})

// Use the form button to reset the counter and allow the page load to cause the counter to hit 1. 
app.post('/reset', function(req, res){
    req.session.counter = 0
    console.log("resetting")
    res.redirect('/')
})


// Listener and Port
port = 5000;
app.listen(port, function () {
    console.log("Listening on port", port);
});

