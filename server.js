// setting the correct environmet
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 5000;


// bringing the configured express and mongoose objects
var mongoose = require('./server/config/mongoose.js'),
    express = require('./server/config/express.js');


var db = mongoose();
var app = express();


app.listen(port, function () {
    console.log('listening on port: ' + port);
});


module.exports = app;