var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //tell mongoose that we want to use build in promise library

var mongoDbConnection = process.env.NODE && ~process.env.NODE.indexOf("heroku")
    ? 'mongodb://marius:h4x1s3@ds137089.mlab.com:37089/node-todo-api' //for heroku you can also use process.env.MONGODB_URI
    : process.env.MONGODB_URI;

mongoose.connect(mongoDbConnection);

module.exports = {mongoose};