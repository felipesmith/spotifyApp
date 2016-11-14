export function RController($scope,$http, $routeParams, ApiService){
	
	$scope.searched = ApiService.search;
	ApiService.searchService($scope.searched)
		.then(function(response){
			$scope.artists = response;
			console.log(response);
		});

	$scope.searchAlbums = function(){
			ApiService.searchAlbumsService($routeParams.bandId).then(function(response){
				$scope.albums=response.data.items;
				console.log(response);
			});
			
	}




}