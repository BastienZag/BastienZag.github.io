// Generated by grunt: browserify-imports
(function moduleInit_yodaApp() {
	// Angular

	// librairies
	// var angular = require("angular");
	var router = require('angular-ui-router');
	var ocLazyLoad = require('oclazyload');
	var ngAnimate = require('angular-animate');
	var ngAria = require('angular-aria');
	var ngMaterial = require('angular-material');
	var ngIcons = require('angular-material-icons');

	var catwalk = require('../yoda.catwalk');

	// Grunt browserify-imports require all components with an index.js here
	// StartRequire
	require('./routes');
	var angularModuleDependencies = [];
	// EndRequire

	// Add your angular module dependencies here
	angularModuleDependencies.push('oc.lazyLoad');
	angularModuleDependencies.push('ngMaterial');
	angularModuleDependencies.push('ngMdIcons');
	angularModuleDependencies.push('ui.router');

	angularModuleDependencies.push('yoda.catwalk');
	// angularModuleDependencies.push('yoda.catwalk.components');

	try {
		console.log('loading module yoda.app');
		angular.module('yoda', angularModuleDependencies);
	} catch (e) {
		console.log('yoda is already defined.');}
	}
)();
