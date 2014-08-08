var killerApp = angular.module('killerApp', [
	'ngRoute'
]);

killerApp.config(function($locationProvider, $routeProvider) {
	
	$locationProvider.html5Mode(true);

	$routeProvider
	
	.when('/', {
		templateUrl: './partials/home.html'
		,controller: 'HomeController'
	})
	
	.when('/docs', {
		templateUrl: './partials/docs.html'
		,controller: 'DocsController'
	})
	
	.when('/demo', {
		templateUrl: './partials/demo.html'
		,controller: 'DemoController'
	})
	
	.otherwise({redirectTo: '/'});
	
});

