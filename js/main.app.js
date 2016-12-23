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
  self.baseUrlPath = "en"
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

    // if not the absolute base path change the languageLinkUrls
    if(self.originalPath != "/")
    {
      pathSuffix = self.originalPath.substring(3);
      self.languageLinks.en.url = self.languageLinks.en.base + pathSuffix;
      self.languageLinks.ja.url = self.languageLinks.ja.base + pathSuffix;
    }
    
    // Redirect to the right language website
    if(self.originalPath == "/")
    {
      if(self.lang == 'ja-JP')
      {
        baseUrlPath='ja';
      }
        $location.path('/' + baseUrlPath)
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

  // self.getEvents();
  
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


