angular.module('userProfiles')
.factory('friendService', function( $http ) {
  return {
    
    login: function( user ) {
      $http ({
			method: "POST",
			url: "localhost:8500/api/login",
			body: user
		}).then(function(response) {
			return response;
		});
    }
  }
});