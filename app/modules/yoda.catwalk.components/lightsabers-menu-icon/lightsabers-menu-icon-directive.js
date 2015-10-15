(function() {
	'use strict';
	var ngIcons = require('angular-material-icons');
	var componentsModule = angular.module('yoda.catwalk.components.lightsabersMenuIcon', []);

	componentsModule.directive('yodaLightsabersMenuIcon', lightsabersMenuIcon);

	function lightsabersMenuIcon() {
		var directive = {
			restrict: 'EA',
			template: require('./lightsabers-menu-icon-template.html'),
			scope: {
				state: '='
			}
		};

		return directive;
	}
})();
