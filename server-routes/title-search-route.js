var express = require('express');
var titleRoute = express.Router();

titleRoute.get ('/:title', function(request, response) {
  response.send('Hello World');
});

module.exports = titleRoute;
