Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNativeUniversal=require('react-native-universal');
var _reactNativePs=require('react-native-ps');var _reactNativePs2=_interopRequireDefault(_reactNativePs);

var _index=require('../../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

var HeaderCell=function HeaderCell(_ref){var children=_ref.children,style=_ref.style,other=_objectWithoutProperties(_ref,['children','style']);
var defaultedChildren=typeof children==='string'?
_react2.default.createElement(_index.Body2,null,children):
children;
return(
_react2.default.createElement(_reactNativeUniversal.View,_extends({style:[styles.base].concat(style)},other),
defaultedChildren));


};

HeaderCell.propTypes={
children:_react.PropTypes.node,
style:_react.PropTypes.oneOfType([_react.PropTypes.object,_react.PropTypes.array])};exports.default=


HeaderCell;

var styles=(0,_reactNativePs2.default)({
base:{
paddingRight:6*_index.gu,
paddingLeft:8*_index.gu,
paddingVertical:4*_index.gu,

flex:1},


web:{
base:{
display:'table-cell'}}});