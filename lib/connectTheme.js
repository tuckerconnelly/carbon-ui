Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _invariant=require('invariant');var _invariant2=_interopRequireDefault(_invariant);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}exports.default=

function(component){
var WrappedComponent=component;

// Handle stateless components
if(!WrappedComponent.render&&!WrappedComponent.prototype.render){
WrappedComponent=function(_Component){_inherits(WrappedComponent,_Component);function WrappedComponent(){_classCallCheck(this,WrappedComponent);return _possibleConstructorReturn(this,(WrappedComponent.__proto__||Object.getPrototypeOf(WrappedComponent)).apply(this,arguments));}_createClass(WrappedComponent,[{key:'render',value:function render()
{
return component(this.props,this.context);
}}]);return WrappedComponent;}(_react.Component);

}var

ConnectTheme=function(_Component2){_inherits(ConnectTheme,_Component2);
function ConnectTheme(props,context){_classCallCheck(this,ConnectTheme);var _this2=_possibleConstructorReturn(this,(ConnectTheme.__proto__||Object.getPrototypeOf(ConnectTheme)).call(this,
props,context));
(0,_invariant2.default)(context.theme,
'Couldn\'t find the theme on the context. '+
'<ThemeProvider> needs to exist in component ancestry.');return _this2;
}_createClass(ConnectTheme,[{key:'render',value:function render()

{
return(
_react2.default.createElement(WrappedComponent,_extends({},
this.props,{
ref:'node',
theme:this.context.theme})));

}}]);return ConnectTheme;}(_react.Component);


ConnectTheme.displayName='ConnectTheme('+(
_react.Component.displayName||_react.Component.name||'Component')+')';

ConnectTheme.contextTypes=_extends({},
ConnectTheme.contextTypes,{
theme:_react.PropTypes.object});


ConnectTheme.childContextTypes=_extends({},
ConnectTheme.childContextTypes,{
theme:_react.PropTypes.object});


return ConnectTheme;
};