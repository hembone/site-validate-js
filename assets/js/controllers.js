killerApp.controller('HomeController', function($rootScope, $scope, $http) {
	$rootScope.title = 'Home';
	$scope.list = [
		'apple'
		,'frog'
		,'pizza'
		,'gollins'
	];
});

killerApp.controller('LoginController', function($rootScope, $scope, $http) {
	$rootScope.title = 'Login';
});

killerApp.controller('SignupController', function($rootScope, $scope, $http) {
	$rootScope.title = 'Signup';
});