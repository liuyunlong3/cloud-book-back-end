const request = require('request')
const fs = require('fs')
//下面是提取html里的东西的库，是爬虫库
const cheerio =require('cheerio')
request.get('https://www.kancloud.cn/tass/es6/458815',function(err,data){
    if(err){
        console.log(err)
    }
    //如果爬到数据，将数据放到index.html文件夹里面
    $ = cheerio.load(data.body);
    const content = $('.content').text()
    fs.writeFile('index.html',content,(err)=>{
        if(err){
            console.log(err)
        }
    })
    
})