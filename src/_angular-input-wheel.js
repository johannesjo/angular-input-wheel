angular.module('angularInputWheel', [
    'angular-gestures'
])
    .config(function (hammerDefaultOptsProvider)
    {
        hammerDefaultOptsProvider.set({
            recognizers: [
                [Hammer.Tap],
                [Hammer.Press],
                [Hammer.Pan]
            ]
        });
    });
