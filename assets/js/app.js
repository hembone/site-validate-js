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
	
	.when('/login', {
		templateUrl: './partials/login.html'
		,controller: 'LoginController'
	})
	
	.when('/signup', {
		templateUrl: './partials/signup.html'
		,controller: 'SignupController'
	})
	
	.otherwise({redirectTo: '/'});
	
});

