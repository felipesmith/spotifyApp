export function Controller($scope,$http, $location,$localStorage, ApiService){

	$scope.searchArtist = function(){
			$location.path("/results/"+$scope.home_search);
			ApiService.search = $scope.home_search;
	}

	$scope.favs=$localStorage.favs;
	console.log($localStorage.favs);




}