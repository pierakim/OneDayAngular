/**
 * Created by Chicken on 02/01/2016.
 */

myApp.controller('ReverseCtrl', ['$scope', function ($scope) {
    $scope.text = "Eric Emerson";
}]);

myApp.filter('reverse', function () {
    return function (input, uppercase) {
        var out = '';
        for (var i = 0; i < input.length; i++) {
            out = input.charAt(i) + out;
        }
        if (uppercase) {
            out = out.toUpperCase();
        }
        return out;
    }
});