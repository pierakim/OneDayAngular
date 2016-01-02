/**
 * Created by Chicken on 02/01/2016.
 */
myApp.service('Math', function () {
    this.multiply = function (x, y) {
        return x * y;
    };
});
/*Injection de dependance pour dire qu'on va utiliser un service*/
myApp.controller('MathCtrl', ['$scope', 'Math', function ($scope, Math) {
    var a = 12;
    var b = 24;

    // outputs 288
    var result = Math.multiply(a, b);
    $scope.a=a;
    $scope.b=b;
    $scope.resu=result;
}]);

myApp.controller('MathCtrlFromInput', ['$scope','Math', function ($scope, Math) {
    // capture data model
    // empty string init
    /*$scope.a = '';
    $scope.b = '';*/

    $scope.multiply = function(a,b) {
        var result = Math.multiply(a, b);
        $scope.resu=result;
    }


    /*var result = Math.multiply(a, b);
    $scope.resu=result;*/
}]);