'use strict';

angular.module('cvSiteApp')
  .controller('CvCtrl', function ($scope, $timeout) {
    $scope.infoTekst = "Beklager. Jeg har ikke lagd CV tilpasset Web enda";
    $scope.hideTekst = 'true';

    $scope.hentTekst = function(){
    	$scope.hideTekst = 'false';
    	$timeout(function(){
    		$scope.hideTekst = 'true';
    	}, 3000);
    }
  });
