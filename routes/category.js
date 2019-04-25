const {Router} = require('express');
const router = Router();
const {addCategory,
    getCategory,
    addBookToCategory,
    getBookByCategory} = require('../controller/category')

router.post('/',addCategory)
router.get('/',getCategory)
router.post('/book',addBookToCategory)
router.get('/book',getBookByCategory)

module.exports = router;