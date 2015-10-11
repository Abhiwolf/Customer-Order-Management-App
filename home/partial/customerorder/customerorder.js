angular.module('home').controller('CustomerorderCtrl', function ($scope, myService, $state, $stateParams) {

    $scope.customers = myService.getCustomer();
});