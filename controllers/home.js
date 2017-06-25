moviesDatabase.controller("HomeCtrl", ['$scope','$window', 'theMoviedb',
  function($scope, $window, theMoviedb) {
    theMoviedb.loadMovies().then(function(data){
      console.log(data);
    });
  }
]);
