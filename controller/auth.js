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
        req.user = userData
        next()
    } catch (err) {
        next (err)
    }
}

module.exports = auth;