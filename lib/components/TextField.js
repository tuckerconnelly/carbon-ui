Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/components/TextField.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _color=require('color');var _color2=_interopRequireDefault(_color);
var _uranium=require('uranium');var _uranium2=_interopRequireDefault(_uranium);

var _index=require('../index');
var _Divider=require('./Divider');var _Divider2=_interopRequireDefault(_Divider);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var AnimatedDivider=_reactNative.Animated.createAnimatedComponent(_Divider2.default);var
























































TextField=function(_Component){_inherits(TextField,_Component);function TextField(){var _ref;var _temp,_this,_ret;_classCallCheck(this,TextField);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=TextField.__proto__||Object.getPrototypeOf(TextField)).call.apply(_ref,[this].concat(args))),_this),_this.











labelAV=new _reactNative.Animated.Value(_this.props.value?1:0),_this.
singleLineLabelAV=new _reactNative.Animated.Value(_this.props.value?1:0),_this.
colorAV=new _reactNative.Animated.Value(0),_this.







handleFocus=function(){
if(_this.props.disabled){
_this._textInput.blur();
return;
}
_index.Animations.standard(_this.labelAV).start();
_index.Animations.standard(_this.colorAV).start();
},_this.

handleBlur=function(){
_index.Animations.standard(_this.colorAV,{toValue:0}).start();



if(_this.props.value)return;

_index.Animations.standard(_this.labelAV,{toValue:0}).start();
},_this.

focusInput=function(){
_this._textInput.focus();
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(TextField,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){if(!this.props.value&&nextProps.value){_index.Animations.standard(this.singleLineLabelAV,{duration:100}).start();}if(this.props.value&&!nextProps.value){_index.Animations.standard(this.singleLineLabelAV,{duration:100,toValue:0}).start();}}},{key:'render',value:function render()

{var _this2=this;var _props=










this.props,style=_props.style,textInputStyle=_props.textInputStyle,placeholderStyle=_props.placeholderStyle,placeholder=_props.placeholder,theme=_props.theme,disabled=_props.disabled,error=_props.error,singleLine=_props.singleLine,other=_objectWithoutProperties(_props,['style','textInputStyle','placeholderStyle','placeholder','theme','disabled','error','singleLine']);var

styles=this.styles;

return(
_react2.default.createElement(_reactNative.View,{style:[styles.base,style],__source:{fileName:_jsxFileName,lineNumber:128}},
_react2.default.createElement(_reactNative.TextInput,_extends({
ref:function ref(c){_this2._textInput=c;},
css:[
styles.textInput,
singleLine&&styles.singleLine,
disabled&&styles.disabled,
textInputStyle],

selectionColor:(0,_color2.default)(theme.colors.accent).alpha(0.87).rgbString(),
underlineColorAndroid:'transparent'},
other,{
onFocus:this.handleFocus,
onBlur:this.handleBlur,__source:{fileName:_jsxFileName,lineNumber:129}})),
_react2.default.createElement(_reactNative.Animated.Text,{
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


onPress:this.focusInput,__source:{fileName:_jsxFileName,lineNumber:142}},
placeholder),

_react2.default.createElement(AnimatedDivider,{
color:this.colorAV.interpolate({
inputRange:[0,1],
outputRange:[
theme.colors.divider,
(0,_color2.default)(theme.colors.accent).alpha(0.87).rgbString()]}),


type:disabled&&'dotted',
css:styles.divider,__source:{fileName:_jsxFileName,lineNumber:172}}),
_react2.default.createElement(_index.TextFieldError,{__source:{fileName:_jsxFileName,lineNumber:182}},error)));


}},{key:'styles',get:function get(){return styles(this.props.theme);}}]);return TextField;}(_react.Component);


TextField.propTypes={



value:_propTypes2.default.string,



placeholder:_propTypes2.default.string,



disabled:_propTypes2.default.bool,



error:_propTypes2.default.string,



singleLine:_propTypes2.default.bool,



textInputStyle:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.array,_propTypes2.default.number]),



placeholderStyle:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.array,_propTypes2.default.number]),



onChangeText:_propTypes2.default.func,


theme:_propTypes2.default.object.isRequired,




style:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.array,_propTypes2.default.number])};


TextField.defaultProps={
disabled:false,
singleLine:false};


var styles=function styles(theme){return{
base:{
alignSelf:'stretch'},


textInput:_extends({
alignSelf:'stretch',
height:32,
paddingHorizontal:0,
paddingVertical:4,
marginTop:32},

_index.Type.subheading,_defineProperty({},

_index.Breakpoints.ml,_extends({
marginTop:28},

_index.Type.subheading[_index.Breakpoints.ml])),


_reactNative.Platform.select({
web:{
outline:'none',
borderWidth:0,

boxSizing:'border-box'}})),




singleLine:_defineProperty({
marginTop:12},
_index.Breakpoints.ml,{
marginTop:8}),




disabled:_extends({
color:_index.Colors.blackHint},

_reactNative.Platform.select({
web:{
cursor:'default',
userSelect:'none'}})),




placeholder:_extends({
position:'absolute',
top:36},

_index.Type.subheading,_defineProperty({
color:_index.Colors.blackHint,
textAlign:'left',

overflow:'visible'},

_index.Breakpoints.ml,_extends({
top:28},

_index.Type.subheading[_index.Breakpoints.ml]))),



placeholderFocus:_extends({
top:12},
_index.Type.caption,_defineProperty({
color:(0,_color2.default)(theme.colors.accent).alpha(0.87).rgbString()},

_index.Breakpoints.ml,{
top:8})),



placeholderSingleLine:_defineProperty({
top:16,

opacity:1},

_index.Breakpoints.ml,{
top:12}),



placeholderSingleLineFocus:{
opacity:0},


divider:_defineProperty({
marginBottom:8},

_index.Breakpoints.ml,{
marginBottom:4})};};exports.default=





(0,_index.connectTheme)(
(0,_uranium2.default)(
TextField));