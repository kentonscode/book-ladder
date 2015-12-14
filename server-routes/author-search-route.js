var express = require('express');
var authorRoute = express.Router();
var httpRequest = require('request');

authorRoute.get ('/:author', function(request, response, next) {
  httpRequest('https://www.googleapis.com/books/v1/volumes?q=+inauthor:' + request.params.author + '&key=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    function(errors, response, body) {
      console.log(body);
    });
});

module.exports = authorRoute;
