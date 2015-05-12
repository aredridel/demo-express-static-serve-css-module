var express = require('express');
var servestatic = require('serve-static');
var path = require('path');

var app = express();

app.use('/css', servestatic(path.dirname(require.resolve('purecss'))));
app.use('/', servestatic(path.resolve(__dirname, 'public')));

app.listen(8081);
