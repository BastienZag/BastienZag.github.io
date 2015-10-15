(function startEmailInputDirective() {
	'use strict';
	var componentsModule = angular.module('start.forms.components.emailInput', []);
	componentsModule.directive('startEmailInput', emailInput);

	emailInput.$inject = [];

	function emailInput() {
		var directive = {
			restrict: 'EA',
			template: require('./email-input-template.html'),
			scope: {
				options: '='
			}
		};

		return directive;
	}
})();
