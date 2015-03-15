describe('example-directive', function ()
{
    'use strict';

    var scope,
        $timeout,
        $rootScope,
        $compile;

    beforeEach(module('angularInputWheel'));

    beforeEach(inject(function (_$rootScope_, _$compile_, _$timeout_)
    {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        $timeout = _$timeout_;

        scope = $rootScope.$new();
    }));

    it('should compile', function ()
    {
        var element = $compile('<input-wheel></input-wheel>')(scope);
    });
});
