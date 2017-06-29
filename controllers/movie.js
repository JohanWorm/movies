moviesDatabase.controller("MovieCtrl", ['$scope', '$window', '$location', 'theMoviedb',
  function($scope, $window, $location, theMoviedb) {

    //status view container image
    $scope.containerImage = false;
    //JSON to movie or tv
    $scope.movie = {};
    //media type
    $scope.mediaType = "";
    //JSON to episodes to season select
    $scope.episodes = {};

    //verify data movie
    if (!jQuery.isEmptyObject(theMoviedb.getMovie())) {
      $scope.movie = theMoviedb.getMovie();
      $scope.mediaType = theMoviedb.getMediaType();
    }
    else {
      $location.path("/home");
    }

    //load details
    if ($scope.mediaType=="tv") {
      theMoviedb.detaileTv($scope.movie.id).then(function(data){
        $scope.movie = data.data;
        $scope.findEpisodies($scope.movie.id, $scope.movie.seasons[0]);
      });
    }
    else {
      theMoviedb.detaileMovie($scope.movie.id).then(function(data){
        $scope.movie = data.data;
      });
    }

    //change view on click button info
    $scope.changeViewTv = function (type){
      $scope.containerImage = type;
    }

    //service - find episodes to season
    $scope.findEpisodies = function (id, season){
      theMoviedb.detaileSeason(id, season).then(function(data){
        $scope.episodes = data.data;
      });
    }

    $scope.backView = function () {
      $location.path("/home");
    }

  }
]);
