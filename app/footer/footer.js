app.controller("myctrl2",function($scope,$rootScope){
  $rootScope.test1 = function (value) {
        $scope.isClicked = value;
    } 
  $rootScope.testing2 = function (value) {
        $scope.isClicked6 = value;
    } 
});