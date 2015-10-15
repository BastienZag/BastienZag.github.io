(function startUiProgressDirective() {
	'use strict';
	var componentsModule = angular.module('start.components.uiProgress', []);
	componentsModule.directive('startUiProgress', uiProgress);

	uiProgress.$inject = [];

	function uiProgress() {
		var directive = {
			restrict: 'EA',
			template: require('./ui-progress-template.html'),
			scope: {
				stepNumber: '=',
				steps: '='
			}
		};

		return directive;
	}
})();
