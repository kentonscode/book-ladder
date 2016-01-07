app.controller('authorSearch', ['$http', function ($http) {
  vm = this;
  vm.search = function() {
    $http.get('http://localhost:1337/author-search/' + vm.term )
  .then(function (response) {vm.books = response.data.items;});
};
}]);

app.controller('titleSearch', ['$http', function ($http) {
  vm = this;
  vm.search = function() {
    $http.get('http://localhost:1337/title-search/' + vm.term )
  .then(function (response) {vm.books = response.data.items;});
};
}]);

//working on creating a service. 

app.controller('serviceTest', function($scope, bookSearch){
  $scope.helloWorld = bookSearch.helloWorld;
  
});

app.service('bookSearch', function() {
  this.helloWorld = function() {
    console.log('service function!');
  };
});