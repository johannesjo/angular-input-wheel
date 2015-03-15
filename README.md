[![Stories in Ready](https://badge.waffle.io/johannesjo/angular-input-wheel.svg?label=ready&title=Ready)](http://waffle.io/johannesjo/angular-input-wheel)
[![Stories in progress](https://badge.waffle.io/johannesjo/angular-input-wheel.svg?label=in%20progress&title=In%20Progress)](http://waffle.io/johannesjo/angular-input-wheel)
[![Build Status](https://travis-ci.org/johannesjo/angular-input-wheel.svg)](https://travis-ci.org/johannesjo/angular-input-wheel)
[![Coverage Status](https://coveralls.io/repos/johannesjo/angular-input-wheel/badge.svg?branch=master)](https://coveralls.io/r/johannesjo/angular-input-wheel?branch=master)

angular-input-wheel
===========

*Spinning input component for AngularJS*


[Bug-reports or feature request](https://github.com/johannesjo/angular-input-wheel/issues) as well as any other kind of **feedback is highly welcome!**

## getting started

Install it via bower
```
bower install angular-input-wheel -S
```
and add `angularInputWheel` as dependency in your main module:
```
angular.module('yourApp',[
  'angularInputWheel'
]);
```

Using the component is easy. Just wrap your markup and your good to go:

```html

```

## configuration
There are also some defaults for you to set (if you like). You can do this by using the ```angularInputWheelProvider```:
```javascript
angular.module('exampleApp', [
  'angularInputWheel'
])
.config(function (angularInputWheelProvider)
{
  angularInputWheelProvider.extendConfig({
  });
});
```



## ❤ contribute ❤
I'm happy for any [issue or feature request](https://github.com/johannesjo/angular-input-wheel/issues), you might encounter or want to have. Even a one liner is better, than no feedback at all. Pull requests are also highly welcome. Just fork the repository, clone it and run `grunt serve` for development. Another important factor is the number of developers using and thus testing `angular-input-wheel`. Tell your fellow programmers, [say that you use it on ng-modules](http://ngmodules.org/modules/angular-input-wheel), tweet or even blog about it.

`angular-input-wheel` is published under the [The GNU Lesser General Public License V2.1](https://github.com/johannesjo/angular-input-wheel/blob/master/LICENSE).

## (possible) promising future features
* [your feature request](https://github.com/johannesjo/angular-input-wheel/issues)!
