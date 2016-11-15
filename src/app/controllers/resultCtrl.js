export function RController($scope,$http, $routeParams, $location, ApiService){
	
	$scope.searched = ApiService.search;
	$scope.artists;

	
	ApiService.searchService($scope.searched)
		.then((response)=>{
			$scope.artists = response;
	});
	
	$scope.showAlbums = (id)=>{
		ApiService.bandId = id;
		$location.path('/band-albums');
	}

	// $scope.searchAlbums = function(){
	// 		ApiService.searchAlbumsService($routeParams.bandId).then(function(response){
	// 			$scope.album=response.data.items;
	// 			ApiService.artist = 
	// 			console.log(response);
	// 		});
			
	// }




}