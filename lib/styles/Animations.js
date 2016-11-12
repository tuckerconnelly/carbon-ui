Object.defineProperty(exports,"__esModule",{value:true});exports.Durations=exports.Curves=undefined;var _reactNativeUniversal=require('react-native-universal');

var _Grid=require('./Grid');

var Curves=exports.Curves={
standard:_reactNativeUniversal.Easing.bezier(0.4,0,0.2,1),
deceleration:_reactNativeUniversal.Easing.bezier(0,0,0.2,1),
acceleration:_reactNativeUniversal.Easing.bezier(0.4,0,1,1),
sharp:_reactNativeUniversal.Easing.bezier(0.4,0,0.6,1)};










var interpolateDesktopValue=function interpolateDesktopValue(from){return 150+0.28*(from-195);};





var getResponsiveDurationFn=function getResponsiveDurationFn(value){return function(){
var desktopMediaQuery=_Grid.Breakpoints.ml.split('@media')[1];
var tabletMediaQuery=_Grid.Breakpoints.md.split('@media')[1];

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
standard:function standard(av){var toValue=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1;var duration=arguments[2];return _reactNativeUniversal.Animated.timing(av,{
duration:duration?Durations.custom(duration)():Durations.standard(),
easing:Curves.standard,
toValue:toValue});},

large:function large(av){var toValue=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1;var duration=arguments[2];return _reactNativeUniversal.Animated.timing(av,{
duration:duration?Durations.custom(duration)():Durations.large(),
easing:Curves.standard,
toValue:toValue});},

entrance:function entrance(av){var toValue=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1;var duration=arguments[2];return _reactNativeUniversal.Animated.timing(av,{
duration:duration?Durations.custom(duration)():Durations.entering(),
easing:Curves.deceleration,
toValue:toValue});},

exit:function exit(av){var toValue=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1;var duration=arguments[2];return _reactNativeUniversal.Animated.timing(av,{
duration:duration?Durations.custom(duration)():Durations.leaving(),
easing:Curves.acceleration,
toValue:toValue});},

tempExit:function tempExit(av){var toValue=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1;var duration=arguments[2];return _reactNativeUniversal.Animated.timing(av,{
duration:duration?Durations.custom(duration)():Durations.leaving(),
easing:Curves.sharp,
toValue:toValue});},

staggered:function staggered(av,staggerAV){var toValue=arguments.length>2&&arguments[2]!==undefined?arguments[2]:1;var staggerAmount=arguments.length>3&&arguments[3]!==undefined?arguments[3]:50;return(
_reactNativeUniversal.Animated.stagger(staggerAmount,[
_reactNativeUniversal.Animated.timing(toValue?av:staggerAV,{
duration:Durations.custom(300-staggerAmount)(),
easing:Curves.standard,
toValue:toValue}),

_reactNativeUniversal.Animated.timing(toValue?staggerAV:av,{
duration:Durations.custom(300-staggerAmount)(),
easing:Curves.standard,
delay:Durations.custom(staggerAmount)(),
toValue:toValue})]));}};exports.default=




Animations;