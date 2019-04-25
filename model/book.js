const mongoose = require('mongoose')

const book = new mongoose.Schema({
    title: String,
    img: String,
    author: String,
    looksnums: {
        type: Number,
        default:0
    },
    desc: String,
    type: {
        type: mongoose.SchemaTypes.ObjectId,//mongodb的数据id，在mongodb数据库当中，是这样查找表中数据的,db.user.find({_id:ObjectId('5bckkaljlkf9ijallka')})才能查找到数据。
        ref: 'category',//表示从哪个地方查找数据
    },
    index: {
        type: Number,
        default: 1
    }

},{versionKey:false,timestamp:{createdAt:"createTime",updatedAt:"updateTime"}})

module.exports = mongoose.model('book',book)