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
    if(req.get('x-xsrf-token') == 'qwertyuiop'){

        res.send(JSON.stringify({
            username:'Tsdy'
        }))
    }else{
        res.send(JSON.stringify({
            code:'没有登陆'
        }))
    }
})

mock.listen(3000)