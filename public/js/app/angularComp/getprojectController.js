angular.module("basemodule")
    .controller("getprojectController", getprojectController);

getprojectController.$inject = ['$scope','$timeout','baseService'];

function getprojectController($scope){
	$scope.myOptions=[];
	
	getAllProject();
	
	function getAllProject(){
		baseService.getAllProject().
			success(function(data){
				
				if(data.ProjectName.length>0){
					$scope.myOptions = data.ProjectName;
					console.log('MyOptions from controller - ' +data.ProjectName);
				}
			})
	}
	
};


$scope.check= function(){
	console.log(myOptions);
}

