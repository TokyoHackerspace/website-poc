// Define obconsole angular module.
var app = angular.module('thswebsite');

window.version=20161211

app.config( ['$routeProvider', function($routeProvider)
{
  $routeProvider
    .when('/en/faq', {
      templateUrl: 'templates/english/faq.html?version=' + window.siteVersion,
      access: {
        cssClass: 'page-roadmap',
        title: "Access - Tokyo Hackerspace"
      }
    })
    .when('/en/events', {
      templateUrl: 'templates/english/events.html?version=' + window.siteVersion,
      access: {
        cssClass: 'page-roadmap',
        title: "Access - Tokyo Hackerspace"
      }
    })
    .when('/en/about', {
      templateUrl: 'templates/english/about.html?version=' + window.siteVersion,
      access: {
        cssClass: 'page-roadmap',
        title: "Access - Tokyo Hackerspace"
      }
    })
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
    .when('/ja/faq', {
      templateUrl: 'templates/japanese/faq.html?version=' + window.siteVersion,
      access: {
        cssClass: 'page-roadmap',
        title: "Access - Tokyo Hackerspace"
      }
    })
    .when('/ja/events', {
      templateUrl: 'templates/japanese/events.html?version=' + window.siteVersion,
      access: {
        cssClass: 'page-roadmap',
        title: "Access - Tokyo Hackerspace"
      }
    })
    .when('/ja/about', {
      templateUrl: 'templates/japanese/about.html?version=' + window.siteVersion,
      access: {
        cssClass: 'page-roadmap',
        title: "Access - Tokyo Hackerspace"
      }
    })
    .when('/ja/access', {
      templateUrl: 'templates/japanese/access.html?version=' + window.siteVersion,
      access: {
        cssClass: 'page-roadmap',
        title: "Access - Tokyo Hackerspace"
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
