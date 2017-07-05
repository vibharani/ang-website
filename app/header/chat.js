app.controller("myctrl5", function ($scope, $rootScope) {

    $rootScope.test4 = function (value) {
        $scope.isClicked3 = value;
    };
    $rootScope.testing4 = function (value) {
        console.log("hgjk");
        $scope.isClicked8 = value;
    }
    $rootScope.testing3 = function (value) {
        $scope.isClicked7 = value;
    }
});