(function() {
	'use strict';
	var componentsModule = angular.module('yoda.catwalk.components.pageHeader', []);

	componentsModule.directive('yodaPageHeader', pageHeader);

	pageHeader.$inject = [];

	function pageHeader() {
		var directive = {
			restrict: 'EA',
			template: require('./page-header-template.html'),
			scope: {},
			link: linkFunc,
			transclude: true
		};

		return directive;

		function linkFunc(scope, el, attr, ctrl) {}
	}
})();
