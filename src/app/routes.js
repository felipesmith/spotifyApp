import 'angular-route';

export function routes($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: true,
    });

    app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
    .when("/albums", {
        templateUrl : "album-detail.html"
    })
    .when("/band/albums", {
        templateUrl : "band-albums.html"
    })
    .when("/artists", {
        templateUrl : "results.html"
    });
});
}