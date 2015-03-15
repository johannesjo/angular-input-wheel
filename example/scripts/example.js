angular.module('exampleApp', [
    'ngAnimate',
    'angularInputWheel'
])
    .controller('exampleCtrl', function ($scope)
    {
        $scope.testTap = function ()
        {
            console.log('I am here!');
        };

        $scope.testTouch = function ()
        {
            console.log('TOUCH');
        };

        $scope.testHold = function ()
        {
            console.log('HOLD');
        };
    });
