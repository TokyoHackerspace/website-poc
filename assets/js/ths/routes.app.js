// Define obconsole angular module.
var app = angular.module('thswebsite')

app.config( ['$routeProvider', function($routeProvider)
{
  $routeProvider
    .when('/en/access',
    {
      templateUrl: '/assets/templates/en/access.html?version=' + window.siteVersion,
      access: {
        footer: true,
        title: "Tokyo Hackerspace"
      }
    })
    .when('/ja/access',
    {
      templateUrl: '/assets/templates/ja/access.html?version=' + window.siteVersion,
      access: {
        footer: true,
        title: "Tokyo Hackerspace"
      }
    })
    .when('/en/event/:eventId/:eventTitle',
    {
      templateUrl: '/assets/templates/en/event.html?version=' + window.siteVersion,
      access: {
        footer: true,
        title: "Tokyo Hackerspace"
      }
    })
    .when('/ja/event/:eventId/:eventTitle',
    {
      templateUrl: '/assets/templates/ja/event.html?version=' + window.siteVersion,
      access: {
        footer: true,
        title: "Tokyo Hackerspace"
      }
    })
    .when('/en/event/hosting',
    {
      templateUrl: '/assets/templates/en/event-hosting.html?version=' + window.siteVersion,
      access: {
        footer: true,
        title: "Tokyo Hackerspace"
      }
    })
    .when('/ja/event/hosting',
    {
      templateUrl: '/assets/templates/ja/event-hosting.html?version=' + window.siteVersion,
      access: {
        footer: true,
        title: "Tokyo Hackerspace"
      }
    })
    .when('/en/events',
    {
      templateUrl: '/assets/templates/en/events.html?version=' + window.siteVersion,
      access: {
        footer: true,
        title: "Tokyo Hackerspace"
      }
    })
    .when('/ja/events',
    {
      templateUrl: '/assets/templates/ja/events.html?version=' + window.siteVersion,
      access: {
        footer: true,
        title: "Tokyo Hackerspace"
      }
    })
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
    .otherwise({
      redirectTo: '/'
    })
    ;

}] );
