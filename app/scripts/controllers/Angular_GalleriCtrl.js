'use strict';

angular.module('cvSiteApp')
.controller('Angular_GalleriCtrl',['$scope', '$timeout', 'wIGservice', 'HTTPservice','$q',
	function($scope, $timeout, wIGservice, HTTPservice, $q) {
	HTTPservice.getJSON('documents/wIG_images.json').then(
        function(data) {
        	$scope.images = data;
        	$scope.amount = $scope.images.length;
        	$scope.currentImage = $scope.images[0].src;
        },
        function(status) { console.log(status);}
    );
	$scope.currentImageNumber = 0;
	$scope.fadeNow = 'false';
	$scope.animFinised = "true";

	$scope.next = function(){
		$scope.image(wIGservice.next($scope));
	}
	$scope.prev = function(){
		$scope.image(wIGservice.prev($scope));
	}
	$scope.image = function(number){
		$scope.currentImageNumber = number;
		$scope.fadeNow = 'true';
		$scope.animFinised = "false";

		$timeout(function(){
			$scope.currentImage = $scope.images[number].src;
			$scope.fadeNow = 'false';
			$scope.animFinised = "true";
		}, 500);

	}
}])