import 'angular-route';


export function routes($routeProvider, $locationProvider) {
   $locationProvider.html5Mode({
       enabled: true,
       requireBase: false,
       rewriteLinks: true,
   });

   $routeProvider
.when('/', {
	templateUrl : "/app/views/index.html",
	controller: "indexCtrl"
})

.when('/album-detail/:albumId', {

templateUrl : "/app/views/album-detail.html",
controller:"detailCtrl"
})

.when('/band-albums/:artistId', {

templateUrl : "/app/views/band-albums.html",
controller: "albumCtrl"
})

.when('/results/:search', {
	templateUrl : "/app/views/results.html",
	controller: "resultCtrl"
})
.otherwise('/');

}