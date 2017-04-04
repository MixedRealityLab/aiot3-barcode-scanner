/**** database mongo db********/
// New Code
var mongo = require('mongodb');
var monk = require('monk');
module.exports = monk('localhost:27017/eancode');
//var db = monk('localhost:27017/eancode');
