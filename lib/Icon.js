Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNativeUniversal=require('react-native-universal');
var _reactNativePs=require('react-native-ps');var _reactNativePs2=_interopRequireDefault(_reactNativePs);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

var Icon=function Icon(_ref){var style=_ref.style,name=_ref.name,size=_ref.size,other=_objectWithoutProperties(_ref,['style','name','size']);return(
_react2.default.createElement(_reactNativeUniversal.Text,_extends({
style:[
styles.base,
{
height:size,
width:size,

fontSize:size,
lineHeight:size},

style]},

other),
name));};


Icon.propTypes={
name:_react.PropTypes.string.isRequired,
size:_react.PropTypes.number.isRequired,

style:_react.PropTypes.object};exports.default=


Icon;

var styles=(0,_reactNativePs2.default)({
base:{
fontFamily:'MaterialIcons-Regular'},



web:{
base:{
wordWrap:'normal'}}});