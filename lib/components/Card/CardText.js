Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _uranium=require('uranium');var _uranium2=_interopRequireDefault(_uranium);
var _index=require('../../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}

var CardText=function CardText(_ref){var children=_ref.children,style=_ref.style,textStyle=_ref.textStyle;return(
_react2.default.createElement(_reactNative.View,{css:[styles.root,style]},
_react2.default.createElement(_reactNative.Text,{css:[styles.text,textStyle]},
children)));};



CardText.propTypes={



textStyle:_propTypes2.default.oneOfType([
_propTypes2.default.object,
_propTypes2.default.array]),




style:_propTypes2.default.oneOfType([
_propTypes2.default.object,
_propTypes2.default.array]),







children:_propTypes2.default.oneOfType([
_propTypes2.default.instanceOf(_reactNative.Text),
_propTypes2.default.string,
_propTypes2.default.arrayOf(
_propTypes2.default.oneOfType([
_propTypes2.default.instanceOf(_reactNative.Text),
_propTypes2.default.string]))]).
isRequired};exports.default=



(0,_index.connectTheme)(
(0,_uranium2.default)(
CardText));

var styles={
root:_defineProperty({
paddingTop:16,
paddingBottom:24,
paddingHorizontal:16},

_index.Breakpoints.md,{
paddingHorizontal:24}),


text:{
fontSize:14}};