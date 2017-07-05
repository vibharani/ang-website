app.controller('MyCtrl', ['$scope', 'calcFactory', '$rootScope', function ($scope, calcFactory, $rootScope) {
	$scope.showChilds = function (index) {

		if (!$scope.isClicked) {
			$scope.items[index].active = !$scope.items[index].active;

			collapseAnother(index);
			$scope.isOpenSubmenu = [];
			$scope.isOpen = [];
			$scope.value = $scope.value == index ? null : index;
			$scope.selected1 = index;
			$scope.toggle1 = index;
		}
	};

	$rootScope.testing = function (value) {
		$scope.isClicked4 = value;
	}

	$scope.testone = function (index) {
		$scope.isClicked = !$scope.isClicked;
		$rootScope.test($scope.isClicked);
		$rootScope.test1($scope.isClicked);
	};

	$rootScope.test12 = function (value) {
		$scope.isClicked = value;
	}

	var collapseAnother = function (index) {
		for (var i = 0; i < $scope.items.length; i++) {
			if (i != index) {
				$scope.items[i].active = false;
			}
		}
	};

	//for changing fa-icon  up and down
	/*
	$scope.d = function (index) {if (!$scope.isClicked) {
			$scope.value = $scope.value == index ? null : index;
		}
	};
    */ //for clicking the menu item active element click
	/*
	$scope.select1 = function (index) {
		if (!$scope.isClicked) {
			$scope.selected1 = index;
			$scope.toggle1 = index;

		}

};
	*/
	/*
			if (subItem.name.length > 0) {
				$scope.selected1 = index;
			}
		*/


	$scope.inactive = function (index) {
		$scope.isClickable = index;

	}


	//after clicking the submenu button becomes active(toggling  between the submenus to be active class)

	$scope.select = function (x) {
		$scope.selected = x;


		/*
		if (isOpenSubmenu($index)) {
			$scope.selected = null;
		}
       */


	};


	$scope.isActive = function (x) {
		return $scope.selected == x;
	};


	calcFactory.doCall1().then(function (response) {
		$scope.items = response.data;
		//console.log($scope.items);

	});

}]);

app.factory('calcFactory', ['$http', function ($http) {
	var oCalcService = {};
	var baseurl = 'http://localhost:3000/items1';
	oCalcService.doCall1 = function () {
		return $http.get(baseurl);
	};
	return oCalcService;
}]);