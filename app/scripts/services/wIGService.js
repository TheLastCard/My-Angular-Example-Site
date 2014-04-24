'use strict';

angular.module('cvSiteApp').factory('wIGservice',[function (){

	return{
		next: function (scope){
			if(scope.animFinised == "true"){
				if((scope.currentImageNumber +1) == scope.amount){
					return 0;
				}
				else{
					return (scope.currentImageNumber+1);
				}
			}
		},
		prev: function (scope){
			if(scope.animFinised == "true"){
				if((scope.currentImageNumber -1) < 0){
					return (scope.amount-1);
				}
				else{
					return (scope.currentImageNumber-1);
				}	
			}
		}
	}
}])