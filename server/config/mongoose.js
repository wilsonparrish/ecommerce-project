// MONGOOSE CONFIGURATION FILE
var mongoose = require('mongoose');

module.exports = function () {
    var db = mongoose.connect('mongodb://user:madcatmk3@ds031883.mongolab.com:31883/ecommerce');
    require('../model.js');
    return db;
};