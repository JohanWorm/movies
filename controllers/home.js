moviesDatabase.controller("HomeCtrl", ['$scope','$location', 'theMoviedb',
  function($scope, $location, theMoviedb) {

    $scope.viewInput = false;
    $scope.inputNameMovie = null;
    $scope.listMovies = [];

    $scope.showInput = function () {
      if ($scope.viewInput) {
        $scope.viewInput = false;
      }
      else {
        $scope.viewInput = true;
      }
    }

    $scope.findMovie = function (data) {
      theMoviedb.findMovie(data).then(function(data){
        console.log(data);
        $scope.listMovies = data.data.results;
      });
    }

    theMoviedb.loadMovies().then(function(data){
      console.log(data.data.results);
      $scope.listMovies = data.data.results;
      console.log($scope.listMovies);
    });

    $scope.showDetail = function(data) {
      theMoviedb.setMovieId(data);
      $location.path( "/movie" );
    }

  }
]);
