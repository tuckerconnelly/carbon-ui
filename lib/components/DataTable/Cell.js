Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');

var _index=require('../../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

var Cell=function Cell(_ref){var children=_ref.children,style=_ref.style,other=_objectWithoutProperties(_ref,['children','style']);
var defaultedChildren=typeof children==='string'?
_react2.default.createElement(_index.Body1,null,children):
children;
return(
_react2.default.createElement(_reactNative.View,_extends({style:[styles.base].concat(style)},other),
defaultedChildren));


};

Cell.propTypes={
children:_propTypes2.default.node,
style:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.array])};exports.default=


Cell;

var styles={
base:_extends({






paddingRight:6*_index.gu,
paddingLeft:8*_index.gu,
paddingVertical:4*_index.gu,
borderTopWidth:1,
borderTopColor:_index.Colors.grey300,

flex:1},

_reactNative.Platform.select({
web:{
display:'table-cell'}}))};