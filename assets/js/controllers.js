killerApp.controller('HomeController', function($rootScope, $scope, $http) {
	$rootScope.title = 'Home';
	$scope.list = [
		'apple'
		,'frog'
		,'pizza'
		,'gollins'
	];
});

killerApp.controller('DocsController', function($rootScope, $scope, $http) {
	$rootScope.title = 'Docs';
});

killerApp.controller('DemoController', function($rootScope, $scope, $http) {
	$rootScope.title = 'Demo';
});