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
  'oc.lazyLoad'
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


app.controller('MapController',['$scope', '$document','$ocLazyLoad', function($scope, $document,$ocLazyLoad)
{
  // Loading the map api for google using LazyLoader.  It then calls the callback function initMap which lives outside
  // Of angulage.
 $ocLazyLoad.load('https://maps.googleapis.com/maps/api/js?key=AIzaSyDZDTW0XaQ3Qd3RVFtvGpiziwEQwGasEA4&callback=initMap')

 if(window.mapContents != null)
 {
   var directionsService = new google.maps.DirectionsService;
   var directionsDisplay = new google.maps.DirectionsRenderer;
   
   directionsDisplay.setMap(window.mapContents);
   calculateAndDisplayRoute(directionsService, directionsDisplay);
   // calculateAndDisplayRoute(directionsService, directionsDisplay);
   // document.getElementById('map').innerHTML = ;
   // console.log("Have map contents");
 }


}]);


// This is the callback function for the Google Map API.  It must live outside of Angular.
function initMap()
{
  
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: 35.7562022, lng: 139.6924972, zoom: 17}
  });
  window.mapContents = map;
  directionsDisplay.setMap(map);
  
  calculateAndDisplayRoute(directionsService, directionsDisplay);

}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  directionsService.route({
    origin: "Nakaitabashi Station",
    destination: "173-0021 Tokyo-to, Itabashi-ku, Yayoichō, 40−7",
    travelMode: 'WALKING'
  }, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
  
}