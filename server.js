var express = require('express');
var app = express();
var titleSearch = require('./server-routes/title-search-route.js');
var authorSearch = require('./server-routes/author-search-route.js');

app.use('/title-search', titleSearch);
app.use('/author-search', authorSearch);


 app.listen(1337);