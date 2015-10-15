(function yodaTrustHtmlDirective() {
	'use strict';
	var componentsModule = angular.module('yoda.helpers.filters.trustHtml', []);
	componentsModule.directive('yodaTrustHtml', trustHtml);

	trustHtml.$inject = [];

	function trustHtml() {
		var directive = {
			restrict: 'EA',
			template: require('./trust-html-template.html'),
			scope: {},
			link: linkFunc
		};

		return directive;

		function linkFunc(scope, el, attr, ctrl) {
			scope.message = 'Hello world';
		}
	}
})();
