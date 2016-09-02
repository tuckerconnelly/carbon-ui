Object.defineProperty(exports,"__esModule",{value:true});exports.Durations=exports.Curves=undefined;var _reactNativeUniversal=require('react-native-universal');
var _reactNativeMatchMedia=require('react-native-match-media');var _reactNativeMatchMedia2=_interopRequireDefault(_reactNativeMatchMedia);

var _Grid=require('./Grid');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var Curves=exports.Curves={
standard:_reactNativeUniversal.Easing.bezier(0.4,0,0.2,1),
deceleration:_reactNativeUniversal.Easing.bezier(0,0,0.2,1),
acceleration:_reactNativeUniversal.Easing.bezier(0.4,0,1,1),
sharp:_reactNativeUniversal.Easing.bezier(0.4,0,0.6,1)};


// MD spec only specifies a range of durations for desktop, so I created a function
// to interpolate the desktop value from the mobile value.
//
// 150 is the shortest desktop duration
// 0.28 is desktop ms per mobile ms, or
// (longest desktop - shortest desktop) / (longest mobile - shortest mobile)
// or (200 - 150) / (375 - 195)
// 195 is the shortest mobile duration
var interpolateDesktopValue=function interpolateDesktopValue(from){return 150+0.28*(from-195);};

// Creates a function that calculates the duration value for different screen
// sizes
// The resulting function accepts an "add" parameter that gets added to the value
// before interpolation
var createDurationValueFn=function createDurationValueFn(value){return function(){var add=arguments.length<=0||arguments[0]===undefined?0:arguments[0];
var desktopMediaQuery=_Grid.Breakpoints.ml.split('@media')[1];
var tabletMediaQuery=_Grid.Breakpoints.md.split('@media')[1];
// Desktop, not in MD spec so I interpolated it
if((0,_reactNativeMatchMedia2.default)(desktopMediaQuery).matches)return interpolateDesktopValue(value+add);
// Tablet, according to MD spec 30% longer than mobile
if((0,_reactNativeMatchMedia2.default)(tabletMediaQuery).matches)return(value+add)*1.3;
// Mobile
return value+add;
};};

var Durations=exports.Durations={
standard:createDurationValueFn(300),
large:createDurationValueFn(375),
entering:createDurationValueFn(225),
leaving:createDurationValueFn(195),
custom:createDurationValueFn(0)};


var Animations={
standard:function standard(av){var toValue=arguments.length<=1||arguments[1]===undefined?1:arguments[1];var add=arguments[2];return _reactNativeUniversal.Animated.timing(av,{
duration:Durations.standard(add),
easing:Curves.standard,
toValue:toValue});},

large:function large(av){var toValue=arguments.length<=1||arguments[1]===undefined?1:arguments[1];var add=arguments[2];return _reactNativeUniversal.Animated.timing(av,{
duration:Durations.large(add),
easing:Curves.standard,
toValue:toValue});},

entrance:function entrance(av){var toValue=arguments.length<=1||arguments[1]===undefined?1:arguments[1];var add=arguments[2];return _reactNativeUniversal.Animated.timing(av,{
duration:Durations.entering(add),
easing:Curves.deceleration,
toValue:toValue});},

exit:function exit(av){var toValue=arguments.length<=1||arguments[1]===undefined?1:arguments[1];var add=arguments[2];return _reactNativeUniversal.Animated.timing(av,{
duration:Durations.leaving(add),
easing:Curves.acceleration,
toValue:toValue});},

tempExit:function tempExit(av){var toValue=arguments.length<=1||arguments[1]===undefined?1:arguments[1];var add=arguments[2];return _reactNativeUniversal.Animated.timing(av,{
duration:Durations.leaving(add),
easing:Curves.sharp,
toValue:toValue});},

staggered:function staggered(av,staggerAV){var toValue=arguments.length<=2||arguments[2]===undefined?1:arguments[2];var staggerAmount=arguments.length<=3||arguments[3]===undefined?50:arguments[3];return(
_reactNativeUniversal.Animated.stagger(staggerAmount,[
_reactNativeUniversal.Animated.timing(toValue?av:staggerAV,{
duration:Durations.standard(-staggerAmount),
easing:Curves.standard,
toValue:toValue}),

_reactNativeUniversal.Animated.timing(toValue?staggerAV:av,{
duration:Durations.standard(-staggerAmount),
easing:Curves.standard,
delay:Durations.custom(staggerAmount),
toValue:toValue})]));}};exports.default=




Animations;