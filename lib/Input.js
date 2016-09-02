Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNativeUniversal=require('react-native-universal');
var _uranium=require('uranium');var _uranium2=_interopRequireDefault(_uranium);
var _color=require('color');var _color2=_interopRequireDefault(_color);
var _reactNativePs=require('react-native-ps');var _reactNativePs2=_interopRequireDefault(_reactNativePs);


var _connectTheme=require('./connectTheme');var _connectTheme2=_interopRequireDefault(_connectTheme);
var _styles=require('./styles');
var _Divider=require('./Divider');var _Divider2=_interopRequireDefault(_Divider);
var _Error=require('./Error');var _Error2=_interopRequireDefault(_Error);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var AnimatedDivider=_reactNativeUniversal.Animated.createAnimatedComponent(_Divider2.default);var

Input=function(_Component){_inherits(Input,_Component);function Input(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Input);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Input.__proto__||Object.getPrototypeOf(Input)).call.apply(_ref,[this].concat(args))),_this),_this.











labelAV=new _reactNativeUniversal.Animated.Value(_this.props.value?1:0),_this.
singleLineLabelAV=new _reactNativeUniversal.Animated.Value(_this.props.value?1:0),_this.
colorAV=new _reactNativeUniversal.Animated.Value(0),_this.





handleFocus=function(){
if(_this.props.disabled){
_this.refs.textInput.blur();
return;
}
_styles.Animations.standard(_this.labelAV).start();
_styles.Animations.standard(_this.colorAV).start();
},_this.

handleBlur=function(){
_styles.Animations.standard(_this.colorAV,0).start();

// Only return color to its original state if the input
// has a value
if(_this.props.value)return;

_styles.Animations.standard(_this.labelAV,0).start();
},_this.

focusInput=function(){
_this.refs.textInput.focus();
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Input,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){if(!this.props.value&&nextProps.value){_styles.Animations.standard(this.singleLineLabelAV,1,-200).start();}if(this.props.value&&!nextProps.value){_styles.Animations.standard(this.singleLineLabelAV,0,-200).start();}}// If the component starts with a value, start the
// placeholder in its focused state
},{key:'render',value:function render(){var _props=










this.props;var style=_props.style;var textInputStyle=_props.textInputStyle;var placeholderStyle=_props.placeholderStyle;var placeholder=_props.placeholder;var theme=_props.theme;var disabled=_props.disabled;var error=_props.error;var singleLine=_props.singleLine;var other=_objectWithoutProperties(_props,['style','textInputStyle','placeholderStyle','placeholder','theme','disabled','error','singleLine']);var
styles=this.styles;

return(
_react2.default.createElement(_reactNativeUniversal.View,{style:[styles.base,style]},
_react2.default.createElement(_reactNativeUniversal.TextInput,_extends({
ref:'textInput',
css:[
styles.textInput,
singleLine&&styles.singleLine,
disabled&&styles.disabled,
textInputStyle],

selectionColor:(0,_color2.default)(theme.accent).alpha(0.87).rgbString(),
underlineColorAndroid:'transparent'},
other,{
onFocus:this.handleFocus,
onBlur:this.handleBlur})),
_react2.default.createElement(_reactNativeUniversal.Animated.Text,{
css:[
styles.placeholder,
singleLine&&styles.placeholderSingleLine,
disabled&&styles.disabled,
placeholderStyle],

style:[
!singleLine&&(0,_uranium.animate)(
['top','fontSize'],
styles.placeholder,
styles.placeholderFocus,
this.labelAV),

!singleLine&&(0,_uranium.animate)(
'color',
styles.placeholder,
styles.placeholderFocus,
this.colorAV),

singleLine&&(0,_uranium.animate)(
'opacity',
styles.placeholderSingleLine,
styles.placeholderSingleLineFocus,
this.singleLineLabelAV)],


onPress:this.focusInput},
placeholder),

_react2.default.createElement(AnimatedDivider,{
color:this.colorAV.interpolate({
inputRange:[0,1],
outputRange:[
theme.divider,
(0,_color2.default)(theme.accent).alpha(0.87).rgbString()]}),


type:disabled&&'dotted',
css:styles.divider}),
_react2.default.createElement(_Error2.default,null,error)));


}},{key:'styles',get:function get(){return styles(this.props.theme);}}]);return Input;}(_react.Component);


Input.propTypes={
style:_react.PropTypes.oneOfType([_react.PropTypes.object,_react.PropTypes.array]),
textInputStyle:_react.PropTypes.oneOfType([_react.PropTypes.object,_react.PropTypes.array]),
placeholderStyle:_react.PropTypes.oneOfType([_react.PropTypes.object,_react.PropTypes.array]),
placeholder:_react.PropTypes.string,
value:_react.PropTypes.string,
disabled:_react.PropTypes.bool,
error:_react.PropTypes.string,
singleLine:_react.PropTypes.bool,

theme:_react.PropTypes.object.isRequired};


Input.defaultProps={
style:{},
textInputStyle:{},
placeholderStyle:{},
placeholder:'',
disabled:false,
singleLine:false};


var styles=function styles(theme){return(0,_reactNativePs2.default)({
base:{
alignSelf:'stretch'},


textInput:_extends({
alignSelf:'stretch',
height:32,
paddingHorizontal:0,
paddingVertical:4,
marginTop:32},

_styles.Type.subheading,_defineProperty({},

_styles.Breakpoints.ml,_extends({
marginTop:28},

_styles.Type.subheading[_styles.Breakpoints.ml]))),



singleLine:_defineProperty({
marginTop:12},
_styles.Breakpoints.ml,{
marginTop:8}),



// Applies to both input and placeholder
disabled:{
color:_styles.Colors.blackHint},


placeholder:_extends({
position:'absolute',
top:36},

_styles.Type.subheading,_defineProperty({
color:_styles.Colors.blackHint,
textAlign:'left',

overflow:'visible'},

_styles.Breakpoints.ml,_extends({
top:28},

_styles.Type.subheading[_styles.Breakpoints.ml]))),



placeholderFocus:_extends({
top:12},
_styles.Type.caption,_defineProperty({
color:(0,_color2.default)(theme.accent).alpha(0.87).rgbString()},

_styles.Breakpoints.ml,{
top:8})),



placeholderSingleLine:_defineProperty({
top:16,

opacity:1},

_styles.Breakpoints.ml,{
top:12}),



placeholderSingleLineFocus:{
opacity:0},


divider:_defineProperty({
marginBottom:8},

_styles.Breakpoints.ml,{
marginBottom:4}),




web:{
disabled:{
cursor:'default',
userSelect:'none'}}});};exports.default=




(0,_connectTheme2.default)((0,_uranium2.default)(Input));