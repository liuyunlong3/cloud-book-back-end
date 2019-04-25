var express = require('express');
var router = express.Router();
var bookRoutes = require('./book');
var categoryRoutes = require('./category');
var titleRoutes = require('./title');
var articleRoutes = require('./article');
var userRoutes = require('./user');
var smsCodeRoutes = require('./smsCode');
var uploadRoutes = require('./upload');
var swiperRoutes = require('./swiper');
var collectionRoutes = require('./collection')

router.use('/book',bookRoutes);
router.use('/category',categoryRoutes);
router.use('/title',titleRoutes);
router.use('/article',articleRoutes);
router.use('/user',userRoutes);
router.use('/smsCode',smsCodeRoutes);
router.use('/uploadToken',uploadRoutes);
router.use('/swiper',swiperRoutes);
router.use('/collecion',collectionRoutes);

module.exports = router;
