/**
 * Created by Chicken on 02/01/2016.
 */
myApp.controller('CtrlFltr', ['$scope', function ($scope) {

    $scope.numbers = [10, 25, 35, 45, 60, 80, 100];

    $scope.lowerBound = 42;

    // Does the Filters
    $scope.greaterThanNum = function (item) {
        return item > $scope.lowerBound;
    };
}]);