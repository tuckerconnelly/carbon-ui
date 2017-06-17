Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');

var _index=require('../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}



















var Divider=function Divider(_ref){var color=_ref.color,style=_ref.style,theme=_ref.theme,other=_objectWithoutProperties(_ref,['color','style','theme']);return(
_react2.default.createElement(_reactNative.View,_extends({
style:[
tStyles(theme).base,
color&&{borderColor:color},
style]},

other)));};

Divider.propTypes={



color:_propTypes2.default.string,
style:_propTypes2.default.object,


theme:_propTypes2.default.object.isRequired};


var tStyles=function tStyles(theme){return{
base:{
alignSelf:'stretch',
height:0,
borderTopWidth:1,
borderColor:theme.colors.divider}};};exports.default=




(0,_index.connectTheme)(
Divider);