var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var url = require('url');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(function (req, res, next) {
  if (req.url == '/home') {
    res.end('Home');
  } else {
    next();
  }
});

app.use(function (req, res, next) {

  if (url.parse(req.url, true).query.secret === 'true') {
    res.end('Access approved');
  } else if (url.parse(req.url, true).query.secret === 'false') {
    res.end('Access denied');
  } else {
    next();
  }
});


module.exports = app;
