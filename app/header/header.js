app.controller("myctrl1", function ($scope, $rootScope) {
    //    $rootScope.$on('myCustomEvent', function (event, data) {
    //  alert(45); // 'Data to send'
    //  });

    $rootScope.test = function (value) {
        $scope.isClicked = value;
    }

    $scope.isClicked3;

    $scope.demo1 = function () {
        $scope.isClicked1 = !$scope.isClicked1;
        $rootScope.test3($scope.isClicked1);
    }

    $scope.demo2 = function () {
        $scope.isClicked3 = !$scope.isClicked3;
        $rootScope.test4($scope.isClicked3);

        $scope.isClicked8 = !$scope.isClicked8;
        $rootScope.testing4($scope.isClicked8);
    }

    $rootScope.testing1 = function (value) {
        $scope.isClicked5 = value;
    }

});