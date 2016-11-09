export function Controller($scope,$http){

	$scope.showResults = function($scope, $html){
		console.log('The artist name is '+ $scope.artistName);
	}

	$http({
		method: 'GET',
		url: 'https://api.spotify.com/v1/'
	})then(function(response){
		console.log(response);
	},function(){
		console.log('La llamada falló');
	})


};