(function trustHtmlInit() {
	'use strict';

	// declare the component angular module, you can inject dependencies here
	angular.module('yoda.helpers.filters.trustHtml', []);

	// Require your components here
	require('./trust-html-directive.js');

	require('./trust-html-filter.js');

}());
