'use strict';

angular.module('StyleGuide.NavigationController', [])
	.controller('Navigation', function($scope, $rootScope){
		$scope.linkList = [
			'ui'
		];
		$scope.setRoute = function(){
			console.log( $rootScope.topDirectory );
		};
	});