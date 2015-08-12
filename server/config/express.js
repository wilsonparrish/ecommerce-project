// EXPRESS CONFIGURATION FILE
var express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    session = require('express-session');


module.exports = function () {
    // generates the app object
    var app = express();


    // We configure our middleware
    app.use(cors());
    app.use(bodyParser.urlencoded(
        {
            extended: true
        }));
    app.use(bodyParser.json());


    // middleware for cookie support
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: "SessionSecret"
    }));


    // THIS WILL BE OUR ANGULAR APP
    // here we set the static files folder
    // the route to link to static resources from our
    // website will start at 'assets'; see index.ejs
    app.use(express.static('./client'));


    // HERE WE INCLUDE THE ROUTES
    // we run the router objects giving them the express app
    require('../routes.js')(app);


    return app;
};