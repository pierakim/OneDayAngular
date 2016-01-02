/*
* Manage data
* Manage function and data for client/server communication (json)
* no DOM manipulation
* no JQuery
*/

myApp.controller('AngularCtrl', ['$scope', function ($scope) {
    $scope.text = "Hello Angular World !";
}]);

myApp.controller('UserCtrl', ['$scope', function ($scope) {
    $scope.user = {};
    $scope.user.info = {
        "name": "Misko Hevery",
        "id": "11223344"
    }
}]);