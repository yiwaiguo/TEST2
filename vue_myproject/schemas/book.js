var mongoose = require('mongoose');

module.exports = mongoose.model('Book',{
    "bookname":String,
    "price":Number,
    "score":String,
    "type":String,
    "author":String,
    "discount":Number,
    "binding":String,
    "store":Boolean,
    "olread":Boolean
})