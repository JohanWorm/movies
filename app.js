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

moviesDatabase.directive('validateChar', function() {
  return {
    require: 'ngModel',
    restrict: 'A',
    link: function(scope, element, attrs, modelCtrl) {
      modelCtrl.$parsers.push(function(inputValue) {
        if (inputValue == null)
          return ''
        cleanInputValue = inputValue.replace(/[^\w\s]/gi, '');
        if (cleanInputValue != inputValue) {
          modelCtrl.$setViewValue(cleanInputValue);
          modelCtrl.$render();
        }
        return cleanInputValue;
      });
    }
  }
});
