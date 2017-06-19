Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _index=require('../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}exports.default=

function(component){
var WrappedComponent=component;


if(!WrappedComponent.render&&!WrappedComponent.prototype.render){
WrappedComponent=function(_Component){_inherits(WrappedComponent,_Component);function WrappedComponent(){_classCallCheck(this,WrappedComponent);return _possibleConstructorReturn(this,(WrappedComponent.__proto__||Object.getPrototypeOf(WrappedComponent)).apply(this,arguments));}_createClass(WrappedComponent,[{key:'render',value:function render()
{
return component(this.props,this.context);
}}]);return WrappedComponent;}(_react.Component);

}var

ConnectTheme=function(_Component2){_inherits(ConnectTheme,_Component2);function ConnectTheme(){var _ref;var _temp,_this2,_ret;_classCallCheck(this,ConnectTheme);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this2=_possibleConstructorReturn(this,(_ref=ConnectTheme.__proto__||Object.getPrototypeOf(ConnectTheme)).call.apply(_ref,[this].concat(args))),_this2),_this2.
_node=null,_temp),_possibleConstructorReturn(_this2,_ret);}_createClass(ConnectTheme,[{key:'render',value:function render()

{var _this3=this;
return(
_react2.default.createElement(WrappedComponent,_extends({},
this.props,{
ref:function ref(c){_this3._node=c;},
theme:this.context.theme||_index.themes.light})));

}}]);return ConnectTheme;}(_react.Component);


ConnectTheme.displayName='ConnectTheme('+(
_react.Component.displayName||_react.Component.name||'Component')+')';

ConnectTheme.contextTypes=_extends({},
ConnectTheme.contextTypes,{
theme:_propTypes2.default.object});


ConnectTheme.childContextTypes=_extends({},
ConnectTheme.childContextTypes,{
theme:_propTypes2.default.object});


return ConnectTheme;
};