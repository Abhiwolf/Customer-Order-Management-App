angular.module('mytodo', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'home']);

angular.module('mytodo').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('signUp', {
        url: 'signUp',
        templateUrl: 'partial/signUp/signUp.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/dashboard');

}).run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}]);

angular.module('mytodo').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
