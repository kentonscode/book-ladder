var express = require('express');
var bookRoute = express.Router();

//responds with hello world

bookRoute.get ('/', function(request, response) {
  response.send('Hello World');
});

module.exports = bookRoute;