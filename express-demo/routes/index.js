let student = require('./student');
var express = require('express');
var router = express.Router();
let http = require('http');
var io = require('socket.io')(http.createServer());

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express'});
});

io.on('connection', function (socket) {
    console.log('socket已连接！');
    socket.emit('message', {text: '欢迎您！'});

});

module.exports = router;
