Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');

var _HeaderRow=require('./HeaderRow');var _HeaderRow2=_interopRequireDefault(_HeaderRow);
var _HeaderCell=require('./HeaderCell');var _HeaderCell2=_interopRequireDefault(_HeaderCell);
var _Row=require('./Row');var _Row2=_interopRequireDefault(_Row);
var _Cell=require('./Cell');var _Cell2=_interopRequireDefault(_Cell);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}





































var DataTable=function DataTable(_ref){var children=_ref.children,style=_ref.style,other=_objectWithoutProperties(_ref,['children','style']);return(
_react2.default.createElement(_reactNative.View,_extends({style:[styles.base].concat(style)},other),
_react2.default.createElement(_reactNative.View,{style:styles.table},
children)));};



DataTable.propTypes={



children:_propTypes2.default.node.isRequired,
style:_propTypes2.default.oneOfType([
_propTypes2.default.object,
_propTypes2.default.array])};exports.default=



DataTable;

DataTable.HeaderRow=_HeaderRow2.default;
DataTable.HeaderCell=_HeaderCell2.default;
DataTable.Row=_Row2.default;
DataTable.Cell=_Cell2.default;

var styles={
base:_extends({
flex:1},

_reactNative.Platform.select({
web:{
width:'100%',
height:'100%',

overflow:'auto'}})),




table:_extends({
flex:1},

_reactNative.Platform.select({
web:{
width:'100%',
height:'100%',

display:'table'}}))};