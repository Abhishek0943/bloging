const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
    title: {
        type: String,
        require:true
    },
    discription: {
        type: String
    },
    markdown: {
        type: String,
        require :true
    },
    createdAT: {
        type: Date, default: Date.now
    }
});


module.exports = mongoose.model('data', BlogPost);