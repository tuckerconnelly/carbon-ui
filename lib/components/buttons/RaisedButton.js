Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/components/buttons/RaisedButton.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _uranium=require('uranium');var _uranium2=_interopRequireDefault(_uranium);
var _color=require('color');var _color2=_interopRequireDefault(_color);

var _index=require('../../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}



























var RaisedButton=function RaisedButton(_ref)







{var disabled=_ref.disabled,children=_ref.children,textStyle=_ref.textStyle,theme=_ref.theme,other=_objectWithoutProperties(_ref,['disabled','children','textStyle','theme']);

var styles=tStyles(theme);



var formattedChildren=typeof children==='string'?
_react2.default.createElement(_index.Body2,{
style:[
styles.text,
disabled&&styles.disabledText,
textStyle],__source:{fileName:_jsxFileName,lineNumber:49}},

children.toUpperCase()):

children;

return(
_react2.default.createElement(_index.TouchableRipple,_extends({
hitSlop:{top:6,right:6,bottom:6,left:6},
css:[styles.base,disabled&&styles.disabled],
rippleColor:_index.Colors.white,
disabled:disabled},
other,{__source:{fileName:_jsxFileName,lineNumber:60}}),
formattedChildren));


};

RaisedButton.propTypes={



disabled:_propTypes2.default.bool,




children:_propTypes2.default.node,



textStyle:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.array,_propTypes2.default.number]),


theme:_propTypes2.default.object.isRequired};


var tStyles=function tStyles(theme){return{
base:_extends({
height:36,
minWidth:88,
paddingHorizontal:16,
borderRadius:2,
marginHorizontal:8,

alignItems:'center',
justifyContent:'center',

backgroundColor:theme.colors.primary},

_index.Elevation.dp2,_defineProperty({},

_index.Breakpoints.ml,_extends({
height:32},

_index.Elevation.none))),



text:{
color:_index.Colors.whitePrimary,
lineHeight:16,
textAlign:'center'},


pressed:_extends({},
_index.Elevation.dp4),


disabled:{
backgroundColor:theme.colors.button.raised.disabled},


disabledText:{
color:theme.colors.button.raised.disabledText},


focused:{
backgroundColor:(0,_color2.default)(theme.colors.primary).darken(0.12).hexString()},


hovered:_extends({},
_index.Elevation.dp2)};};exports.default=




(0,_index.connectTheme)(
(0,_uranium2.default)(
RaisedButton));