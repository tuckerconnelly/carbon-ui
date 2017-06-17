Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _uranium=require('uranium');var _uranium2=_interopRequireDefault(_uranium);
var _index=require('../../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

var CardTitle=function CardTitle(_ref){var
children=_ref.children,
style=_ref.style,
subtitle=_ref.subtitle,
subtitleStyle=_ref.subtitleStyle,
title=_ref.title,
titleStyle=_ref.titleStyle,
other=_objectWithoutProperties(_ref,['children','style','subtitle','subtitleStyle','title','titleStyle']);return(

_react2.default.createElement(_reactNative.View,_extends({},other,{css:[styles.root,style]}),
_react2.default.createElement(_reactNative.Text,{css:[subtitle?styles.title:styles.subtitle,titleStyle]},
title),

subtitle&&_react2.default.createElement(_reactNative.Text,{css:[styles.subtitle,subtitleStyle]},
subtitle),

children));};


CardTitle.propTypes={



title:_propTypes2.default.node,



titleStyle:_propTypes2.default.object,



subtitle:_propTypes2.default.node,



subtitleStyle:_propTypes2.default.object,



style:_propTypes2.default.oneOfType([
_propTypes2.default.object,
_propTypes2.default.array]),




children:_propTypes2.default.node,

theme:_propTypes2.default.object.isRequired};exports.default=



(0,_index.connectTheme)(
(0,_uranium2.default)(
CardTitle));

var styles={
root:_defineProperty({
position:'relative',

paddingTop:24,
paddingBottom:16,
paddingHorizontal:16},

_index.Breakpoints.md,{
paddingHorizontal:24}),


title:{
fontSize:24},

subtitle:{
fontSize:14}};