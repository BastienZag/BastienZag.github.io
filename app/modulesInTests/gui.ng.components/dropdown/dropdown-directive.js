(function guiDropdownDirective() {
	'use strict';
	var componentsModule = angular.module('gui.ng.components.dropdown', []);
	componentsModule.directive('guiDropdown', dropdown);

	dropdown.$inject = [];

	// Require jquery trap from the lib directory
	// require('../../../../node_modules/jquery/dist/jquery.js');
	require('../../../libs/jquery.trap.js');

	function dropdown() {
		var directive = {
			restrict: 'A',
			scope: false,
			link: {
				post: postLinkFunc
			}
		};

		return directive;

		function postLinkFunc(scope, el) {
			var dropdownButton = el.find('.js-button-dropdown');
			var menu = el.find('ul');

			scope.isOpen = false;
			menu.attr('aria-hidden', scope.isOpen);

			function trigger() {
				menu.attr('aria-hidden', scope.isOpen);
				if (scope.isOpen) {
					el.removeClass('is-open');
					dropdownButton.focus();
					menu.untrap();
				} else {
					el.addClass('is-open');
					menu.focus().trap();
				}
				scope.isOpen = !scope.isOpen;
			}

			function keyup (e) {
				console.log('keyup');
				// Esc button
				if(scope.isOpen && e.keyCode === 27) {
					trigger();
				}
			}

			el.bind('click', trigger);
			el.bind('keyup', keyup);

			scope.$on('$destroy', function() {
				menu.untrap();
			});

		}
	}
})();
