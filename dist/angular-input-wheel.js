angular.module('angularInputWheel', [
    'angular-gestures'
])
    .config(["hammerDefaultOptsProvider", function (hammerDefaultOptsProvider)
    {
        'use strict';

        hammerDefaultOptsProvider.set({
            recognizers: [[window.Hammer.Tap, {time: 250}]]
        });
    }]);

angular.module('angularInputWheel').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('input-wheel-d.html',
    "<div class=\"input-wheel\" ng-transclude=\"\"></div>"
  );


  $templateCache.put('wheel-d.html',
    "<div class=\"wheel\" hm-drag=\"drag($event)\" hm-touch=\"drag($event)\" hm-tap=\"drag($event)\"><span style=\"color: red; bottom: 0; z-index: 20\">{{ value }}</span><div class=\"numbers-wrapper\"><div class=\"numbers-wrapper-inner\" ng-style=\"{'margin-top': (value*-100)+'%'}\"><div class=\"number\" ng-class=\"getClass($index)\" ng-repeat=\"i in [0,1,2,3,4,5,6,7,8,9]\">{{ i }}</div></div></div></div>"
  );

}]);

angular.module('angularInputWheel')
    .provider('angularInputWheel', function angularInputWheelProvider()
    {
        'use strict';

        // *****************
        // DEFAULTS & CONFIG
        // *****************

        var config = {
        };

        // *************************
        // PROVIDER-CONFIG-FUNCTIONS
        // *************************

        return {
            extendConfig: function (newConfig)
            {
                config = angular.extend(config, newConfig);
            },


            // ************************************************
            // ACTUAL FACTORY FUNCTION - used by the directive
            // ************************************************

            $get: function ()
            {
                return {
                    config: config
                };
            }
        };
    });

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
            controller: ["$scope", function ($scope)
            {

            }]
        };
    }]);

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

                var total = inputWheelCtrl.ngModel;

                scope.max = 9;
                scope.min = 0;
                scope.value = 0;
                scope.step = 0.1;

                scope.drag = function ($event)
                {
                    console.log($event);
                };

                //$swipe.bind(el, {
                //    'start': function (coords)
                //    {
                //        scope.startValue = parseFloat(scope.value);
                //        scope.startY = coords.y;
                //        console.log('START');
                //
                //    },
                //    'move': function (coords)
                //    {
                //        var delta = coords.y - scope.startY;
                //
                //        var computedValue = Math.round((scope.startValue + (delta * scope.step)) * 10000) / 10000;
                //
                //        if (computedValue > scope.max) {
                //            computedValue = scope.max;
                //        }
                //        if (computedValue < scope.min) {
                //            computedValue = scope.min;
                //        }
                //        scope.value = computedValue;
                //        //scope.$apply();
                //        //console.log(scope.value);
                //    },
                //    'end': function (coords)
                //    {
                //        console.log('END');
                //        scope.value = parseInt(scope.value);
                //    },
                //    'cancel': function (coords)
                //    {
                //        console.log('CANCEL');
                //
                //    }
                //});


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
