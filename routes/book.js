//这里是book路由
const {Router} = require('express')
const router = Router()
const {getBook,
       getBookById,
       getAllBook} = require('../controller/book')

router.post('/',getBook);
router.get('/AllBook',getAllBook);//为什么不能写到/:id下面，因为/：id是动态路由他会将AllBook识别成id
router.get('/:id',getBookById);



module.exports = router;