Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNativeUniversal=require('react-native-universal');
var _uranium=require('uranium');var _uranium2=_interopRequireDefault(_uranium);

var _index=require('../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

var Paper=function Paper(_ref){var style=_ref.style,css=_ref.css,children=_ref.children,elevation=_ref.elevation,other=_objectWithoutProperties(_ref,['style','css','children','elevation']);return(
_react2.default.createElement(_reactNativeUniversal.View,_extends({
css:[
styles.base,_extends({},
_index.Elevation['dp'+elevation])].
concat(style,css)},
other),
children));};


Paper.propTypes={
children:_react.PropTypes.node,
style:_react.PropTypes.oneOfType([
_react.PropTypes.object,
_react.PropTypes.array]),

css:_react.PropTypes.object,

elevation:_react.PropTypes.number};


Paper.defaultProps={
elevation:2};exports.default=


(0,_uranium2.default)(Paper);


var styles={
base:{
padding:16,
marginBottom:16,

backgroundColor:'white'}};