Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/TouchableRipple.js';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _createReactClass=require('create-react-class');var _createReactClass2=_interopRequireDefault(_createReactClass);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');








var _omit=require('lodash/omit');var _omit2=_interopRequireDefault(_omit);
var _color=require('color');var _color2=_interopRequireDefault(_color);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}

var PRESS_RETENTION_OFFSET={top:20,left:20,right:20,bottom:30};

























var TouchableRipple=(0,_createReactClass2.default)({displayName:'TouchableRipple',
propTypes:_extends({},
_reactNative.TouchableWithoutFeedback.propTypes,{



rippleColor:_propTypes2.default.string,




rippleSpread:_propTypes2.default.number,



rippleOpacity:_propTypes2.default.number,




rippleDuration:_propTypes2.default.number,



rippleCentered:_propTypes2.default.bool,





children:_propTypes2.default.node,
style:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.array,_propTypes2.default.number])}),


mixins:[_reactNative.Touchable.Mixin],

getDefaultProps:function getDefaultProps(){
return{
rippleColor:'black',
rippleSpread:1,
rippleOpacity:0.2,
rippleDuration:300,
rippleCentered:false};

},

getInitialState:function getInitialState(){
return _extends({},
this.touchableGetInitialState(),{
ripples:[]});

},

componentWillUnmount:function componentWillUnmount(){
clearInterval(this._cleanupTimeout);
},

getLayout:function getLayout(){var _this=this;return regeneratorRuntime.async(function getLayout$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!
this._layoutChanged){_context.next=4;break;}_context.next=3;return regeneratorRuntime.awrap(
new Promise(function(resolve){
_this._container.measure(function(x,y,width,height,pageX,pageY){
resolve({x:x,y:y,width:width,height:height,pageX:pageX,pageY:pageY});
});
}));case 3:this._layout=_context.sent;case 4:return _context.abrupt('return',

this._layout);case 5:case'end':return _context.stop();}}},null,this);},


_layoutChanged:false,
_layout:null,
_container:null,

_handleLayout:function _handleLayout(e){
this._layoutChanged=true;

this.props.onLayout&&this.props.onLayout(e);
},

measure:function measure(cb){this._container.measure(cb);},





touchableHandleActivePressIn:function touchableHandleActivePressIn(e){
this.start(e);
this.props.onPressIn&&this.props.onPressIn(e);
},

touchableHandleActivePressOut:function touchableHandleActivePressOut(e){
this.end(e);
this.props.onPressOut&&this.props.onPressOut(e);
},

touchableHandlePress:function touchableHandlePress(e){
this.props.onPress&&this.props.onPress(e);
},

touchableHandleLongPress:function touchableHandleLongPress(e){
this.props.onLongPress&&this.props.onLongPress(e);
},

touchableGetPressRectOffset:function touchableGetPressRectOffset(){
return this.props.pressRetentionOffset||PRESS_RETENTION_OFFSET;
},

touchableGetHitSlop:function touchableGetHitSlop(){
return this.props.hitSlop;
},

touchableGetHighlightDelayMS:function touchableGetHighlightDelayMS(){
return this.props.delayPressIn||0;
},

touchableGetLongPressDelayMS:function touchableGetLongPressDelayMS(){
return this.props.delayLongPress===0?0:
this.props.delayLongPress||500;
},

touchableGetPressOutDelayMS:function touchableGetPressOutDelayMS(){
return this.props.delayPressOut;
},

_onKeyEnter:function _onKeyEnter(e,callback){
var ENTER=13;
if(e.keyCode===ENTER){
callback&&callback(e);
}
},

_onKeyDown:function _onKeyDown(e){this._onKeyEnter(e,this.touchableHandleActivePressIn);},
_onKeyUp:function _onKeyUp(e){this._onKeyEnter(e,this.touchableHandleActivePressOut);},
_onKeyPress:function _onKeyPress(e){this._onKeyEnter(e,this.touchableHandlePress);},

