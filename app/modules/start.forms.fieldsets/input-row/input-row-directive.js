(function startInputRowTextDirective() {
	'use strict';
	var componentsModule = angular.module('start.forms.fieldsets.inputRow', [ 'start.forms.components.textInput']);
	componentsModule.directive('startInputRow', startInputRow);

	startInputRow.$inject = [];

	function startInputRow() {
		var directive = {
			transclude: true,
			restrict: 'EA',
			template: require('./input-row-template.html'),
			scope: {
				label: '@',
				fieldModel: '=',
				fieldType: '@',
				fieldId: '@',
				fieldRequired: '=',
				fieldPlaceholder: '@?'
			},
			bindToController: true,
			controller: ['$scope', '$attrs', function(scope, $attrs) {}],
			controllerAs: 'fieldCtrl'
		};

		return directive;
	}
})();
