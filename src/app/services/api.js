export function ApiService($http) {
	this.artist;
	this.bandId;
	this.search;
	this.albumId;

	this.getAlbumId =()=>{
		return this.albumId;
	}

	this.getArtists = ()=>{
		return this.artist;
	}

	this.getBandId= ()=>{
		return this.bandId;
	}

	this.searchSongsService = (id)=>{
		return $http({
			method: 'GET',
			url: "https://api.spotify.com/v1/albums/"+id+"/tracks"
		}).then((response)=>{
			var dataParsed = [];
			response.data.items.forEach(function(el, index, arr){
					dataParsed.push(el);
			});
			return dataParsed;
		},()=>{
			console.log('La llamada falló3');
		})
	}

	this.searchAlbumsService = (id)=>{
		return $http({
			method: 'GET',
			url: "https://api.spotify.com/v1/artists/"+id+"/albums"
		}).then((response)=>{
			var dataParsed = [];
			response.data.items.forEach(function(el, index, arr){
				if (el.album_type = 'album'){
					dataParsed.push(el);
				}
			});
			return dataParsed;
		},()=>{
			console.log('La llamada falló2');
		})
	}

	this.searchAlbumById=(id)=>{
		return $http({
			method: 'GET',
			url:"https://api.spotify.com/v1/albums/"+id
		}).then((response)=>{
			return response.data;
		},()=>{
			console.log("La llamada fallo 5");
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

	this.searchServiceByID=(id)=>{
		return $http({
			method:'GET',
			url:"https://api.spotify.com/v1/artists/"+id
		}).then((response)=>{
			return response.data;
		},()=>{
			console.log('La llamada falló 4');
		})
	}

}
