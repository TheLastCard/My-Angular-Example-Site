'use strict';

angular.module('cvSiteApp')
  .controller('AngularEksemplerCtrl',['$scope', '$timeout', 'HTTPservice','$q', 
    function ($scope, $timeout, HTTPservice, $q){
    HTTPservice.getJSON('documents/list.json').then(
        function(data) {
          $scope.list = data;
        },
        function(status) { console.log(status);}
    );
    
    $scope.eksempler = 'Eksempel på data fra JSON via Angular med listesortering';
    $scope.number = 0;
  }]);
