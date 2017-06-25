var moviesDatabase = angular.module('moviesDatabase', ['ngRoute']);

moviesDatabase.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    }).when('/movie', {
      templateUrl: 'views/movie.html',
      controller: 'MovieCtrl'
    }).otherwise({
      redirectTo: '/'
    });
});
