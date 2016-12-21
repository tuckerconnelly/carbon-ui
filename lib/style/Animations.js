Object.defineProperty(exports,"__esModule",{value:true});exports.Durations=exports.Curves=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _reactNative=require('react-native');

var _Responsive=require('./Responsive');

var Curves=exports.Curves={
standard:_reactNative.Easing.bezier(0.4,0,0.2,1),
deceleration:_reactNative.Easing.bezier(0,0,0.2,1),
acceleration:_reactNative.Easing.bezier(0.4,0,1,1),
sharp:_reactNative.Easing.bezier(0.4,0,0.6,1)};










var interpolateDesktopValue=function interpolateDesktopValue(from){return 150+0.28*(from-195);};





var getResponsiveDurationFn=function getResponsiveDurationFn(value){return function(){
var desktopMediaQuery=_Responsive.Breakpoints.ml.split('@media')[1];
var tabletMediaQuery=_Responsive.Breakpoints.md.split('@media')[1];

if(global.matchMedia(desktopMediaQuery).matches)return interpolateDesktopValue(value);

if(global.matchMedia(tabletMediaQuery).matches)return value*1.3;

return value;
};};

var Durations=exports.Durations={
standard:getResponsiveDurationFn(300),
large:getResponsiveDurationFn(375),
entering:getResponsiveDurationFn(225),
leaving:getResponsiveDurationFn(195),
custom:getResponsiveDurationFn};


var Animations={
standard:function standard(av){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return _reactNative.Animated.timing(av,_extends({
easing:Curves.standard,
toValue:1},
options,{
delay:options.delay&&Durations.custom(options.delay)(),
duration:options.duration?Durations.custom(options.duration)():Durations.standard(),
useNativeDriver:options.useNativeDriver&&_reactNative.NativeModules.NativeAnimatedModule}));},

large:function large(av){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return _reactNative.Animated.timing(av,_extends({
easing:Curves.standard,
toValue:1},
options,{
delay:options.delay&&Durations.custom(options.delay)(),
duration:options.duration?Durations.custom(options.duration)():Durations.large(),
useNativeDriver:options.useNativeDriver&&_reactNative.NativeModules.NativeAnimatedModule}));},

entrance:function entrance(av){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return _reactNative.Animated.timing(av,_extends({
easing:Curves.deceleration,
toValue:1},
options,{
delay:options.delay&&Durations.custom(options.delay)(),
duration:options.duration?Durations.custom(options.duration)():Durations.entering(),
useNativeDriver:options.useNativeDriver&&_reactNative.NativeModules.NativeAnimatedModule}));},

exit:function exit(av){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return _reactNative.Animated.timing(av,_extends({
easing:Curves.acceleration,
toValue:1},
options,{
delay:options.delay&&Durations.custom(options.delay)(),
duration:options.duration?Durations.custom(options.duration)():Durations.leaving(),
useNativeDriver:options.useNativeDriver&&_reactNative.NativeModules.NativeAnimatedModule}));},

tempExit:function tempExit(av){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return _reactNative.Animated.timing(av,_extends({
easing:Curves.sharp,
toValue:1},
options,{
delay:options.delay&&Durations.custom(options.delay)(),
duration:options.duration?Durations.custom(options.duration)():Durations.leaving(),
useNativeDriver:options.useNativeDriver&&_reactNative.NativeModules.NativeAnimatedModule}));}};exports.default=



Animations;