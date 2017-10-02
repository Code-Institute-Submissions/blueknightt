var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

  $routeProvider

  .when('/', {

templateUrl: 'pages/about.html',
controller: 'aboutController'


})

// This will bring you to the About page
   .when('/about', {

templateUrl: 'pages/about.html',
controller: 'aboutController'


})

   // This will bring you to the Tour page
  .when('/tour', {
    templateUrl: 'pages/tour.html',
    controller: 'tourController'
  })

// This will bring you to the Video page
.when('/video', {

templateUrl: 'pages/video.html',
controller: 'videoController'


})
// this will bring you to the music page
.when('/music', {

templateUrl: 'pages/music.html',
controller: 'musicController'


})
// This will bring you to the contact page
.when('/contact', {

templateUrl: 'pages/contact.html',
controller: 'contactController'


})
// This will bring you to the Home page
.when('/home', {

templateUrl: 'pages/home.html',
controller: 'homeController'


})

});



myApp.controller('aboutController', ['$scope', '$log', function($scope, $log){


}]);


myApp.controller('tourController', ['$scope', '$log', function($scope, $log){


}]);
  


myApp.controller('videoController', ['$scope', '$log', function($scope, $log){


}]);

myApp.controller('musicController', ['$scope', '$log', function($scope, $log){


}]);

myApp.controller('contactController', ['$scope', '$log', function($scope, $log){


}]);

myApp.controller('homeController', ['$scope', '$log', function($scope, $log){


}]);




  