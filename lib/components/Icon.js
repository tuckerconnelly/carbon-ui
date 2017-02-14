Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');



var _reactNativePs=require('react-native-ps');var _reactNativePs2=_interopRequireDefault(_reactNativePs);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var SIZE=24;var


PlatformComponent=function(_Component){_inherits(PlatformComponent,_Component);function PlatformComponent(){_classCallCheck(this,PlatformComponent);return _possibleConstructorReturn(this,(PlatformComponent.__proto__||Object.getPrototypeOf(PlatformComponent)).apply(this,arguments));}_createClass(PlatformComponent,[{key:'render',value:function render()
{var _this2=this;
var icon=function(){
if(_reactNative.Platform.OS==='web'){
return _this2.props.web;
}else if(_this2.props.android&&_reactNative.Platform.OS==='android'){
return _this2.props.android;
}
return _this2.props.ios;
}();
return _react2.default.createElement(icon,this.props,this.props.children);
}}]);return PlatformComponent;}(_react.Component);

PlatformComponent.propTypes={
android:_react.PropTypes.node,
children:_react.PropTypes.node,
ios:_react.PropTypes.node.isRequired,
web:_react.PropTypes.node.isRequired};var























Icon=function(_Component2){_inherits(Icon,_Component2);function Icon(){_classCallCheck(this,Icon);return _possibleConstructorReturn(this,(Icon.__proto__||Object.getPrototypeOf(Icon)).apply(this,arguments));}_createClass(Icon,[{key:'render',value:function render()
{var _props=
this.props,name=_props.name,style=_props.style,children=_props.children,other=_objectWithoutProperties(_props,['name','style','children']);

return(
_react2.default.createElement(PlatformComponent,_extends({
web:'i',
ios:_reactNative.Text,

className:'material-icons',
style:[
styles.base,
{
height:SIZE,
width:SIZE,

fontSize:SIZE,
lineHeight:SIZE}].

concat(style)},
other),
name,
children));


}}]);return Icon;}(_react.Component);


Icon.propTypes={



name:_react.PropTypes.string.isRequired,

children:_react.PropTypes.node,
style:_react.PropTypes.oneOfType([_react.PropTypes.object,_react.PropTypes.array])};exports.default=


Icon;

var styles=(0,_reactNativePs2.default)({
base:{
fontFamily:'MaterialIcons-Regular'},



web:{
base:{
wordWrap:'normal',
fontFeatureSettings:'\'liga\''}}});