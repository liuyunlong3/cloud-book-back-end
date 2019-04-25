const mongoose = require('mongoose')

const category = new mongoose.Schema({
    title: String,
    icon: String,
    books: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'book' //这里的book是指book集合。
    }],
    index: {
        type: Number,
        default: 1
    },
    status: {
        type: Number,
        default: 1
    }
},{versionKey:false,timestamps:{createdAt:'createTime',updatedAt:'updateTime'}})

module.exports = mongoose.model('category',category);