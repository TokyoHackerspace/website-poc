// Define obconsole angular module.
var app = angular.module('thswebsite')

app.config( ['$routeProvider', function($routeProvider)
{
  $routeProvider
    .when('/en',
    {
      templateUrl: '/assets/templates/en/main.html?version=' + window.siteVersion,
      access: {
        footer: true,
        title: "Tokyo Hackerspace"
      }
    })
    .when('/ja',
    {
      templateUrl: '/assets/templates/ja/main.html?version=' + window.siteVersion,
      access: {
        footer: true,
        title: "Tokyo Hackerspace"
      }
    })
    .when('/',
    {
      templateUrl: '/assets/templates/main.html?version=' + window.siteVersion,
      access: {
        footer: true,
        title: "Tokyo Hackerspace"
      }
    })
    // .otherwise({
    //   redirectTo: '/'
    // })
    ;

}] );
