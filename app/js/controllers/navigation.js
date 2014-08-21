'use strict';

angular.module('StyleGuide.NavigationController', [])
	.controller('Navigation', function($scope){
		$scope.linkList = [
			'ui',
			'test'
		];
	});