const sms = require('../utils/smsUtil')
const smsModel = require('../model/smsCode')
const userModel = require('../model/user')

async function sendCode (req,res,next) {
    try{
        const {phone} = req.body;

        const user = await userModel.findOne({
            phone,
        })
        if (!user) {//如果用户没有注册，才可以发送验证码
            let sixstr = ''
            for (let i = 0; i < 6; i++) {
                sixstr += Math.floor(Math.random() * 10) + '';
            }
            const smsRes = await sms(phone, sixstr)
            if (smsRes.Code == 'OK') {
                await smsModel.create({
                    phone,
                    code: sixstr
                })
                res.json({
                    code: 200,
                    msg: '短信发送成功'
                })
            } else {
                res.json({
                    code: 500,
                    msg: smsRes.Code
                })
            }
        } else {
            res.json({
                code: 400,
                msg: '对不起，你已经注册过了。'
            })
        }
        
    } catch(err){
        next(err)
    }
}

module.exports = {
    sendCode
}