var host="https://api.themoviedb.org/3/movie/550?api_key=b2907782d07859a652052d3bae537475";

moviesDatabase.factory('theMoviedb', function($http) {
  var _theMoviedbFactory = {};

  _theMoviedbFactory.loadMovies = function() {
    var urlBase = host;
    return $http.get(urlBase);
  };

  return _theMoviedbFactory;
});


moviesDatabase.factory('movies', function($http) {
  var _moviesFactory = {};
  var movies = [];
  var movie = {};

  _moviesFactory.setMovies = function(data) {
    movies = data;
  };

  _moviesFactory.getMovies = function() {
    return movies;
  };

  _moviesFactory.setMovie = function(data) {
    movie.nombre = new String(data.name);
  };

  _moviesFactory.getMovie = function() {
    return movie;
  };

  return _moviesFactory;
});
