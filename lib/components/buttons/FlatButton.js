Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNativePs=require('react-native-ps');var _reactNativePs2=_interopRequireDefault(_reactNativePs);
var _uranium=require('uranium');var _uranium2=_interopRequireDefault(_uranium);

var _index=require('../../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}












var Button=function Button(_ref)





{var disabled=_ref.disabled,children=_ref.children,css=_ref.css,theme=_ref.theme,other=_objectWithoutProperties(_ref,['disabled','children','css','theme']);

var styles=tStyles(theme);



var formattedChildren=typeof children==='string'?
_react2.default.createElement(_index.Body2,{style:styles.text},children.toUpperCase()):
children;

return(
_react2.default.createElement(_index.TouchableRipple,_extends({
hitSlop:{top:6,right:6,bottom:6,left:6},
css:[styles.base,disabled&&styles.disabled,css]},
other),
formattedChildren));


};

Button.propTypes={



disabled:_react.PropTypes.bool,




children:_react.PropTypes.node.isRequired,
css:_react.PropTypes.object,


theme:_react.PropTypes.object.isRequired};


Button.defaultProps={
disabled:false};


var tStyles=function tStyles(theme){return(0,_reactNativePs2.default)({
base:_defineProperty({
height:36,
minWidth:88,
paddingHorizontal:16,
borderRadius:2,
marginHorizontal:8,

alignItems:'center',
justifyContent:'center'},

_index.Breakpoints.ml,{
height:32}),



text:{
lineHeight:16,
textAlign:'center',

color:theme.colors.primary},


active:{
backgroundColor:theme.colors.button.flat.pressed},


disabled:{
backgroundColor:theme.colors.button.flat.disabled}});};exports.default=




(0,_index.connectTheme)(
(0,_uranium2.default)(
Button));