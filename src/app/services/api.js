export function ApiService($http) {
	var artist;
	var album;
	this.getArtists = function(){
		return artist;
	}

	this.getAlbums= function(){
		return album;
	}

	this.searchAlbumService = function(band){
		return $http({
			method: 'GET',
			url: "https://api.spotify.com/v1/artists/{"+band.id+"}/albums"
		}).then(function(response){
			console.log(response.data.artists.items);
		},function(){
			console.log('La llamada falló');
		})
	}

    this.searchService = function(name){
		return $http({
			method: 'GET',
			url: "https://api.spotify.com/v1/search?q="+name+"&type=artist" 
		}).then(function(response){
			return response.data.artists.items;
		},function(){
			console.log('La llamada falló');
		})
	}
}
