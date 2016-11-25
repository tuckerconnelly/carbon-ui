Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports.












calculateLines=calculateLines;var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNativeUniversal=require('react-native-universal');var _reactNativePs=require('react-native-ps');var _reactNativePs2=_interopRequireDefault(_reactNativePs);var _uranium=require('uranium');var _omit=require('lodash/omit');var _omit2=_interopRequireDefault(_omit);var _styles=require('./styles');var _connectTheme=require('./connectTheme');var _connectTheme2=_interopRequireDefault(_connectTheme);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var PIXELS_PER_CHARACTER=7;function calculateLines(text,width){
var charactersPerLine=width/PIXELS_PER_CHARACTER||1;
return Math.round((text||'').length/charactersPerLine);
}var

Error=function(_Component){_inherits(Error,_Component);function Error(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Error);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Error.__proto__||Object.getPrototypeOf(Error)).call.apply(_ref,[this].concat(args))),_this),_this.


state={
text:_this.props.children},_this.









setWidth=function(_ref2){var width=_ref2.nativeEvent.layout.width;
_this.width=width;
},_this.

width=0,_this.
heightAV=new _reactNativeUniversal.Animated.Value(_this.props.children?1:0),_this.
opacityAV=new _reactNativeUniversal.Animated.Value(_this.props.children?1:0),_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Error,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){if(!this.props.children&&nextProps.children)return this.show(nextProps.children);if(this.props.children&&!nextProps.children)return this.hide();if(this.props.children!==nextProps.children)return this.changeTo(nextProps.children);return null;}},{key:'show',value:function show(

text){
this.setState({text:text});
_styles.Animations.staggered(this.heightAV,this.opacityAV).start();
}},{key:'hide',value:function hide()

{var _this2=this;
_styles.Animations.staggered(this.heightAV,this.opacityAV,0).start(function(){return(
_this2.setState({text:''}));});

}},{key:'changeTo',value:function changeTo(

text){var _this3=this;
_styles.Animations.standard(this.opacityAV,0,150).start(function(){
_this3.setState({text:text});
_styles.Animations.standard(_this3.opacityAV,1,450).start();
});
}},{key:'render',value:function render()



{var _props=
this.props,style=_props.style,other=_objectWithoutProperties(_props,['style']);

var estimatedLines=calculateLines(this.state.text,this.width);

return(
_react2.default.createElement(_reactNativeUniversal.Animated.Text,_extends({
style:[
this.styles.base,
style,
(0,_uranium.animate)('height',0,estimatedLines*4*_styles.gu,this.heightAV),
(0,_uranium.animate)('marginBottom',this.styles.base,this.styles.shown,this.heightAV),
(0,_uranium.animate)('opacity',this.styles.base,this.styles.shown,this.opacityAV)]},

(0,_omit2.default)(other,'children'),{
onLayout:this.setWidth}),
this.state.text));


}},{key:'styles',get:function get(){return styles(this.props.theme);}}]);return Error;}(_react.Component);


Error.propTypes={
theme:_react.PropTypes.object.isRequired,
style:_react.PropTypes.object,
children:_react.PropTypes.node};


var styles=function styles(theme){return(0,_reactNativePs2.default)({
base:_extends({
marginBottom:0},

_styles.Type.caption,{
color:theme.error,

opacity:0,
overflow:'hidden'}),


shown:_defineProperty({
marginBottom:8,

opacity:1},

_styles.Breakpoints.ml,{
marginBottom:4})});};exports.default=




(0,_connectTheme2.default)(Error);