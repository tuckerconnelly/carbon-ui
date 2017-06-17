Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');








var _omit=require('lodash/omit');var _omit2=_interopRequireDefault(_omit);
var _color=require('color');var _color2=_interopRequireDefault(_color);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var PRESS_RETENTION_OFFSET={top:20,left:20,right:20,bottom:30};var

























TouchableRipple=function(_Component){_inherits(TouchableRipple,_Component);function TouchableRipple(){var _ref;var _temp,_this,_ret;_classCallCheck(this,TouchableRipple);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=TouchableRipple.__proto__||Object.getPrototypeOf(TouchableRipple)).call.apply(_ref,[this].concat(args))),_this),_this.
propTypes=_extends({},
_reactNative.TouchableWithoutFeedback.propTypes,{



rippleColor:_propTypes2.default.string,




rippleSpread:_propTypes2.default.number,



rippleOpacity:_propTypes2.default.number,




rippleDuration:_propTypes2.default.number,



rippleCentered:_propTypes2.default.bool,





children:_propTypes2.default.node,
style:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.array])},
_reactNative.TouchableWithoutFeedback.propTypes),_this.


mixins=[_reactNative.Touchable.Mixin],_this.

































_layoutChanged=false,_this.
_layout=null,_this.
_container=null,_this.































































































_cleanupTimeout=null,_temp),_possibleConstructorReturn(_this,_ret);}_createClass(TouchableRipple,[{key:'getDefaultProps',value:function getDefaultProps(){return{rippleColor:'black',rippleSpread:1,rippleOpacity:0.2,rippleDuration:300,rippleCentered:false};}},{key:'getInitialState',value:function getInitialState(){return _extends({},this.touchableGetInitialState(),{ripples:[]});}},{key:'componentWillUnmount',value:function componentWillUnmount(){clearInterval(this._cleanupTimeout);}},{key:'getLayout',value:function getLayout(){var _this2=this;return regeneratorRuntime.async(function getLayout$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!this._layoutChanged){_context.next=4;break;}_context.next=3;return regeneratorRuntime.awrap(new Promise(function(resolve){_this2._container.measure(function(x,y,width,height,pageX,pageY){resolve({x:x,y:y,width:width,height:height,pageX:pageX,pageY:pageY});});}));case 3:this._layout=_context.sent;case 4:return _context.abrupt('return',this._layout);case 5:case'end':return _context.stop();}}},null,this);}},{key:'_handleLayout',value:function _handleLayout(e){this._layoutChanged=true;this.props.onLayout&&this.props.onLayout(e);}},{key:'measure',value:function measure(cb){this._container.measure(cb);}},{key:'touchableHandleActivePressIn',value:function touchableHandleActivePressIn(e){this.start(e);this.props.onPressIn&&this.props.onPressIn(e);}},{key:'touchableHandleActivePressOut',value:function touchableHandleActivePressOut(e){this.end(e);this.props.onPressOut&&this.props.onPressOut(e);}},{key:'touchableHandlePress',value:function touchableHandlePress(e){this.props.onPress&&this.props.onPress(e);}},{key:'touchableHandleLongPress',value:function touchableHandleLongPress(e){this.props.onLongPress&&this.props.onLongPress(e);}},{key:'touchableGetPressRectOffset',value:function touchableGetPressRectOffset(){return this.props.pressRetentionOffset||PRESS_RETENTION_OFFSET;}},{key:'touchableGetHitSlop',value:function touchableGetHitSlop(){return this.props.hitSlop;}},{key:'touchableGetHighlightDelayMS',value:function touchableGetHighlightDelayMS(){return this.props.delayPressIn||0;}},{key:'touchableGetLongPressDelayMS',value:function touchableGetLongPressDelayMS(){return this.props.delayLongPress===0?0:this.props.delayLongPress||500;}},{key:'touchableGetPressOutDelayMS',value:function touchableGetPressOutDelayMS(){return this.props.delayPressOut;}},{key:'_onKeyEnter',value:function _onKeyEnter(e,callback){var ENTER=13;if(e.keyCode===ENTER){callback&&callback(e);}}},{key:'_onKeyDown',value:function _onKeyDown(e){this._onKeyEnter(e,this.touchableHandleActivePressIn);}},{key:'_onKeyUp',value:function _onKeyUp(e){this._onKeyEnter(e,this.touchableHandleActivePressOut);}},{key:'_onKeyPress',value:function _onKeyPress(e){this._onKeyEnter(e,this.touchableHandlePress);}},{key:'start',value:function start(e){var _props,rippleSpread,rippleOpacity,rippleDuration,rippleCentered,_ref2,width,height,pageX,pageY,newRipple,scale;return regeneratorRuntime.async(function start$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(!this.props.disabled){_context2.next=2;break;}return _context2.abrupt('return');case 2:_props=this.props,rippleSpread=_props.rippleSpread,rippleOpacity=_props.rippleOpacity,rippleDuration=_props.rippleDuration,rippleCentered=_props.rippleCentered;_context2.next=5;return regeneratorRuntime.awrap(this.getLayout());case 5:_ref2=_context2.sent;width=_ref2.width;height=_ref2.height;pageX=_ref2.pageX;pageY=_ref2.pageY;newRipple={size:Math.sqrt(width*width+height*height)*2*rippleSpread,x:rippleCentered?width/2:e.nativeEvent.pageX-pageX,y:rippleCentered?height/2:e.nativeEvent.pageY-pageY,scale:new _reactNative.Animated.Value(0),opacity:new _reactNative.Animated.Value(rippleOpacity)};this.setState({ripples:[].concat(_toConsumableArray(this.state.ripples),[newRipple])});scale=newRipple.scale;_reactNative.Animated.timing(scale,{toValue:1,duration:rippleDuration,easing:_reactNative.Easing.out(_reactNative.Easing.ease)}).start();case 14:case'end':return _context2.stop();}}},null,this);}},{key:'end',value:function end()

{var _this3=this;var
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

var pureRipples=[].concat(_toConsumableArray(_this3.state.ripples));
pureRipples.splice(pureRipples.indexOf(ripple),1);
_this3.setState({ripples:pureRipples});
});
}},{key:'render',value:function render()

{var _this4=this;var _props2=
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
other),
_react2.default.createElement(_reactNative.View,{style:style},
children)));



}

return(
_react2.default.createElement(_reactNative.View,_extends({
style:[
styles.container,
disabled&&styles.containerDisabled].
concat(style),
ref:function ref(c){_this4._container=c;},
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
(0,_omit2.default)(other,Object.keys(TouchableRipple.propTypes))),
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

opacity:ripple.opacity}}));})));





}}]);return TouchableRipple;}(_react.Component);exports.default=


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