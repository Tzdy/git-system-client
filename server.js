var express = require('express');
var body = require('body-parser').json;
var mock = express();

mock.all('*', function(req , res, next) {
    res.header("Access-Control-Allow-Origin", "*");//项目上线后改成页面的地址

    res.header("Access-Control-Allow-Headers", "*");
     
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
})

mock.post('/judge-token',body(), function(req, res){
    console.log(req.headers);
    res.send(JSON.stringify(req.headers))
})

mock.listen(3000)