angular.module('angularInputWheel').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('input-wheel-d.html',
    "<div class=\"input-wheel\" ng-transclude=\"\"></div>"
  );


  $templateCache.put('wheel-d.html',
    "<div class=\"wheel\" hm-panstart=\"panStart($event)\" hm-panend=\"panEnd($event)\" hm-pan-up=\"panUp($event)\" hm-pan-down=\"panDown($event)\"><div class=\"numbers-wrapper\"><div class=\"numbers-wrapper-inner\" ng-style=\"{'margin-top': (top)+'px'}\"><b class=\"number\" ng-repeat=\"val in displayedValues\">{{ val.val }}</b></div></div><div class=\"real-value\">{{ displayedValues[1].val }}</div></div>"
  );

}]);
