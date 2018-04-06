var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        trim:true,
        minlegth: 1
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number, //unix timestamp
        default: null
    }
});

module.exports = {Todo};