Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _uranium=require('uranium');var _uranium2=_interopRequireDefault(_uranium);
var _index=require('../../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

CardTitle=function(_Component){_inherits(CardTitle,_Component);function CardTitle(){_classCallCheck(this,CardTitle);return _possibleConstructorReturn(this,(CardTitle.__proto__||Object.getPrototypeOf(CardTitle)).apply(this,arguments));}_createClass(CardTitle,[{key:'render',value:function render()













{var _props=








this.props,children=_props.children,style=_props.style,subtitle=_props.subtitle,subtitleStyle=_props.subtitleStyle,title=_props.title,titleStyle=_props.titleStyle,other=_objectWithoutProperties(_props,['children','style','subtitle','subtitleStyle','title','titleStyle']);

return(
_react2.default.createElement(_reactNative.View,_extends({},other,{css:[styles.root,style]}),
_react2.default.createElement(_reactNative.Text,{css:[subtitle?styles.title:styles.subtitle,titleStyle]},
title),

subtitle&&_react2.default.createElement(_reactNative.Text,{css:[styles.subtitle,subtitleStyle]},
subtitle,
children)));



}}]);return CardTitle;}(_react.Component);CardTitle.propTypes={children:_react.PropTypes.node,subtitle:_react.PropTypes.node,subtitleStyle:_react.PropTypes.object,title:_react.PropTypes.node,titleStyle:_react.PropTypes.object,theme:_react.PropTypes.object.isRequired,style:_react.PropTypes.oneOfType([_react.PropTypes.object,_react.PropTypes.array])};exports.default=


(0,_index.connectTheme)((0,_uranium2.default)(CardTitle));

var styles={
root:_defineProperty({
paddingTop:24,
paddingBottom:16,
paddingRight:16,
paddingLeft:16,
position:'relative'},

_index.Breakpoints.md,{
paddingRight:24,
paddingLeft:24}),


title:{
fontSize:24},

subtitle:{
fontSize:14}};