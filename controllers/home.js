moviesDatabase.controller("HomeCtrl", ['$scope', '$location', 'theMoviedb',
  function($scope, $location, theMoviedb) {
    //status view input filter
    $scope.viewInput = false;
    //value input filter
    $scope.inputNameMovie = null;
    //ARRAY list all movies
    $scope.listMovies = [];

    //service get all movies
    theMoviedb.loadMovies().then(function(data){
      $scope.listMovies = data.data.results;
    });

    //cange status view infor filter
    $scope.showInput = function () {
      if ($scope.viewInput) {
        $scope.viewInput = false;
      }
      else {
        $scope.viewInput = true;
      }
    }

    //service filter get movies
    $scope.findMovie = function (data) {
      if (data.length==0) {
        theMoviedb.loadMovies().then(function(data){
          $scope.listMovies = data.data.results;
        });
      }
      theMoviedb.findMovie(data).then(function(data){
        $scope.listMovies = data.data.results;
      });
    }

    //sae data to movie or tv selected and change view to detail movie or tv
    $scope.showDetail = function(data) {
      theMoviedb.setMovie(data);
      theMoviedb.setMediaType(data);
      $location.path("/movie");
    }

  }
]);
