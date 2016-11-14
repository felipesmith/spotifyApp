import 'angular-route';


export function routes($routeProvider, $locationProvider) {
   $locationProvider.html5Mode({
       enabled: true,
       requireBase: false,
       rewriteLinks: true,
   });

   $routeProvider
.when('/', {
	templateUrl : "app/views/index.html",
	controller: "indexCtrl"
})

.when('/album-detail', {

templateUrl : "app/views/album-detail.html"
})

.when('/band-albums/:bandId', {

templateUrl : "/app/views/band-albums.html",
controller: "albumCtrl"
})

.when('/results', {
	templateUrl : "app/views/results.html",
	controller: "resultCtrl"
});

}