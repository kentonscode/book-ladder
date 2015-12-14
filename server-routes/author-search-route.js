var express = require('express');
var authorRoute = express.Router();

authorRoute.get ('/:name', function(request, response) {
  response.send('Hello World');
});

module.exports = authorRoute;
