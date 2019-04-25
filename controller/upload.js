const uploadUtils = require('../utils/uploadUtils')

async function upload (req,res,next) {
    try {
        res.json({
            code: 200,
            data: {
                token: uploadUtils()
            }
        })
    } catch (err) {
        next (err)
    }
}

module.exports = {
    upload
}