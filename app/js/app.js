'use strict';

angular.module('StyleGuide', [
	'ngRoute',
	'StyleGuide.NavigationController',
	'StyleGuide.SidebarController'
]).
config(function($routeProvider){
	$routeProvider
		.when('/ui', {
			templateUrl: 'partials/sidebar/ui.html', 
			controller: 'Sidebar'
		})
		.when('/', {
			templateUrl: 'partials/sidebar/home.html',
			controller: 'Sidebar'
		})
		.otherwise({
			redirectTo: '/'
		});
})
.run(function($rootScope, $location){
	$rootScope.topDirectory = pathSplitter($location.$$path)[1];
});

function pathSplitter( arr ) {
	return arr.split("/");
}