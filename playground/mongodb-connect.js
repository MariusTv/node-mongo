// var MongoClient = require('mongodb').MongoClient;

//Destructuring. MongoClient same as above.
var {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MondoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Users').insertOne({
        name: 'Mario',
        age: 25,
        location: 'Vilnius'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    });

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });


    client.close();
});