/**
 * Created by Chicken on 02/01/2016.
 */
myApp.directive('customButton', function () {
    return {
        restrict: 'A',
        replace: true,
        transclude: true,
        template: '<a href="" class="myawesomebutton" ng-transclude>' +
        '<i class="icon-ok-sign"></i>' +
        '</a>',
        link: function (scope, element, attrs) {
            // manipulation du DOM et événements
        }
    };
});