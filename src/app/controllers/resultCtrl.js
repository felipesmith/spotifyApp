export function RController($scope,$http, $routeParams, $location, ApiService){
	
	$scope.searched = $routeParams.search;
	$scope.artists;
	
	
	ApiService.searchService($routeParams.search)
		.then((response)=>{
			$scope.artists = response;
	});
	
	$scope.showAlbums = (id)=>{
		ApiService.bandId = id;
		$location.path('/band-albums/'+id);
	}

	$scope.searchArtist = function(){
		$location.path('/results/'+$scope.home_search);
		ApiService.searchService($scope.home_search)
		.then((response)=>{
			$scope.artists = response;
	});
	}


	
	// $scope.searchAlbums = function(){
	// 		ApiService.searchAlbumsService($routeParams.bandId).then(function(response){
	// 			$scope.album=response.data.items;
	// 			ApiService.artist = 
	// 			console.log(response);
	// 		});
			
	// }




}