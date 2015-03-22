angular.module('angularInputWheel')
    .directive('wheel', ['$rootScope', function ($rootScope)
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
                scope.displayedValues = [{val: -1}, {val: 0}, {val: 1}, {val: 2}];
                scope.selectedValue = scope.displayedValues[2];
                scope.transition = 'none';


                wheelHeight = el[0].offsetHeight;
                scope.top = wheelHeight * -1;
                var myFac = 0;

                scope.panStart = function ($event)
                {
                    // get current height and set start top
                    wheelHeight = el[0].offsetHeight;
                    scope.startTop = scope.top + (myFac * -1 * wheelHeight);
                    scope.transition = 'none';
                };
                scope.panEnd = function ($event)
                {

                };

                scope.pan = function move($event)
                {
                    if (!$event.isFinal) {
                        calcGrid($event.deltaY + scope.startTop);
                    } else {
                        var ms,
                            speed = Math.abs($event.velocityY),
                            toFullVal = Math.round(($event.deltaY + scope.startTop) / 100) * 100;

                        console.log($event.deltaY + scope.startTop);
                        console.log(scope.startTop % 100);

                        console.log(toFullVal);

                        // check speed to add distance
                        if ($event.velocityY > 0.2) {
                            toFullVal -= 100;
                        } else if ($event.velocity < -0.2) {
                            toFullVal += 100;
                        }
                        calcGrid(toFullVal);
                        // TODO calc miliseconds in relation to distance
                        // and maybe speed
                        ms = 100 + 1000 / speed;
                        scope.transition = 'all ' + ms + 'ms ease-out';
                        scope.selectedValue = 'scope.displayedValues[1]';
                    }

                };

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
