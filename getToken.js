//jwt可以签名和解密（在getData.js里看解密）
const jwt = require('jsonwebtoken'); 

const token = jwt.sign({
  exp: Math.floor(Date.now() / 1000) + (60),//一分钟过期Date.now()得到unix时间戳，除1000得到多少秒，+60得到一分钟的秒数
  data: {
    userId: '001'      
  }
}, 'lyl');

console.log(token)