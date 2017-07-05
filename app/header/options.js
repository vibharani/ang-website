app.controller("myctrl6", function ($scope, $rootScope) {
	$scope.show1 = function () {
		$scope.show2 = !$scope.show2;
	};
	$scope.testone = function (index) {
		$scope.isClicked = !$scope.isClicked;
		$rootScope.test($scope.isClicked);
		$rootScope.test1($scope.isClicked);
		$rootScope.test12($scope.isClicked);
	};

	$scope.alter = function () {

		$scope.isClicked4 = !$scope.isClicked4;
		$rootScope.testing($scope.isClicked4);

		$scope.isClicked5 = !$scope.isClicked5;
		$rootScope.testing1($scope.isClicked5);

		$scope.isClicked6 = !$scope.isClicked6;
		$rootScope.testing2($scope.isClicked6);

		$scope.isClicked7 = !$scope.isClicked7;
		$rootScope.testing3($scope.isClicked7);

	};
});