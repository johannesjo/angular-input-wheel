angular.module('angularInputWheel')
    .directive('wheel', [function ()
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
                var total = inputWheelCtrl.ngModel,
                    wheelHeight;
                scope.displayedValues = [{val: -1}, {val: 0}, {val: 1}];
                scope.value = scope.displayedValues[1];

                wheelHeight = el[0].offsetHeight;
                scope.top = wheelHeight * -1;
                var myFac = 0;

                scope.panStart = function ($event)
                {
                    // get current height and set start top
                    wheelHeight = el[0].offsetHeight;
                    scope.startTop = scope.top + (myFac * -1 * wheelHeight);
                };
                scope.panEnd = function ($event)
                {
                    console.log('END');
                };
                scope.panUp = move;
                scope.panDown = move;

                function move($event)
                {
                    scope.top = $event.deltaY + scope.startTop + (myFac * wheelHeight);
                    if (scope.top * -1 > wheelHeight) {
                        myFac++;
                        calcScopeFactor(myFac)
                    } else if (scope.top > 0) {
                        myFac--;
                        calcScopeFactor(myFac)
                    }
                }

                function calcScopeFactor(myFac)
                {
                    scope.factor = myFac;
                }
            }
        };
    }]);
