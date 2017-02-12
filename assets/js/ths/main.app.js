// Code version
window.siteVersion=20161222195506;

// Disable jquery mobile routing.
$.mobile.ajaxEnabled = false;
$.mobile.linkBindingEnabled = false; 
$.mobile.hashListeningEnabled = false; 
$.mobile.pushStateEnabled = false; 
$.mobile.changePage.defaults.changeHash = false;

// Define obconsole angular module.
var app = angular.module('thswebsite', [
  'ngRoute'
]);

app.controller("RootController", ['$scope', '$window','$location', function($scope, $window, $location)
{
  self = this;
  self.lang = $window.navigator.language || $window.navigator.userLanguage;
  self.pathLang = "en";
  self.events = [];
  
  console.log("One: " + self.pathLang);

  self.languageLinks = {
    en: {
      base: "/en",
      url: ""
    },
    ja: {
      base: "/ja",
      url: ""
    }
  }

  // When we change a route we're going to do some work.
  $scope.$on('$routeChangeStart', function (e, next, current)
  {

    self.originalPath = next.$$route.originalPath;

    console.log(self.originalPath);

    if(self.originalPath == "" || self.originalPath == "/")
    {
       if(self.lang == 'ja-JP')
       {
         self.pathLang='ja';
       }
       
       $location.path('/' + self.pathLang);
    }
    else
    {
        self.pathLang = self.originalPath.substring(1,3);
    }
  });

}]);

app.controller("FooterController", ['$scope', '$window', function($scope, $window)
{
  var self = this;
}]);

app.controller("EventDisplayController", ['$scope', '$routeParams','$window', function($scope, $routeParams, $window)
{
  var self = this;
  self.eventId = $routeParams.eventId;
  self.eventTitle = $routeParams.eventTitle;
}]);




// app.factory('Meetup',['$http','$sce', function ($http, $sce) {
//   var events = [];
//
//   return {
//     getEvents: function()
//     {
//       if(events.length == 0)
//       {
//         return $http.get('/events/meetup.php')
//           .then(function success(response)
//           {
//             if (typeof response.data === 'object')
//             {
//               response.data.forEach(function(val, idx)
//               {
//                 $sce.trustAsHtml(val.description);
//                 events.push(val);
//               });
//
//               return events;
//             }
//             else
//             {
//               // something went wrong
//               return $q.reject(response.data);
//             }
//           }, function error(error)
//           {
//             // something went wrong
//             return $q.reject(response.data);
//           });
//       };
//     },
//   }
// }]);


