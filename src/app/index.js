import 'ngstorage';
import {routes} from './routes';
import {ApiService} from './services';
import {Controller} from './controllers/indexCtrl';
import {RController} from './controllers/resultCtrl';
import {albumController} from './controllers/albumCtrl';
import {DController} from './controllers/detailCtrl';

angular.module('App', ['ngRoute','ngStorage'])
    .config(routes)
    .service('ApiService',['$http','$localStorage' ,ApiService])
    .controller('resultCtrl', RController)
 	.controller('indexCtrl', Controller)
 	.controller('albumCtrl', albumController)
 	.controller('detailCtrl', DController);