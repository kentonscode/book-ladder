app.controller('authorSearch', ['$http', function ($http) {
  vm = this;
  vm.search = function() {
    $http.get('http://localhost:1337/author-search/' + vm.term )
  .then(function (response) {vm.books = response.data;});
};
}]);