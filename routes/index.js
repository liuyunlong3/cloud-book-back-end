var express = require('express');
var router = express.Router();
var bookRoutes = require('./book');
var categoryRoutes = require('./category');
var titleRoutes = require('./title');
var articleRoutes = require('./article');
var userRoutes = require('./user')
var smsCodeRoutes = require('./smsCode')

router.use('/book',bookRoutes);
router.use('/category',categoryRoutes);
router.use('/title',titleRoutes);
router.use('/article',articleRoutes);
router.use('/user',userRoutes);
router.use('/smsCode',smsCodeRoutes);

module.exports = router;
