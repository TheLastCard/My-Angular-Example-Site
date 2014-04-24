angular.module('cvSiteApp').factory('HTTPservice', ['$http', '$q', function ($http, $q) {
	return {
		getJSON: function(fileURL){
			var deferred = $q.defer();

			$http({method: 'GET', url: fileURL}).
			    success(function(data, status, headers, config) {
			    	deferred.resolve(data);
			    }).
			    error(function(data, status, headers, config) {
			    	deferred.reject(status);
			    });
		    return deferred.promise;
		}
	};
}])