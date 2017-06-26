moviesDatabase.controller("MovieCtrl", ['$scope','$window','theMoviedb',
  function($scope,$window,theMoviedb) {
    $scope.movie = {};
    theMoviedb.detaileMovie().then(function(data){
      console.log(data);
      $scope.movie = data.data;
    });
  }
]);
