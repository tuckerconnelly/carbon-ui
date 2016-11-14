Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNativeUniversal=require('react-native-universal');






var _reactNativePs=require('react-native-ps');var _reactNativePs2=_interopRequireDefault(_reactNativePs);
var _uranium=require('uranium');var _uranium2=_interopRequireDefault(_uranium);
var _lodash=require('lodash');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}

var PRESS_RETENTION_OFFSET={top:20,left:20,right:20,bottom:30};

var TouchableRipple=_react2.default.createClass({displayName:'TouchableRipple',
propTypes:_extends({},
_reactNativeUniversal.TouchableWithoutFeedback.propTypes,{
rippleColor:_react.PropTypes.string,
rippleSpread:_react.PropTypes.number,
rippleOpacity:_react.PropTypes.number,
rippleDuration:_react.PropTypes.number,
rippleCentered:_react.PropTypes.bool,

children:_react.PropTypes.node,
style:_react.PropTypes.oneOfType([_react.PropTypes.object,_react.PropTypes.array]),

onResponderGrant:_react.PropTypes.func,
onResponderRelease:_react.PropTypes.func,
onPress:_react.PropTypes.func,
onPressIn:_react.PropTypes.func,
onPressOut:_react.PropTypes.func,
onLayout:_react.PropTypes.func}),


mixins:[_reactNativeUniversal.Touchable.Mixin],

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

getDimensions:function getDimensions(e){

if(!this._container)return;

this.layout=e.nativeEvent.layout;

this.props.onLayout&&this.props.onLayout(e);
},

_container:null,

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

position:{},

start:function start(e){var _props=
this.props,rippleSpread=_props.rippleSpread,rippleOpacity=_props.rippleOpacity,rippleDuration=_props.rippleDuration,rippleCentered=_props.rippleCentered,disabled=_props.disabled;var _layout=
this.layout,width=_layout.width,height=_layout.height,x=_layout.x,y=_layout.y;

if(disabled)return;

var newRipple={
size:Math.sqrt(width*width+height*height)*2*rippleSpread,
x:rippleCentered?
width/2:
e.nativeEvent.pageX-x,
y:rippleCentered?
height/2:
e.nativeEvent.pageY-y,
scale:new _reactNativeUniversal.Animated.Value(0),
opacity:new _reactNativeUniversal.Animated.Value(rippleOpacity)};


this.setState({ripples:[].concat(_toConsumableArray(this.state.ripples),[newRipple])});var


scale=newRipple.scale;
_reactNativeUniversal.Animated.timing(
scale,
{
toValue:1,
duration:rippleDuration,
easing:_reactNativeUniversal.Easing.out(_reactNativeUniversal.Easing.ease)}).

start();
},

_cleanupTimeout:null,

end:function end(){var _this=this;
var ripple=this.state.ripples[this.state.ripples.length-1];
if(!ripple)return;var

rippleDuration=this.props.rippleDuration;var
opacity=ripple.opacity;

_reactNativeUniversal.Animated.timing(
opacity,
{
toValue:0,
duration:rippleDuration,
easing:_reactNativeUniversal.Easing.out(_reactNativeUniversal.Easing.ease)}).

start();


var index=this.state.ripples.length-1;
this._cleanupTimeout=setTimeout(function(){return(
_this.setState({ripples:_this.state.ripples.splice(index,1)}));},
rippleDuration+10);
},

render:function render(){var _this2=this;var _props2=
this.props,rippleColor=_props2.rippleColor,disabled=_props2.disabled,children=_props2.children,style=_props2.style,other=_objectWithoutProperties(_props2,['rippleColor','disabled','children','style']);

return(
_react2.default.createElement(_reactNativeUniversal.View,_extends({
style:[
styles.container,
disabled&&styles.containerDisabled,
style],

ref:function ref(c){_this2._container=c;},
onLayout:this.getDimensions,
onKeyDown:this._onKeyDown,
onKeyUp:this._onKeyUp,
onKeyPress:this._onKeyPress,
onStartShouldSetResponder:this.touchableHandleStartShouldSetResponder,
onResponderTerminationRequest:this.touchableHandleResponderTerminationRequest,
onResponderGrant:this.touchableHandleResponderGrant,
onResponderMove:this.touchableHandleResponderMove,
onResponderRelease:this.touchableHandleResponderRelease,
onResponderTerminate:this.touchableHandleResponderTerminate},
(0,_lodash.omit)(other,Object.keys(TouchableRipple.propTypes))),
children,

this.state.ripples.map(function(ripple,i){return(
_react2.default.createElement(_reactNativeUniversal.Animated.View,{
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





}});exports.default=


(0,_uranium2.default)(TouchableRipple);

var styles=(0,_reactNativePs2.default)({
container:{
overflow:'hidden'},


web:{
container:{
cursor:'pointer'},


containerDisabled:{
cursor:'default'}}});