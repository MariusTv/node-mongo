// var MongoClient = require('mongodb').MongoClient;

//Destructuring. MongoClient same as above.
var {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MondoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //delete many
    // db.collection('Todos').deleteMany({text:'walk the dog'}).then((results) =>{
    //    console.log(results);
    // }).catch((err) => {
    //     console.log('Unable to delete Todos');
    // });

    //delete One
    // db.collection('Todos').deleteOne({text:'walk the dog'}).then((results) =>{
    //     console.log(results);
    // }).catch((err) => {
    //     console.log('Unable to delete Todos');
    // });

    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
       console.log(result);
    });

    client.close();
});