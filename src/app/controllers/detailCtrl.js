export function DController($scope,$http, $routeParams, $location, ApiService){
	
	$scope.albumId = $routeParams.albumId;
	console.log($scope.albumId);
	$scope.order='track_number';
	

	ApiService.searchSongsService($routeParams.albumId)
		.then(function(response){
			console.log(response);	
			$scope.tracks = response;
		});

	ApiService.searchAlbumById($routeParams.albumId)
		.then(function(response){
			console.log(response);
			$scope.album=response;
		});	



$scope.searchArtist = function(){
		$location.path('/results/'+$scope.home_search);
		ApiService.searchService($scope.home_search)
		.then((response)=>{
			$scope.artists = response;
	});
	}
	$scope.seeFavs = function(id){
		return ApiService.isFav(id);
	}

	$scope.starColor=function(item){
		return ApiService.changeStar(item);
	}

	$scope.home=function(){
		$location.path('/');
	}

	$scope.orderByLength=function(){
		$scope.order='duration_ms';
	}

	$scope.orderOriginal=function(){
		$scope.order='track_number';
	}
}