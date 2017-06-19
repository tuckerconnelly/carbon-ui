Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');

var _index=require('../../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

var HeaderRow=function HeaderRow(_ref){var children=_ref.children,style=_ref.style,other=_objectWithoutProperties(_ref,['children','style']);return(
_react2.default.createElement(_reactNative.View,_extends({style:[styles.base].concat(style)},other),
_react2.default.Children.map(children,function(child,i){return(

i===0?
_react2.default.cloneElement(child,_extends({},
child.props,{
style:[styles.firstCell].concat(child.props.style)})):

child);})));};



HeaderRow.propTypes={



children:_propTypes2.default.node.isRequired,
style:_propTypes2.default.oneOfType([
_propTypes2.default.object,
_propTypes2.default.array])};exports.default=



HeaderRow;

var styles={
base:_extends({
flex:1,
flexDirection:'row'},

_reactNative.Platform.select({
web:{
display:'table-row'}})),




firstCell:{
paddingLeft:6*_index.gu}};