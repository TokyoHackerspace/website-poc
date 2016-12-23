// Code version
window.siteVersion=20161222195500;

// Define obconsole angular module.
var app = angular.module('thswebsite', [
  'ngRoute'
]);

app.controller("RootController", ['$scope', '$window','$location','Meetup', function($scope, $window, $location, Meetup)
{
  self = this;
  self.lang = $window.navigator.language || $window.navigator.userLanguage;
  self.events = [];
  
  $scope.$on('$routeChangeStart', function (e, next, current)
  {
    if(next.$$route.originalPath == "/")
    {
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

  self.getEvents();
  
}]);

app.factory('Meetup',['$http','$sce', function ($http, $sce) {
  var events = [];

  return {
    getEvents: function()
    {
      if(events.length == 0)
      {
        return $http.get('/events/meetup.php')
          .then(function success(response)
          {
            if (typeof response.data === 'object')
            {
              response.data.forEach(function(val, idx)
              {
                $sce.trustAsHtml(val.description);
                events.push(val);
              });

              return events;
            }
            else
            {
              // something went wrong
              return $q.reject(response.data);
            }
          }, function error(error)
          {
            // something went wrong
            return $q.reject(response.data);
          });
      };
    },
  }
}]);


