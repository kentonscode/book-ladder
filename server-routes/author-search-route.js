var express = require('express');
var authorRoute = express.Router();
var httpRequest = require('request');

authorRoute.get ('/:author', function(request, res) {
  httpRequest('https://www.googleapis.com/books/v1/volumes?q=+inauthor:' + request.params.author + '&key=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    function(errors, response, body) {
      console.log(body);
      res.send(body);
    });
});

module.exports = authorRoute;
