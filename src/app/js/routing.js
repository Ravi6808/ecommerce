 app = angular.module("myApp", ["ngRoute"]);
       app.config(function($routeProvider ,$locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./partials/list.html",
        controller:'listController'
    })
    .when("/list", {
        templateUrl : "./partials/list.html",
        controller:'listController'

    })
    .when("/cart", {
        templateUrl : "./partials/cart.html",
        controller:'cartController'


    })
    $locationProvider.hashPrefix('');

    
});