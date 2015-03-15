angular.module('angularInputWheel')
    .directive('inputWheel', ['angularInputWheel', function (angularInputWheel)
    {
        'use strict';

        return {
            replace: true,
            restrict: 'EA',
            scope: {
                ngModel: '='
            },
            templateUrl: 'input-wheel-d.html',
            transclude: true,
            controller: function ($scope)
            {

            }
        };
    }]);
