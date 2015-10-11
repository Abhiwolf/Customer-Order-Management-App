angular.module('home').controller('OfferdetailsCtrl',function($scope, myService){
    $scope.myname = 8;
    $scope.resId = "";
    myService.getcurrentjob().then(function (response) {
        
        $scope.resId = response.data.Requisition[0].RID;
       $scope.isdirective = true;
        
    });
});