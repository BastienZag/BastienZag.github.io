(function() {
	'use strict';

	angular
	.module('yoda.helpers.filters.trustHtml')
	.filter('yodaTrustHtmlFilter', trustHtml);

	trustHtml.$inject = ['$sce'];

	function trustHtml($sce) {
		return filterFilter;

		function filterFilter(text) {
			return $sce.trustAsHtml(text);
		}
	}
})();
