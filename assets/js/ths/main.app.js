// Code version
window.siteVersion=20161222195506;

// Disable jquery mobile routing.
$.mobile.ajaxEnabled = false;
$.mobile.linkBindingEnabled = false; 
$.mobile.hashListeningEnabled = false; 
$.mobile.pushStateEnabled = false; 
$.mobile.changePage.defaults.changeHash = false;
window.mapContents = null;

// Define obconsole angular module.
var app = angular.module('thswebsite', [
  'ngRoute',
]);

app.controller("RootController", ['$scope', '$window','$location','$window', function($scope, $window, $location, $window)
{
  self = this;
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
  };
  
  // Figure out the language that we are trying to use.
  if(angular.isDefined($window.navigator.language))
  {
    self.lang = $window.navigator.language;
  }
  else if(angular.isDefined($window.navigator.userLanguage))
  {
    self.lang = $window.navigator.userLanguage;
  }
  else
  {
    self.lang = "ja-JP";
  }

  console.log("My Browser Locale is set to: " + self.lang);
  self.pathLang = "ja";
  
  self.gotoTop = function()
  {
    $window.scrollTo(0, 0);
  }

  // When we change a route we're going to do some work.
  $scope.$on('$routeChangeStart', function (e, next, current)
  {
    var originalPath = next.$$route.originalPath;
    console.log("Menu: " + jQuery('body').hasClass('show-menu'));
    console.log("Menu: " + jQuery('body').hasClass('show-menu'));

    // Make sure the paths are correct
    if(originalPath == "" || originalPath == "/")
    {
      if(self.lang == 'en-US' || self.lang == 'en-GB')
      {
       self.pathLang = 'en';
      }

      $location.path('/' + self.pathLang);

    }
    else
    {
      self.pathLang = originalPath.substring(1,3);
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

app.controller("EventsController", ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location)
{
  var self = this;
  self.root = $scope.rootCtrl;
  self.page = $routeParams.page;
  self.queryString = $location.search();
  self.templateUrl = '/assets/templates/common/events_list.php';
  self.queryBuild = {
    pathLang: self.root.pathLang
  };
  
  if(self.queryString.recache == true)
  {
    self.queryBuild.recache = true
  }
  
  if(self.page)
  {
    self.queryBuild.page = self.page;
  }
  
  self.serialize = function(obj) {
    var str = [];
    for(var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }

  console.log(self.queryBuild);
  self.templateUrl = self.templateUrl + '?' + self.serialize(self.queryBuild);

}]);