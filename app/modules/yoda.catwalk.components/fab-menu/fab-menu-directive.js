(function() {
	'use strict';

	var componentsModule = angular.module('yoda.catwalk.components.fabMenu', []);

	componentsModule.directive('yodaFabMenu', fabMenu);

	fabMenu.$inject = ['$state'];

	function fabMenu($state) {
		var directive = {
			restrict: 'EA',
			template: require('./fab-menu-template.html'),
			scope: {},
			link: linkFunc
		};

		return directive;

		function linkFunc(scope, el, attr, ctrl) {
			scope.isOpen = false;
			scope.topDirections = ['left', 'up'];
			scope.bottomDirections = ['down', 'right'];
			scope.availableModes = ['md-fling', 'md-scale'];
			scope.selectedMode = 'md-fling';
			scope.availableDirections = ['up', 'down', 'left', 'right'];
			scope.selectedDirection = 'up';

			scope.openNewTab= function () {
				var component = $state.params.componentName;
				var moduleName = $state.params.moduleName;
				var url = 'component-pages/' + moduleName.replace('.', '-') + '-' + component + '-page.html';
				var win = window.open(url, '_blank');
				win.focus();
			};

		}
	}
})();
