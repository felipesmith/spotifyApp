export function Controller($scope, $rootScope ,$http, $location, ApiService){

	$scope.searchArtist = function(){
			$rootScope.name = $scope.home_search;
			$location.path("/results");

	}




}