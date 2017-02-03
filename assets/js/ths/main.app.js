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
  self.pathLang = "en";
  self.lang = $window.navigator.language || $window.navigator.userLanguage;
  self.events = [];

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
    // Get the original path
    self.originalPath = next.$$route.originalPath;

    console.log(self.pathLang);
    
    // Redirect to the right language website
    if(self.originalPath == "" || self.originalPath == "/")
    {
      if(self.lang == 'ja-JP')
      {
        self.pathLang='ja';
      }


      var pathUrl = '/' + self.pathLang;

      // Redirect based on the baseUrlPath
      $location.path(pathUrl);
    }
    else
    {
      self.pathLang = self.originalPath.substring(3);
    }
  });


  self.getEvents = function()
  {
    Meetup.getEvents()
      .then(function success(response)
      {
        response.forEach(function(val, idx)
        {
          self.events.push(val);
        });
      }, function error(error)
      {
        console.log(error);
      });
  }

}]);

app.controller("FooterController", ['$scope', '$window', function($scope, $window)
{
  var self = this;
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


