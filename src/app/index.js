import {routes} from './routes';
import {ApiService} from './services';
import {Controller} from './controllers/indexCtrl'
import {RController} from './controllers/resultCtrl'

angular.module('App', ['ngRoute'])
    .config(routes)
    .service('ApiService',['$http', ApiService])
    .controller('resultCtrl', RController)
 	.controller('indexCtrl', Controller);