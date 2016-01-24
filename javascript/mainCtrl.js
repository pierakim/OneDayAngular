/*
* Manage data
* Manage function and data for client/server communication (json)
* no DOM manipulation
* no JQuery
*/

// create the controller and inject Angular's $scope
myApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Portfolio of Angular Routing.';
});

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
