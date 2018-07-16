const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
    _id: userOneId,
    email: 'marius@test.com',
    password: '123111',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access: 'auth'}, 'blabla_salt').toString()
    }]
}, {
    _id: userTwoId,
    email: 'm@test.com',
    password: 'simplepass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userTwoId, access: 'auth'}, 'blabla_salt').toString()
    }]
}];

const todos = [
    {
        _id: new ObjectID(),
        text: 'First test todo2',
        _creator: userOneId
    },
    {
        _id: new ObjectID(),
        text: 'Second thing todo',
        completed:true,
        completedAt: 333,
        _creator: userTwoId
    }
];

const populateTodos = (done) => {
    Todo.remove({}).then(() => { //wipe all todos
        return Todo.insertMany(todos);
    }).then(() => done());
};

//We have to use different approach because we need to hash password, so we have to call user.save() and Promise.all() to wait for all promises to resolve
const populateUsers = (done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo]);
    }).then(() => done());
};

module.exports = {todos, users, populateTodos, populateUsers};