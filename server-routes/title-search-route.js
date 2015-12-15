var express = require('express');
var titleRoute = express.Router();
var httpRequest = require('request');

titleRoute.get ('/:title', function(request, res) {
  httpRequest('https://www.googleapis.com/books/v1/volumes?q=' + request.params.title + '&key=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    function(errors, response, body) {
       console.log(body);
      res.send(body);
    });
});

module.exports = titleRoute;


