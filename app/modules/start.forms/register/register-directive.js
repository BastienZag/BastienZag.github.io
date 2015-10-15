(function startRegisterDirective() {
	'use strict';

	var componentsModule = angular.module('start.forms.register', []);
	componentsModule.directive('startRegister', register);

	register.$inject = [];

	function register() {
		var directive = {
			restrict: 'EA',
			template: require('./register-template.html'),
			scope: {},
			controller : ['$scope', '$attrs', function(scope, $attrs) {
				scope.formData = {};

				this.handleSubmit = function(valid, formData) {
					if (valid) {
						scope.$eval($attrs.onValidSubmit);
						console.log('data submitted:');
						console.log( formData );
						scope.dataSubmitted = JSON.stringify(formData);
					} else {
						console.log('form invalid');
					}
				};

			}],
			controllerAs: 'ctrl',
		};

		return directive;
	}
})();
