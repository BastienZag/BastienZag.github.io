// Generated by grunt: browserify-imports
(function moduleInit_startForms() {

	// Add require for other modules here
	require('angular-messages');
	require('../start.forms.fieldsets');

	// require('../gui.ng.components');

	// Grunt browserify-imports require all components with an index.js here
	// StartRequire
	require('./register');
	var angularModuleDependencies = ["start.forms.register"];
	// EndRequire

	// Add your angular module dependencies here
	angularModuleDependencies.push('ngMessages');
	angularModuleDependencies.push('start.forms.fieldsets');
	// angularModuleDependencies.push('gui.ng.components');

	try {
		console.log('loading module start.forms');
		angular.module('start.forms', angularModuleDependencies);
	} catch (e) {
		console.log('start.forms is already defined.');}
	}
)();
