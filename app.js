const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const serveStatic = require('serve-static')
const cors = require('cors');
//api设计
const router = require('./controller/index')
//测试页面
// const router = require('./router/index')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//支持跨域
app.use(cors());
//路由
app.use(router);
//404错误
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// 服务器错误
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
//静态目录
// app.use('/static', express.static('static'))
// app.use('/static', express.static(path.join(__dirname, 'static')))
app.use(serveStatic(__dirname + '/static'))

module.exports = app;
