Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNativeUniversal=require('react-native-universal');
var _reactNativePs=require('react-native-ps');var _reactNativePs2=_interopRequireDefault(_reactNativePs);

var _index=require('../index');
var _HeaderCell=require('./HeaderCell');var _HeaderCell2=_interopRequireDefault(_HeaderCell);
var _Cell=require('./Cell');var _Cell2=_interopRequireDefault(_Cell);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

var HeaderRow=function HeaderRow(_ref){var children=_ref.children,style=_ref.style,other=_objectWithoutProperties(_ref,['children','style']);return(
_react2.default.createElement(_reactNativeUniversal.View,_extends({style:[styles.base].concat(style)},other),
_react2.default.Children.map(children,function(child,i){return(

i>0?
_react2.default.cloneElement(child,_extends({},
child.props,{
style:[styles.firstCell].concat(child.props.style)})):

child);})));};



HeaderRow.propTypes={
children:_react.PropTypes.oneOfType([
_react.PropTypes.instanceOf(_HeaderCell2.default),
_react.PropTypes.instanceOf(_Cell2.default)]).
isRequired,
style:_react.PropTypes.oneOfType([
_react.PropTypes.object,
_react.PropTypes.array])};exports.default=



HeaderRow;

var styles=(0,_reactNativePs2.default)({
base:{
flex:1,
flexDirection:'row'},


firstCell:{
paddingLeft:4*_index.gu},


web:{
base:{
display:'table-row'}}});