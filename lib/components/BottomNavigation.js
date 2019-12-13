Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/components/BottomNavigation.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _index=require('../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var














































BottomNavigation=function(_Component){_inherits(BottomNavigation,_Component);function BottomNavigation(){_classCallCheck(this,BottomNavigation);return _possibleConstructorReturn(this,(BottomNavigation.__proto__||Object.getPrototypeOf(BottomNavigation)).apply(this,arguments));}_createClass(BottomNavigation,[{key:'render',value:function render()
{var
children=this.props.children;
return(
_react2.default.createElement(_reactNative.View,{style:styles.base,__source:{fileName:_jsxFileName,lineNumber:55}},
children));


}}]);return BottomNavigation;}(_react.Component);


BottomNavigation.propTypes={



children:_propTypes2.default.node};exports.default=


BottomNavigation;

var styles={
base:_extends({
position:'absolute',
left:0,
right:0,
bottom:0,

height:56,

backgroundColor:_index.Colors.white,

flexDirection:'row',
justifyContent:'space-around'},

_index.Elevation.dp8)};