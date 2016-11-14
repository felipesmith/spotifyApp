export function albumController($scope,$http, ApiService){
	
	$scope.searched = ApiService.search;
	ApiService.searchService($scope.searched)
		.then(function(response){
			$scope.artists = response;
			console.log(response);
		});

	$scope.searchAlbums = function(){
			ApiService.searchAlbumsService($scope.artist).then(function(){
				$scope.albums=response.data.items;
			});
			
	}




}