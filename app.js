var createError = require('http-errors');
var express = require('express');
var path = require('path');
var app = express();
var port = 3000;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
var dataRouter = require('./routes/data');



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/data', dataRouter);
app.use('/about', aboutRouter);
module.exports = app;

