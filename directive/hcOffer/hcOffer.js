angular.module('mytodo').directive('hcOffer', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
            info:"=",
            name:"="
		},
		templateUrl: 'directive/hcOffer/hcOffer.html',
		link: function(scope, element, attrs, fn) {


		},
        controller:function($scope){
            console.log($scope.info);
            console.log($scope.name);
        }
	};
});
