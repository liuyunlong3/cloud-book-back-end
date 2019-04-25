const jwt = require('jsonwebtoken');

function verifyToken (token) {
    return new Promise((resolve,reject)=>{
        jwt.verify(token,'lyl',(err,data)=>{
            if(err){
                reject(err)
                return
            }
            resolve(data.data)
        })
    })
    
}

async function auth (req,res,next) {
    try {
        const {token} = req.headers || req.body || req.query
        const userData = await verifyToken(token)
        if (userData) {
            req.user = userData
            next()
        } else {
            res.json({
                code: 401,
                msg: '登陆状态已失效，请重新登录'
            })
        }
        
    } catch (err) {
         res.json({
                code: 401,
                msg: '登陆状态已失效，请重新登录'
            })
        
    }
}

module.exports = auth;