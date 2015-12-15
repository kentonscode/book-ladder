app.controller('authorSearch', ['$http', function ($http) {
  vm = this;
  vm.search = function() {
    $http.get("https://www.googleapis.com/books/v1/volumes/ewMRAAAAIAAJ")
  .then(function (response) {vm.books = response.data;});
};
}]);