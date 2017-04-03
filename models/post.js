var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: String,
    body: String,
    author: {
        _id: Schema.Types.ObjectId,
        username: String
    },
    creationDate: {type: Date,default: Date.now}
});

var post = mongoose.model('post', postSchema);
module.exports = post;