// Define obconsole angular module.
var app = angular.module('thswebsite', [
  'ngRoute'
]);

app.controller("RootController", ['$window','$location', function($window, $location)
{
  self = this;
  self.lang = $window.navigator.language || $window.navigator.userLanguage;

  if(self.lang == 'ja-JP')
  {
    console.log("Redirecting to Japanese website");
    $location.path('/ja')
  }
  else
  {
    console.log("Redirecting to English website");
    $location.path('/en')
  }

  
  console.log("Getting events");
  
}]);

