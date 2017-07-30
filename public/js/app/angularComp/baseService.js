angular.module("basemodule")
    .factory("baseService", baseService);

baseService.$inject = ['$http'];

function baseService(){
	
	return{
		getAllProject : function(){
			
			return $http.get('/');
		}
		
	};
}