angular.module('home', ['ui.bootstrap', 'ui.router', 'ngAnimate', 'ui.grid',
    'ui.grid.resizeColumns',
    'ui.grid.moveColumns', 'ui.grid.autoResize',
    'ui.grid.saveState',
    'ui.grid.exporter',
    'ui.grid.infiniteScroll']);

angular.module('home').config(function ($stateProvider) {

    $stateProvider.state('dashboard', {
        url: '/dashboard',
        templateUrl: 'home/partial/dashboard/dashboard.html'
    });
    $stateProvider.state('customerorder', {
        url: '/customerorder',
        templateUrl: 'home/partial/customerorder/customerorder.html'
    });
    $stateProvider.state('ordercontrol', {
        url: '/ordercontrol',
        params: {
            'rid': 'rid',
            'id': 'id'
        },
        templateUrl: 'home/partial/ordercontrol/ordercontrol.html'
    });
    $stateProvider.state('griddetail', {
        url: '/griddetail',
        templateUrl: 'home/partial/griddetail/griddetail.html'
    });
    $stateProvider.state('signup', {
        url: '/signup',
        templateUrl: 'home/partial/signup/signup.html'
    });
    $stateProvider.state('offerDetails', {
        url: '/offerDetails',
        templateUrl: 'home/partial/offerDetails/offerDetails.html'
    });
    $stateProvider.state('dynamicForm', {
        url: '/dunamicForm',
        templateUrl: 'home/partial/dynamicForm/dynamicForm.html'
    });
    /* Add New States Above */

});
