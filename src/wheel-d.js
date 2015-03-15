angular.module('angularInputWheel')
    .directive('wheel', ['$swipe', function ($swipe)
    {
        'use strict';

        return {
            restrict: 'EA',
            require: '^inputWheel',
            scope: {},
            replace: true,
            templateUrl: 'wheel-d.html',
            link: function (scope, el, attrs, inputWheelCtrl)
            {

                var total = inputWheelCtrl.ngModel;

                scope.max = 9;
                scope.min = 0;
                scope.value = 0;
                scope.step = 0.1;

                $swipe.bind(el, {
                    'start': function (coords)
                    {
                        scope.startValue = parseFloat(scope.value);
                        scope.startY = coords.y;
                        console.log('START');

                    },
                    'move': function (coords)
                    {
                        var delta = coords.y - scope.startY;

                        var computedValue = Math.round((scope.startValue + (delta * scope.step)) * 10000) / 10000;
                        console.log(computedValue);

                        if (computedValue > scope.max) {
                            computedValue = scope.max;
                        }
                        if (computedValue < scope.min) {
                            computedValue = scope.min;
                        }
                        scope.value = computedValue;
                        scope.$apply();
                        console.log(scope.value);
                    },
                    'end': function (coords)
                    {
                        scope.value = parseInt(scope.value);
                    },
                    'cancel': function (coords)
                    {
                        console.log('CANCEL');

                    }
                });


                scope.getClass = function (index)
                {
                    if (scope.value === index) {
                        return 'active';
                    } else if (scope.value === index + 1) {
                        return 'next';
                    } else if (scope.value === index - 1) {
                        return 'previous';
                    }
                };
            }
        };
    }]);
