export function albumController($scope,$http, ApiService){
	$scope.bandId = ApiService.getBandId();
	console.log($scope.bandId);

	ApiService.searchAlbumsService($scope.bandId)
		.then(function(response){
			console.log(response);	
			$scope.albums = response;
		});




	// $scope.searchAlbums = function(){
	// 		ApiService.searchAlbumsService($scope.toSearch.id).then(function(){
	// 			$scope.albums=response.data.items;
	// 		});
			
	// }




}