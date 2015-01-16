'use strict';

var ZSG = angular.module('ZSG', ['ngRoute']);

/* ContentController */
ZSG.controller('ContentController', function($scope, $location){
    /* Sets the sidebar link to 'active' class when on the current page */
    $scope.setActive = function(path) {
         if ($location.path().substr(0, path.length) == path) {
            return "active";
        } else {
            return "";
        }
    };
});

/* Router */
ZSG.config(function($routeProvider) {
    $routeProvider
    .when('/', 
    {
        templateUrl: 'views/intro.html',
        controller: 'ContentController'
    })

    .when(
        '/contents/code', 
        {
            templateUrl: 'views/contents/code.html', 
            controller: 'ContentController'
        })
    
    .otherwise('/')
});