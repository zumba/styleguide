'use strict';

angular.module('StyleGuide.SidebarController', [])
	.controller('Sidebar', function($scope, $rootScope, $compile ){
		
		$scope.directory = $rootScope.topDirectory;

		$scope.linkList = [
			'colors',
			'fonts',
			'standards'
		];

		$scope.template = '';

		$scope.updateCurrentLink = function($event){
			var item = angular.element(event.currentTarget);
		};

		$scope.updateContent = function(event){
			var item = angular.element(event.currentTarget);
			$scope.template = 'partials/content/' + item.data('template');
			//var template = '<p>Hehehes</p>';
			//var content = $compile(template)($scope);
			
			//$(".main").html(content);
		}
	});

angular.module('StyleGuide.SidebarDirective', function( $scope, $compile){

});