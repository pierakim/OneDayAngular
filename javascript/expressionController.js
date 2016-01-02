/**
 * Created by Chicken on 02/01/2016.
 */
myApp.controller('ExpressionCtrl', ['$scope', function ($scope) {

    $scope.main = {};
    // No data
    $scope.main.data1 = [];
    // We have data!
    $scope.main.data2 = [{
        "some": "Here is data !"
    }];

}]);