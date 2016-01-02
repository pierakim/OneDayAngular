/**
 * Created by Chicken on 02/01/2016.
 */
myApp.controller('EmailsCtrl', ['$scope', function ($scope) {

    // Crée un Object emails
    $scope.emails = {};

    // Nous écrivons ici en dur les données normalement
    // reçues du serveur
    $scope.emails.messages = [{
        "from": "Jonas Mulata",
        "subject": "All is all right.",
        "sent": "2015-12-01T08:05:59Z"
    },{
        "from": "Guillaume Brebis",
        "subject": "Are you sure ?",
        "sent": "2015-12-21T19:45:00Z"
    },{
        "from": "Vincent Jertry",
        "subject": "I think you can put it in my pocket. For now.",
        "sent": "2015-12-12T11:38:30Z"
    }];

    /*Manage eMail deleting*/
    $scope.deleteEmail = function (index) {
        $scope.emails.messages.splice(index, 1)
    };
}]);