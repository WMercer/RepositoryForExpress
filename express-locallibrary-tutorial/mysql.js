var express = require('express');   //引入express模块
var mysql = require('mysql');     //引入mysql模块
var app = express();        //创建express的实例
var router = express.Router();
 
var connection = mysql.createConnection({      //创建mysql实例
    host:'127.0.0.1',
    port:'3306',
    user:'WMercer_work',
    password:'123456',
    database:'sakila'
});
connection.connect();
var sql = 'SELECT * FROM sakila.actor';
connection.query(sql, function (err,result) {
    if(err){
        console.log('[SELECT ERROR]:',err.message);
    }
    console.log(result);  //数据库查询结果返回到result中
 
});
app.get('/',function (req,res) {
    res.send('Hello,myServer');  ////服务器响应请求
});
connection.end();
app.listen(3001,function () {    ////监听3000端口
    console.log('Server running at 3001 port');
});

module.exports = router;