// Define obconsole angular module.
var app = angular.module('thswebsite');

window.version=20161211

app.config( ['$routeProvider', function($routeProvider)
{
  $routeProvider
    .when('/en/access', {
      templateUrl: 'templates/english/access.html?version=' + window.siteVersion,
      access: {
        cssClass: 'page-roadmap',
        title: "Access - Tokyo Hackerspace"
      }
    })
    .when('/en',
    {
      templateUrl: 'templates/english/main.html?version=' + window.siteVersion,
      access: {
        footer: true,
        title: "Tokyo Hackerspace"
      }
    })
    .when('/ja',
    {
      templateUrl: 'templates/japanese/main.html?version=' + window.siteVersion,
      access: {
        footer: true,
        title: "Tokyo Hackerspace"
      }
    })
    .when('/',
    {
      templateUrl: 'templates/main.html?version=' + window.siteVersion,
      access: {
        footer: true,
        title: "Tokyo Hackerspace"
      }
    })

    
    .otherwise({
      redirectTo: '/'
    });

}] );
