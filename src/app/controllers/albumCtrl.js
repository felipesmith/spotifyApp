export function albumController($scope,$http,$location, ApiService){
	$scope.bandId = ApiService.getBandId();
	console.log($scope.bandId);

	ApiService.searchAlbumsService($scope.bandId)
		.then(function(response){
			console.log(response);	
			$scope.albums = response;
		});

	$scope.showTracks = (id)=>{
		ApiService.albumId = id;
		$location.path('/album-detail');
	}

	$scope.searchArtist = function(){
		
		ApiService.searchService($scope.home_search)
		.then((response)=>{
			$scope.artists = response;
	});
	}
}