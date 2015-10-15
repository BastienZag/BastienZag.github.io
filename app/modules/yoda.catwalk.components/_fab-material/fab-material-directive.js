(function() {
	'use strict';
	var componentsModule = angular.module('yoda.catwalk.components.fabMaterial', []);

	componentsModule.directive('yodaFabMaterial', fabMaterial);

	fabMaterial.$inject = [];

	function fabMaterial() {
		var directive = {
			restrict: 'EA',
			template: require('./fab-material-template.html'),
			scope: false
		};

		return directive;
	}
})();
