export function Controller($scope,$http, $location, ApiService){

	$scope.searchArtist = function(){
			$location.path("/results");
			ApiService.search = $scope.home_search;
	}




}