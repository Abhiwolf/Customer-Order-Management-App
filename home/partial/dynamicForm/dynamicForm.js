angular.module('home').controller('DynamicformCtrl', function ($scope) {
    $scope.form = {
        firstName: '',
        lastName: '',
        email: '',
        age: ''
    };
    $scope.saveForm = function (valid) {
        if (valid) {

        }

    };
});