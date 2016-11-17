export function DController($scope,$http, $routeParams, $location, ApiService){
	
	$scope.albumId = ApiService.getAlbumId();
	console.log($scope.albumId);

	ApiService.searchSongsService($scope.albumId)
		.then(function(response){
			console.log(response);	
			$scope.tracks = response;
		});

	$scope.searchArtist = function(){
		
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