'use strict';

var serviceBase = "http://ps-jha-tm-api.azurewebsites.net/";

angular
    .module('hackathon', [
        'ui.router', 'ui.bootstrap', 'ngResource', 'LocalStorageModule'
    ]);

angular
    .module('hackathon')
    .config([
        '$httpProvider', '$stateProvider', '$urlRouterProvider',
        function ($httpProvider, $stateProvider, $urlRouterProvider) {
             $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: "/app/login/views/login.html"
                });
            $urlRouterProvider.otherwise("/login");
        }
    ]);
