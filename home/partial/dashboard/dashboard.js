angular.module('home').controller('DashboardCtrl', function ($scope, myService, $state, $stateParams) {
    $scope.form = {};
    $scope.form.firstName = "";
    $scope.form.lastName = "";
    $scope.form.cityName = "";
    $scope.showData = "AbhishekSharmaBangalore";

    function init() {
        $scope.customers = myService.getCustomer();
        console.log($scope.customers);

    }
    init();
    //get form data
    $scope.getFormData = function () {
        myService.insertCustomer($scope.form.firstName, $scope.form.lastName, $scope.form.cityName);
        $scope.form.firstName = "";
        $scope.form.lastName = "";
        $scope.form.cityName = "";
    };
    //delete the form data 
    $scope.deleteCustomer = function (id) {
        myService.deleteCustomer(id);
    };

    myService.getcurrentjob().then(function (resp) {
        $scope.getcurentjob = resp.data.Requisition;

    });

    //update functionality
    $scope.updateInfo = function (indexNumber) {
        var index = indexNumber + 1;
        $scope.customers = myService.getCustomer();
        _.map($scope.customers, function (vlaue, key) {
            $scope.findValue = _.pick(_.findWhere($scope.customers, {
                id: index
            }), "firstName", "lastName", "city");
            console.log($scope.findValue);
            return;
        });
        $scope.form.firstName = "";
        $scope.form.lastName = "";
        $scope.form.cityName = "";
    }

    var stooges = [{
        name: 'abhishek',
        age: 40
    }, {
        name: 'ashutosh',
        age: 50
    }, {
        name: 'aadarsh',
        age: 60
    }];
    var indexby = _.indexBy(stooges, 'age');
    console.log(indexby);

    var arr = [8, 9, 10, 3, 5];
    var minNum = _.min(arr);
    var maxNum = _.max(arr);
    console.log(minNum);
    console.log(maxNum);
    var first = _.first(arr);
    console.log(first);

    var object = _.object(['moe', 'larry', 'curly'], [30, 40, 50]);
    console.log(object);
    var indexof = _.indexOf([8, 5, 6], 5);
    console.log(indexof);

    var key = _.keys({
        one: 1,
        two: 2,
        three: 3
    });
    console.log(key);

    var value = _.values({
        one: 1,
        two: 2,
        three: 3
    });
    console.log(value);

    var pick = _.pick({
        name: 'Abhishe',
        age: 50,
        city: 'prtapgarh'
    }, 'name', 'age');
    console.log(pick);

    var clone = _.clone({
        name: 'abhishek'
    });
    console.log(clone);

    var empty = _.isEmpty([1, 2, 3]);
    console.log(empty);
    var array = _.isArray([1, 2, 3]);
    console.log(array);

    var getInfo = [{
        name: "Abhishek",
        designation: "software Engineer",
        city: "bangalore"
    }];
    var find = _.findWhere(getInfo, {
        name: "Abhishek"
    });
    console.log(find);


});