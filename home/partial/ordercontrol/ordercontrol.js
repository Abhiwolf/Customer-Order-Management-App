angular.module('home').controller('OrdercontrolCtrl', function ($scope,myService, $state, $stateParams) {
    var id = $stateParams.id;
    $scope.params = $stateParams;
    console.log($stateParams.rid);
    $scope.userCustomer = {};

    function init() {
        var customerId = ($stateParams.id) ? parseInt($stateParams.id) : 0;
        if (id > 0) {
            $scope.userCustomer = myService.getCustomerDetails(customerId);
            console.log($scope.userCustomer);
        }

    }
    init();


});