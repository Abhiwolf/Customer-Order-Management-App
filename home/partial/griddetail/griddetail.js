angular.module('home').controller('GriddetailCtrl', function ($scope, myService) {

    $scope.gridData = [];
    $scope.gridOptions = {
       /* data: 'gridData',*/
        enableSorting: true,
        enableColumnResizing: true,
        enableGridMenu: false,
        enableColumnMenus: false,
       
        columnDefs: [
            {
                name: 'ReqTitle',
                field: 'ReqTitle',
                displayName: 'Requisition Title',
                headerCellTemplate: '<div class="ui-grid-cell-contents" col-index="renderIndex"><span >{{"Requisition Title"}}</span></div>'
            },
            {
                name: 'ReqNumber',
                field: 'ReqNumber',
                displayName: 'Req Number',
                headerCellTemplate: '<div class="ui-grid-cell-contents" col-index="renderIndex"><span >{{"Req. Number"}}</span></div>'
            }, {
                name: 'BaseLocation',
                field: 'BaseLocation',
                displayName: 'Base Location',
                headerCellTemplate: '<div class="ui-grid-cell-contents" col-index="renderIndex"><span ">{{"Base location"}}</span></div>',
            },
            {
                name: 'RequisitionSkills',
                field: 'RequisitionSkills',
                displayName: 'Requisition Skills',
                headerCellTemplate: '<div class="ui-grid-cell-contents" col-index="renderIndex"><span >{{"Requisition Skills"}}</span></div>',
            },
            {
                name: 'CreatedOn',
                field: 'CreatedOn',
                displayName: 'Created On',
                headerCellTemplate: '<div class="ui-grid-cell-contents" col-index="renderIndex"><span >{{"Created On"}}</span></div>',
            }
        ]
    };

    myService.getcurrentjob().then(function (response) {
        
        $scope.gridData = response.data.Requisition;
        
        $scope.gridOptions.data = $scope.gridData;
        console.log($scope.gridOptions.data);
        
    });

});