'use strict';

angular.module('StyleGuide', [
	'ngRoute',
	'StyleGuide.NavigationController',
	'StyleGuide.MainController'
]).
config(function($routeProvider){
	$routeProvider
		.when('/ui', {
			templateUrl: 'partials/main/ui.html', 
			controller: 'Main'
		})
		.when('/', {
			templateUrl: 'partials/main/home.html',
			controller: 'Main'
		})
		.otherwise({
			redirectTo: '/'
		});
});