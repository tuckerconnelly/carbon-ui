Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNativePs=require('react-native-ps');var _reactNativePs2=_interopRequireDefault(_reactNativePs);
var _uranium=require('uranium');var _uranium2=_interopRequireDefault(_uranium);
var _color=require('color');var _color2=_interopRequireDefault(_color);

var _connectTheme=require('./connectTheme');var _connectTheme2=_interopRequireDefault(_connectTheme);
var _Shadows=require('./styles/Shadows');var _Shadows2=_interopRequireDefault(_Shadows);
var _Grid=require('./styles/Grid');
var _Type=require('carbon-ui/lib/Type');
var _TouchableRipple=require('./TouchableRipple');var _TouchableRipple2=_interopRequireDefault(_TouchableRipple);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

var Button=function Button(_ref)









{var children=_ref.children;var disabled=_ref.disabled;var flat=_ref.flat;var raised=_ref.raised;var icon=_ref.icon;var theme=_ref.theme;var other=_objectWithoutProperties(_ref,['children','disabled','flat','raised','icon','theme']);
// Themed styles
var tStyles=styles(theme);

// Uppercase and style if the child is a string
// Otherwise it's probably an icon or image, so let it through
var formattedChildren=typeof children==='string'?
_react2.default.createElement(_Type.Body2,{style:tStyles.text},children.toUpperCase()):
children;

return(
_react2.default.createElement(_TouchableRipple2.default,_extends({
hitSlop:{top:6,right:6,bottom:6,left:6},
css:[
tStyles.base,

flat&&tStyles.flat,
raised&&tStyles.raised,
icon&&tStyles.icon,

disabled&&flat&&tStyles.flat.disabled,
disabled&&raised&&tStyles.raised.disabled,
disabled&&icon&&tStyles.icon.disabled]},

other),
formattedChildren));


};

Button.propTypes={
children:_react.PropTypes.node,
style:_react.PropTypes.object,

disabled:_react.PropTypes.bool,
flat:_react.PropTypes.bool,
raised:_react.PropTypes.bool,
icon:_react.PropTypes.bool,

theme:_react.PropTypes.object.isRequired};


var styles=function styles(theme){return(0,_reactNativePs2.default)({
base:_defineProperty({
alignItems:'center',
justifyContent:'center',
height:36,
paddingHorizontal:16,
marginHorizontal:8},

_Grid.Breakpoints.ml,{
height:32}),



text:{
lineHeight:16,
textAlign:'center'},


flat:{
color:theme.primary,

active:{
backgroundColor:theme.button.flat.pressed},


disabled:{
backgroundColor:theme.button.flat.disabled}},



raised:_extends({
minWidth:88},

_Shadows2.default.dp2,_defineProperty({

active:_extends({},
_Shadows2.default.dp4),


focus:{
backgroundColor:(0,_color2.default)(theme.primary).darken(0.12).hexString()},


disabled:{
color:theme.button.raised.disabledText,

backgroundColor:theme.button.raised.disabled}},


_Grid.Breakpoints.ml,_extends({},
_Shadows2.default.none,{

hover:_extends({},
_Shadows2.default.dp2)}))),




icon:_defineProperty({
width:40,
height:40,
paddingVertical:12,

fontSize:16,
lineHeight:16,
textAlign:'center'},

_Grid.Breakpoints.ml,{
height:40,
paddingVertical:16,

fontSize:16,
lineHeight:16}),




web:{
base:{
cursor:'pointer'}}});};exports.default=




(0,_connectTheme2.default)((0,_uranium2.default)(Button));