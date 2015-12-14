var express = require('express');
var app = express();
var bookSearch = require('./server-routes/book-search-route.js');

app.use('/book-search', bookSearch);


 app.listen(1337);