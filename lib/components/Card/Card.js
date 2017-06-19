Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _uranium=require('uranium');var _uranium2=_interopRequireDefault(_uranium);
var _index=require('../../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}




























var Card=function Card(_ref){var style=_ref.style,children=_ref.children,other=_objectWithoutProperties(_ref,['style','children']);return(
_react2.default.createElement(_reactNative.View,_extends({
css:[
styles.root,
style]},

other),
children));};


Card.propTypes={



style:_propTypes2.default.oneOfType([
_propTypes2.default.object,
_propTypes2.default.array]),




children:_propTypes2.default.node,

theme:_propTypes2.default.object.isRequired};exports.default=



(0,_index.connectTheme)(
(0,_uranium2.default)(
Card));

var styles={
root:_extends({
borderRadius:2,
marginVertical:4,
marginHorizontal:8,

flexDirection:'column',

backgroundColor:_index.Colors.white},


_index.Elevation.dp2,_defineProperty({},

_index.Breakpoints.md,_index.Elevation.dp0))};