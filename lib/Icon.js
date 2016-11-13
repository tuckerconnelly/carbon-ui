Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNativeUniversal=require('react-native-universal');
var _reactNativePs=require('react-native-ps');var _reactNativePs2=_interopRequireDefault(_reactNativePs);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

var SIZE=24;

var Icon=function Icon(_ref){var name=_ref.name,style=_ref.style,other=_objectWithoutProperties(_ref,['name','style']);return(
_react2.default.createElement(_reactNativeUniversal.Text,_extends({
style:[
styles.base,
{
height:SIZE,
width:SIZE,

fontSize:SIZE,
lineHeight:SIZE},

style]},

other),
name));};


Icon.propTypes={
name:_react.PropTypes.string.isRequired,

style:_react.PropTypes.object};exports.default=


Icon;

var styles=(0,_reactNativePs2.default)({
base:{
fontFamily:'MaterialIcons-Regular'},



web:{
base:{
wordWrap:'normal'}}});