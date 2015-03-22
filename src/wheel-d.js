angular.module('angularInputWheel')
    .directive('wheel', ['$timeout', function ($timeout)
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
                var runEaseOut = false;
                scope.displayedValues = [{val: -1}, {val: 0}, {val: 1}, {val: 2}];
                scope.selectedValue = scope.displayedValues[2];

                wheelHeight = el[0].offsetHeight;
                scope.top = wheelHeight * -1;
                var myFac = 0;

                scope.panStart = function ($event)
                {
                    // get current height and set start top
                    wheelHeight = el[0].offsetHeight;
                    scope.startTop = scope.top + (myFac * -1 * wheelHeight);
                    runEaseOut = false;
                };
                scope.panEnd = function ($event)
                {
                    console.log($event);
                    var speed = $event.velocityY * -10;
                    easeOut(speed);
                    scope.selectedValue = scope.displayedValues[1];
                    runEaseOut = true;
                };
                scope.panUp = move;
                scope.panDown = move;

                function move($event)
                {
                    calcGrid($event.deltaY + scope.startTop);
                }

                function easeOut(velocity)
                {
                    console.log(velocity);
                    if (runEaseOut) {
                        calcGrid(velocity);
                        if (velocity > 0) {
                            velocity = velocity - 0.1;
                            calcGrid(velocity);
                            $timeout(function ()
                            {
                                easeOut(velocity);
                            }, 10);
                        }
                        if (velocity < 0) {
                            velocity = velocity + 0.1;
                            calcGrid(velocity);
                            $timeout(function ()
                            {
                                easeOut(velocity);
                            }, 10);
                        }
                    }
                }

                function calcValues(myFac)
                {
                    scope.factor = myFac;
                    for (var i = 0; i < scope.displayedValues.length; i++) {
                        var value = scope.displayedValues[i];
                        value.val = i + myFac;
                    }
                }

                function calcGrid(fakeDistance)
                {
                    scope.top = fakeDistance + (myFac * wheelHeight);
                    if (scope.top * -1 > wheelHeight) {
                        myFac++;
                    } else if (scope.top > 0) {
                        myFac--;
                    }
                    calcValues(myFac)
                }
            }
        };
    }]);
