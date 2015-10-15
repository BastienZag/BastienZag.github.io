(function startTextInputDirective() {
	'use strict';
	var componentsModule = angular.module('start.forms.components.textInput', []);
	componentsModule.directive('startTextInput', textInput);

	textInput.$inject = [];

	function textInput() {
		var directive = {
			restrict: 'EA',
			template: require('./text-input-template.html'),
			scope: {
				options: '='
			}
		};

		return directive;
	}
})();
