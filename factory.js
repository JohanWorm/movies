var hostTheMoviedb = "https://api.themoviedb.org/3/";
var api = "?api_key=b2907782d07859a652052d3bae537475&language=es-ES";

moviesDatabase.factory('theMoviedb', function($http) {
  var _theMoviedbFactory = {};
  var movie = {};

  var listMovies = hostTheMoviedb+"discover/movie"+api+"&sort_by=popularity.desc&include_adult=false&include_video=false&language=es-ES&page=1";
  var listFilterMovies = hostTheMoviedb+"search/multi"+api+"&query=";
  var detaileMovie = hostTheMoviedb+"movie/";

  _theMoviedbFactory.loadMovies = function() {
    return $http.get(listMovies);
  };

  _theMoviedbFactory.findMovie = function(data) {
    return $http.get(listFilterMovies+data);
  };

  _theMoviedbFactory.setMovieId = function(data) {
    console.log(data);
    movie.id = data.id;
  };

  _theMoviedbFactory.getMovieId = function(data) {
    return movie.id;
  };

  _theMoviedbFactory.detaileMovie = function(){
    return $http.get(detaileMovie+_theMoviedbFactory.getMovieId()+api);
  }

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
    movie.adult = data.adult;
    movie.backdrop_path = data.backdrop_path;
    movie.genre_ids = data.genre_ids;
    movie.id = data.id;
    movie.media_type = data.media_type;
    movie.original_language = data.original_language;
    movie.original_title = data.original_title;
    movie.overview = data.overview;
    movie.popularity = data.popularity;
    movie.poster_path = data.poster_path;
    movie.release_date = data.release_date;
    movie.title = data.title;
    movie.video = data.video;
    movie.vote_average = data.vote_average;
    movie.vote_count = data.vote_count;
  };

  _moviesFactory.getMovie = function() {
    return movie;
  };

  return _moviesFactory;
});
