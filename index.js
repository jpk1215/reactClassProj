var express = require('express');
var app = express();
var path = require('path');
var handleRender = require('./build/app.server.js');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req,res) {
    res.contentType = "text/html; charset=utf8";

    var data = [ {product: 'Apple Watch', image: "http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/s/38/s38sg/sbbk/s38sg-sbbk-sel-201603?wid=332&hei=392&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=Kv3l50"}];
    var html = handleRender(data);
    res.send(html)
});

app.listen('8080', function() {
   console.log('Universal App is running on port 8080')
});
