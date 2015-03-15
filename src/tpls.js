angular.module('angularInputWheel').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('input-wheel-d.html',
    "<div class=\"input-wheel\" ng-transclude=\"\"></div>"
  );


  $templateCache.put('wheel-d.html',
    "<div class=\"wheel\"><span style=\"color: red; bottom: 0; z-index: 20\">{{ value }}</span><div class=\"numbers-wrapper\"><div class=\"numbers-wrapper-inner\" ng-style=\"{'margin-top': (value*-100)+'%'}\"><div class=\"number\" ng-class=\"getClass($index)\" ng-repeat=\"i in [0,1,2,3,4,5,6,7,8,9]\">{{ i }}</div></div></div></div>"
  );

}]);