start:function start(e){var _props,rippleSpread,rippleOpacity,rippleDuration,rippleCentered,_ref,width,height,pageX,pageY,newRipple,scale;return regeneratorRuntime.async(function start$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(!
this.props.disabled){_context2.next=2;break;}return _context2.abrupt('return');case 2:_props=

this.props,rippleSpread=_props.rippleSpread,rippleOpacity=_props.rippleOpacity,rippleDuration=_props.rippleDuration,rippleCentered=_props.rippleCentered;_context2.next=5;return regeneratorRuntime.awrap(
this.getLayout());case 5:_ref=_context2.sent;width=_ref.width;height=_ref.height;pageX=_ref.pageX;pageY=_ref.pageY;

newRipple={
size:Math.sqrt(width*width+height*height)*2*rippleSpread,
x:rippleCentered?
width/2:
e.nativeEvent.pageX-pageX,
y:rippleCentered?
height/2:
e.nativeEvent.pageY-pageY,
scale:new _reactNative.Animated.Value(0),
opacity:new _reactNative.Animated.Value(rippleOpacity)};


this.setState({ripples:[].concat(_toConsumableArray(this.state.ripples),[newRipple])});


scale=newRipple.scale;
_reactNative.Animated.timing(
scale,
{
toValue:1,
duration:rippleDuration,
easing:_reactNative.Easing.out(_reactNative.Easing.ease)}).

start();case 14:case'end':return _context2.stop();}}},null,this);},


_cleanupTimeout:null,

end:function end(){var _this2=this;var
ripples=this.state.ripples;
var ripple=ripples[ripples.length-1];
if(!ripple)return;var

rippleDuration=this.props.rippleDuration;var
opacity=ripple.opacity;

_reactNative.Animated.timing(
opacity,
{
toValue:0,
duration:rippleDuration,
easing:_reactNative.Easing.out(_reactNative.Easing.ease)}).

start(function(){

var pureRipples=[].concat(_toConsumableArray(_this2.state.ripples));
pureRipples.splice(pureRipples.indexOf(ripple),1);
_this2.setState({ripples:pureRipples});
});
},

render:function render(){var _this3=this;var _props2=
this.props,rippleColor=_props2.rippleColor,rippleOpacity=_props2.rippleOpacity,disabled=_props2.disabled,children=_props2.children,style=_props2.style,other=_objectWithoutProperties(_props2,['rippleColor','rippleOpacity','disabled','children','style']);

if(_reactNative.Platform.OS==='android'&&_reactNative.Platform.Version>=21){
var mergedStyle=Array.isArray(style)?
style.reduce(function(prev,curr){return _extends({},prev,curr);}):
style;

return(
_react2.default.createElement(_reactNative.TouchableNativeFeedback,_extends({
background:_reactNative.TouchableNativeFeedback.Ripple(
(0,_color2.default)(rippleColor).alpha(rippleOpacity).rgbString(),
mergedStyle&&mergedStyle.overflow==='visible'),

disabled:disabled},
other,{__source:{fileName:_jsxFileName,lineNumber:244}}),
_react2.default.createElement(_reactNative.View,{style:style,__source:{fileName:_jsxFileName,lineNumber:251}},
children)));



}

return(
_react2.default.createElement(_reactNative.View,_extends({
style:[
styles.container,
disabled&&styles.containerDisabled].
concat(style),
ref:function ref(c){_this3._container=c;},
onLayout:this._handleLayout,
onKeyDown:this._onKeyDown,
onKeyUp:this._onKeyUp,
onKeyPress:this._onKeyPress,
onStartShouldSetResponder:this.touchableHandleStartShouldSetResponder,
onResponderTerminationRequest:this.touchableHandleResponderTerminationRequest,
onResponderGrant:this.touchableHandleResponderGrant,
onResponderMove:this.touchableHandleResponderMove,
onResponderRelease:this.touchableHandleResponderRelease,
onResponderTerminate:this.touchableHandleResponderTerminate},
(0,_omit2.default)(other,Object.keys(TouchableRipple.propTypes)),{__source:{fileName:_jsxFileName,lineNumber:259}}),
children,

this.state.ripples.map(function(ripple,i){return(
_react2.default.createElement(_reactNative.Animated.View,{
key:i,
style:{
position:'absolute',
left:ripple.scale.interpolate({
inputRange:[0,1],
outputRange:[ripple.x,ripple.x-ripple.size/2]}),

top:ripple.scale.interpolate({
inputRange:[0,1],
outputRange:[ripple.y,ripple.y-ripple.size/2]}),


width:ripple.scale.interpolate({
inputRange:[0,1],
outputRange:[0,ripple.size]}),

height:ripple.scale.interpolate({
inputRange:[0,1],
outputRange:[0,ripple.size]}),

borderRadius:ripple.size/2,

backgroundColor:rippleColor,

opacity:ripple.opacity},__source:{fileName:_jsxFileName,lineNumber:279}}));})));





}});exports.default=


TouchableRipple;

var styles={
container:_extends({
overflow:'hidden'},

_reactNative.Platform.select({
web:{
cursor:'pointer'}})),




containerDisabled:_extends({},
_reactNative.Platform.select({
web:{
cursor:'default'}}))};