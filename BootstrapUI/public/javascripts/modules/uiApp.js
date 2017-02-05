/**
 * Created by Fenchelteefee on 10.12.2016.
 */


'use strict';
var donApp = angular
    .module('uiApp', ['ngRoute','ui.bootstrap', 'ngAnimate'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/training', {
                templateUrl: '/views/training.html'
            })
            .when('/modal1', {
                templateUrl: '/views/modal1.html'
            })
            .when('/modal2', {
                templateUrl: '/views/modal2.html'
            })
            .when('/modal3', {
                templateUrl: '/views/modalDemo.html'
            })
            .otherwise({
                templateUrl: '/views/start.html'
            });
/*        $locationProvider.html5Mode({
            enabled:true,
            requireBase:false
        })*/
    });


donApp.run([
    '$rootScope',
    function($rootScope) {
        // see what's going on when the route tries to change
        $rootScope.$on('$locationChangeStart', function(event, newUrl, oldUrl) {
            // both newUrl and oldUrl are strings
            console.log('Starting to leave %s to go to %s', oldUrl, newUrl);
        });
    }
]);





