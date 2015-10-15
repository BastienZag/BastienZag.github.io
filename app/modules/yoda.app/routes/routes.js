(function routesInit() {
	angular.module('yoda.catwalk').run(
		[          '$rootScope', '$state', '$stateParams',
		function ($rootScope,   $state,   $stateParams) {
			// using rootScope is a bad idea
			// $rootScope.$state = $state;
			// $rootScope.$stateParams = $stateParams;
		}
	]
)
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider,   $urlRouterProvider, $locationProvider) {

	/////////////////////////////
	// Redirects and Otherwise //
	/////////////////////////////

	// Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
	// If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
	// $urlRouterProvider.otherwise('/home');

	//////////////////////////
	// State Configurations //
	//////////////////////////

	// Use $stateProvider to configure your states.
	$stateProvider

	.state('root', {
		abstract: true,
		url: '/'
	})

	//////////
	// Home //
	//////////

	.state("home", {
		// Use a url of "/" to set a state as the "index".
		url: "/home",
		templateUrl: '../app/dist/templates/homepage-template.html',
		data: {
        headerTitle: 'Welcome in the Catwalk'
    	}
	})

	///////////////
	// Component //
	///////////////

	.state("component", {
		url: "/component/:moduleName/:componentName",
		template: '<div yoda-catwalk-component></div>',
		data: {
        headerTitle: 'Components loader'
    	}
	});

	// Enable html5Mode
	// $locationProvider.html5Mode({
	// 	enabled: true,
	// 	requireBase: false
	// });
}
]
);


})();
