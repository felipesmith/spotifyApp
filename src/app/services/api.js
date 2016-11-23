export function ApiService($http, $localStorage) {
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
			this.getAlbumId=response.data;
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

	var Element=function(image,artistName,trackName,albumName,id){
		this.image=image;
		this.artistName=artistName;
		this.trackName=trackName;
		this.albumName=albumName;
		this.id=id;
	}
	
	this.changeStar=(item)=>{

		var flag=false;
		for (var i = $localStorage.favs.length - 1; i >= 0; i--) {
			if($localStorage.favs[i].id == item.id){
				flag=true;
				$localStorage.favs.splice(i,1);
			}
		}
		if(flag==false){
			var album=this.getAlbumId;
			var element= new Element(album.images[0].url,album.name,item.name, item.artists[0].name, item.id );

			$localStorage.favs.push(element);
		}
		console.log($localStorage.favs);
	}

	this.isFav=(id)=>{
		$localStorage.favs = $localStorage.favs || [];
		for(var i=$localStorage.favs.length -1; i>=0;i--){
			if($localStorage.favs[i].id== id){
				return true;
			}	
		}
		return false;
	}
function favorito(track,album){
	this.nombre = track.name;
	this.url = album.images[0].url;
	this.banda= album.artists[0].name;
}
}
