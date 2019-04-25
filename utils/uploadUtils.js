//关于这个封装的东西是封装上传图片（修改头像）的接口的铺垫
const qiniu = require('qiniu')

var accessKey = 'hiaSMM1QqBT-0Q0KywiDrpp_tXbgBz8p1mFXkoil';//用老师的七牛云中的凭证
var secretKey = 'A4to1dxJHlKuQ_HuoKWhdf34-J3B_dYzt4eIT5tl';//用的老师的七牛云中的密钥
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

module.exports = function () {
    var options = {
        scope: 'cloud-book',//空间名
        returnBody: '{"key":"$(key)","hash":"$(etag)","url":"http://pptvjwume.bkt.clouddn.com/$(key)"}',
        expires: 3600,
      }
      var putPolicy = new qiniu.rs.PutPolicy(options);
      var uploadToken = putPolicy.uploadToken(mac);
      return uploadToken
}