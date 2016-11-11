export function RController($scope,$http, $rootScope, $location, ApiService){
	
	$scope.searched = $rootScope.name
	ApiService.searchService($scope.searched)
		.then(function(response){
			$scope.artists = response;
			console.log(response);
		});

	$scope.searchAlbums = function(){
			ApiService.searchAlbumsService($scope.artist).then(function(){
				$location.path('/band-albums.html');
			});
			
	}




}