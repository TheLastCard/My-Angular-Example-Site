'use strict';

angular
  .module('cvSiteApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/Angular', {
        templateUrl: 'views/angular_eksempler.html',
        controller: 'AngularEksemplerCtrl'
      })
      .when('/AngularGalleri', {
        templateUrl: 'views/Angular_Galleri.html',
        controller: 'Angular_GalleriCtrl'
      })
      .when('/', {
        templateUrl: 'views/cv.html',
        controller: 'CvCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
