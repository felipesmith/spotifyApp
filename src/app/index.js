import {routes} from './routes';
import {ApiService} from './services';
import {Controller} from './controllers/indexCtrl'

angular.module('App', ['ngRoute'])
    .config(routes)
    .service('ApiService', ApiService)
 	.controller('myCtrl',['$scope','$http' ,Controller]);