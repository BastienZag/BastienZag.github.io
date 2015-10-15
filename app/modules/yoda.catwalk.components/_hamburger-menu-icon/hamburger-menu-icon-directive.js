(function yodaHamburgerMenuIconDirective() {
	'use strict';
	var componentsModule = angular.module('yoda.catwalk.components.hamburgerMenuIcon', []);
	componentsModule.directive('yodaHamburgerMenuIcon', hamburgerMenuIcon);

	hamburgerMenuIcon.$inject = [];

	function hamburgerMenuIcon() {
		var directive = {
			restrict: 'EA',
			template: require('./hamburger-menu-icon-template.html'),
			scope: {
				state: '='
			}
		};

		return directive;
	}
})();
