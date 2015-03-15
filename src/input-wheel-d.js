angular.module('angularInputWheel')
    .directive('inputWheel', ['angularInputWheel', function (angularInputWheel)
    {
        'use strict';

        return {
            restrict: 'EA',
            scope: false,
            compile: function (el)
            {
            }
        };
    }]);
