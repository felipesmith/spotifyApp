export function ApiService($http) {
	this.artist;
	this.album;
	this.search;

	this.getArtists = function(){
		return artist;
	}

	this.getAlbums= function(){
		return album;
	}

	this.searchAlbumsService = (band)=>{
		return $http({
			method: 'GET',
			url: "https://api.spotify.com/v1/artists/"+band+"/albums"
		}).then((response)=>{
			return response.data.artists.items;
		},()=>{
			console.log('La llamada falló');
		})
	}

    this.searchService = (name)=>{
		return $http({
			method: 'GET',
			url: "https://api.spotify.com/v1/search?q="+name+"&type=artist" 
		}).then((response)=>{
			return response.data.artists.items;
		},()=>{
			console.log('La llamada falló');
		})
	}


}
