var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //tell mongoose that we want to use build in promise library

var mongoDbConnection = process.env.MONGODB_URI;

mongoose.connect(mongoDbConnection);

module.exports = {mongoose};