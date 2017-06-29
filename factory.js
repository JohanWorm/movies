var hostTheMoviedb = "https://api.themoviedb.org/3/";
var api = "?api_key=b2907782d07859a652052d3bae537475&language=es-ES";

moviesDatabase.factory('theMoviedb', function($http) {
  //JSON all services
  var _theMoviedbFactory = {};
  //JSON movie or tv
  var movie = {};
  //URL services get list movies
  var listMovies = hostTheMoviedb+"discover/movie"+api+"&sort_by=popularity.desc&include_adult=false&include_video=false&language=es-ES&page=1";
  //URL services filter get movies and tv
  var listFilterMovies = hostTheMoviedb+"search/multi"+api+"&query=";
  //URL services get detail movie
  var detaileMovie = hostTheMoviedb+"movie/";
  //URL services get detail tv
  var detaileTv = hostTheMoviedb+"tv/";

  //services get list movies
  _theMoviedbFactory.loadMovies = function() {
    return $http.get(listMovies);
  };

  //services filter get movies and tv
  _theMoviedbFactory.findMovie = function(data) {
    return $http.get(listFilterMovies+data);
  };

  //save data movie or tv in JSON
  _theMoviedbFactory.setMovie = function(data) {
    console.log(data);
    movie = data;
  };

  //return data JSON movie or tv
  _theMoviedbFactory.getMovie = function(data) {
    return movie;
  };

  //save media type
  _theMoviedbFactory.setMediaType = function(data) {
    console.log(data);
    movie.media_type = data.media_type;
  };

  //return media type
  _theMoviedbFactory.getMediaType = function(data) {
    return movie.media_type;
  };

  //services get detail movie
  _theMoviedbFactory.detaileMovie = function(id){
    return $http.get(detaileMovie+id+api);
  }

  //services get detail tv
  _theMoviedbFactory.detaileTv = function(id){
    return $http.get(detaileTv+id+api);
  }

  //services get detail tv
  _theMoviedbFactory.detaileSeason = function(id, data){
    return $http.get(detaileTv+id+"/season/"+data+api);
  }

  return _theMoviedbFactory;

});
