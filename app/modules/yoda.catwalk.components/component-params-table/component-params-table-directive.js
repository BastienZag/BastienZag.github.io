(function yodaComponentParamsTableDirective() {
	'use strict';
	var componentsModule = angular.module('yoda.catwalk.components.componentParamsTable', []);
	componentsModule.directive('yodaComponentParamsTable', componentParamsTable);

	componentParamsTable.$inject = [];

	function componentParamsTable() {
		var directive = {
			restrict: 'EA',
			template: require('./component-params-table-template.html'),
			scope: {
				params: '='
			},
			link: linkFunc
		};

		return directive;
		function linkFunc(scope, el, attr, ctrl) {

			scope.getType = function (item) {
				if (item.values && item.values.length > 0) {
					return 'select';
				}
				if( Object.prototype.toString.call( item.data ) === '[object Array]' ) {
					return 'array';
				}
				return typeof item.data;
			};

			scope.toCamelCase = function(str) {
				return str
				.replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
				.replace(/\s/g, '')
				.replace(/^(.)/, function($1) { return $1.toLowerCase(); });
			};

			scope.hyphenate = function(str) {
				return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
			};
		}
	}
})();
