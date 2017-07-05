var app = angular.module("myApp", ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('Dashboard');

    $stateProvider
        .state('Dashboard', {
            url: '/Dashboard',
            templateUrl: 'app1/ui.html'
        })

    .state('Buttons', {
        url: '/Buttons',
        templateUrl: 'app1/home.html'
    })

    .state('General', {
        url: '/General',
        templateUrl: 'app1/ui.html'
    })

    .state('Tabs', {
        url: '/Tabs',
        templateUrl: 'app1/ui.html'
    })

    .state('Progress Bars', {
        url: '/Progress Bars',
        templateUrl: 'app1/ui.html'
    })

    .state('Pagination', {
        url: '/Pagination',
        templateUrl: 'app1/ui.html'
    })

    .state('Sliders', {
        url: '/Sliders',
        templateUrl: 'app1/ui.html'
    })

    .state('Portlets', {
        url: '/Portlets',
        templateUrl: 'app1/ui.html'
    })

    .state('Notifications', {
        url: '/Notifications',
        templateUrl: 'app1/ui.html'
    })

    .state('Alerts', {
        url: '/Alerts',
        templateUrl: 'app1/home.html'
    })


    .state('Widgets', {
        url: '/Widgets',
        templateUrl: 'app1/home.html'
    })


    .state('Documentation', {
        url: '/Documentation',
        templateUrl: 'app1/ui.html'
    })

    .state('Font-awesome', {
        url: '/Font-awesome',
        templateUrl: 'app1/home.html'
    })

    .state('Feather', {
        url: '/Feather',
        templateUrl: 'app1/ui.html'
    })

    .state('Climacon', {
        url: '/Climacon',
        templateUrl: 'app1/home.html'
    })

    .state('Invoice', {
        url: '/Invoice',
        templateUrl: 'app1/ui.html'
    })

    .state('Customizer', {
        url: '/Customizer',
        templateUrl: 'app1/ui.html'

    })

    .state('Html version', {
        url: '/Html version',
        templateUrl: 'app1/home.html'

    })

    .state("/", {
        url: 'javascript:void(0)'
    })

});

app.controller('myctrl4', function ($rootScope, $scope) {
    $rootScope.test3 = function (value) {
        $scope.isClicked1 = value;
    }
});