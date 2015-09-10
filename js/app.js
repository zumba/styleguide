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

	.when(
		'/contents/grid', 
		{
			templateUrl: 'views/contents/grid.html', 
			controller: 'ContentController'
		})

	.when(
		'/contents/breakpoints', 
		{
			templateUrl: 'views/contents/breakpoints.html', 
			controller: 'ContentController'
		})

	.when(
		'/contents/colors', 
		{
			templateUrl: 'views/contents/colors.html', 
			controller: 'ContentController'
		})

	.when(
		'/contents/patterns', 
		{
			templateUrl: 'views/contents/patterns.html', 
			controller: 'ContentController'
		})

	.when(
		'/contents/typography', 
		{
			templateUrl: 'views/contents/typography.html', 
			controller: 'ContentController'
		})

	.when(
		'/contents/buttons', 
		{
			templateUrl: 'views/contents/buttons.html', 
			controller: 'ContentController'
		})

	.when(
		'/contents/icons', 
		{
			templateUrl: 'views/contents/icons.html', 
			controller: 'ContentController'
		})

	.when(
		'/contents/forms', 
		{
			templateUrl: 'views/contents/forms.html', 
			controller: 'ContentController'
		})

	.when(
		'/contents/logos', 
		{
			templateUrl: 'views/contents/logos.html', 
			controller: 'ContentController'
		})

	.when(
		'/contents/components', 
		{
			templateUrl: 'views/contents/components.html', 
			controller: 'ContentController'
		})
	
	.otherwise('/')
});


/*  For making Prism work with compiled HTML in subpages
**  syntax to add Prism highlighting is:
**  <pre zsg-prism class="language-markup" source="<h1>"></pre>
*/
ZSG.directive('zsgPrism', [function() {
	return {
		restrict: 'A',
		scope: {
			source: '@'
		},
		link: function(scope, element, attrs) {
			scope.$watch('source', function(v) {
				if(v) {
					Prism.highlightElement(element.find("code")[0]);
				}
			});
		},
		template: "<code ng-bind='source'></code>"
	};
}]);
