'use strict';

angular
  .module('cvSiteApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/FlereEksempler', {
        templateUrl: 'views/FlereEksempler.html',
        controller: 'FlereEksemplerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
