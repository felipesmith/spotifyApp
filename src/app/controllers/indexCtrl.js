export function Controller($scope,$http, $location, ApiService){

	$scope.searchArtist = function(){
			$location.path("/results/"+$scope.home_search);
			ApiService.search = $scope.home_search;
	}




}