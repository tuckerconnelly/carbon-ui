Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNativeUniversal=require('react-native-universal');

var _connectTheme=require('./connectTheme');var _connectTheme2=_interopRequireDefault(_connectTheme);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

var Divider=function Divider(_ref){var color=_ref.color;var type=_ref.type;var style=_ref.style;var theme=_ref.theme;var other=_objectWithoutProperties(_ref,['color','type','style','theme']);return(
_react2.default.createElement(_reactNativeUniversal.View,_extends({
style:[
styles(theme).base,
color&&{borderColor:color},
type&&{borderStyle:type},
style]},

other)));};

Divider.propTypes={
color:_react.PropTypes.string,
type:_react.PropTypes.oneOf(['solid','dotted','dashed']),
theme:_react.PropTypes.object.isRequired};


var styles=function styles(theme){return{
base:{
alignSelf:'stretch',
height:0,
borderTopWidth:1,
borderColor:theme.divider}};};exports.default=



(0,_connectTheme2.default)(Divider);