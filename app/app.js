'use strict';

var serviceBase = "http://ps-jha-tm-api.azurewebsites.net/";

angular
    .module('hackathon', [
        'ui.router', 'ui.bootstrap', 'ngResource', 'LocalStorageModule', 'angularAudioRecorder'
    ]);

angular
    .module('hackathon')
    .config([
        '$httpProvider', '$stateProvider', '$urlRouterProvider',
        function ($httpProvider, $stateProvider, $urlRouterProvider) {
             $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: "/hackaton/app/login/views/login.html"
                })
                .state('dashboard', {
                    url: '/dashboard',
                    templateUrl: "/hackaton/app/dashboard/views/dashboard.html"
                })
                .state('profile', {
                    url: '/profile',
                    templateUrl: "/hackaton/app/profile/views/profile.html"
                })
                .state('register', {
                    url: '/register',
                    templateUrl: "/hackaton/app/register/views/register.html"
                });
            $urlRouterProvider.otherwise("/login");
        }
    ]);
