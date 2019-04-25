const rq = require('request-promise');
const cheerio = require('cheerio');
const bookModel = require('../model/book');
const titleModel = require('../model/title');
const articleModel = require('../model/article');

async function getBook (req,res,next) {
    try{
        //下面的bookModel数据是scama骨架里面的
        const {url,img,author,title} = req.body;
        //通过网址爬取文章目录，通过目录发去文章内容，爬去完毕
        const data = await rq.get(url);
        const $ = cheerio.load(data);
        let desc;
        
        desc = $('meta[name="description"]').attr('content');
        const book = await bookModel.create({
            title,
            img,
            author,
            desc
        })

        let baseUrl;
        let titlesArrUrl = [];
        let titleText = [];

        const titleEle = $('.catalog a');
        let titleArr = url.split('/');//字符串转数组
        titleArr.pop();//去除最后一项
        baseUrl=titleArr.join('/')+"/";//数组转字符串

        titleEle.each((index,item)=>{ //得到所有的目录网址
        titlesArrUrl.push(
            baseUrl + $(item).attr('href')
        )
        titleText.push($(item).text())
    })

    //下面用for循环不能用foreach循环，因为await进不去，而且进去了也没有用    
    for(let i = 0; i< titlesArrUrl.length; i++){
        const item = titlesArrUrl[i];
        const index= i;
        const articleData = await rq.get(item);
        console.log(item)
        const $ = cheerio.load(articleData);
        const content = $('.content').text();
        
        const title = await titleModel.create({
            bookId: book._id,
            title: titleText[index],
            index: Number(index),
            total: titlesArrUrl.length  //总共有多少章
        })

        const article = await articleModel.create({
            bookId: book._id,
            content,
            index: Number(index),
            titleId: title._id

        })
    }

    res.json({
        code: 200,
        msg: "爬取成功"
    })

    } catch(err){
        next(err)
    }
   
}

async function getBookById(req,res,next){
    try{
        const {id} = req.params; //es6中的解析结构{id}就像 const id = req.params.id;
        const data = await bookModel.findById(id);
        res.json({
            code: 200,
            data
        })
    } catch(err) {
        next(err)
    }
}

async function getAllBook(req,res,next){
    try{
        const data = await bookModel.find();
        res.json({
            code: 200,
            data
        })
    }catch(err){
        next(err)
    }
}

module.exports = {
    getBook,
    getBookById,
    getAllBook
}