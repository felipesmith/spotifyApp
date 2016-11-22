export function albumController($scope,$http,$location,$routeParams, ApiService){
	$scope.bandId = $routeParams.artistId;
	console.log($scope.bandId);

	ApiService.searchServiceByID($routeParams.artistId)
		.then(function(response){
			console.log(response);
			$scope.artist=response;
		});

	ApiService.searchAlbumsService($routeParams.artistId)
		.then(function(response){
			console.log(response);	
			$scope.albums = response;
		});

	$scope.showTracks = (id)=>{
		ApiService.albumId = id;
		$location.path('/album-detail/'+id);
	}

	$scope.searchArtist = function(){
		$location.path('/results/'+$scope.home_search);
		ApiService.searchService($scope.home_search)
		.then((response)=>{
			$scope.artists = response;
	});
	}
	$scope.home=function(){
		$location.path('/');
	}

}