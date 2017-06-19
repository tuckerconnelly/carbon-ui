Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');

var _index=require('../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var














Paper=function(_Component){_inherits(Paper,_Component);function Paper(){_classCallCheck(this,Paper);return _possibleConstructorReturn(this,(Paper.__proto__||Object.getPrototypeOf(Paper)).apply(this,arguments));}_createClass(Paper,[{key:'render',value:function render()
{var _props=
this.props,style=_props.style,children=_props.children,elevation=_props.elevation,other=_objectWithoutProperties(_props,['style','children','elevation']);
return(
_react2.default.createElement(_reactNative.View,_extends({
style:[
styles.base,
_index.Elevation['dp'+elevation]].
concat(style)},
other),
children));


}}]);return Paper;}(_react.Component);


Paper.propTypes={



elevation:_propTypes2.default.number,

children:_propTypes2.default.node,
style:_propTypes2.default.oneOfType([
_propTypes2.default.object,
_propTypes2.default.array])};



Paper.defaultProps={
elevation:2};exports.default=


Paper;


var styles={
base:{
borderRadius:2,

backgroundColor:_index.Colors.white}};