Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports.










calculateLines=calculateLines;var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require('react-native');var _uranium=require('uranium');var _omit=require('lodash/omit');var _omit2=_interopRequireDefault(_omit);var _index=require('../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var PIXELS_PER_CHARACTER=7;function calculateLines(text,width){
var charactersPerLine=width/PIXELS_PER_CHARACTER||1;
return Math.ceil((text||'').length/charactersPerLine);
}var





TextFieldError=function(_Component){_inherits(TextFieldError,_Component);function TextFieldError(){var _ref;var _temp,_this,_ret;_classCallCheck(this,TextFieldError);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=TextFieldError.__proto__||Object.getPrototypeOf(TextFieldError)).call.apply(_ref,[this].concat(args))),_this),_this.


state={
text:_this.props.children},_this.









_setWidth=function(_ref2){var width=_ref2.nativeEvent.layout.width;
_this.width=width;
},_this.

width=0,_this.
heightAV=new _reactNative.Animated.Value(_this.props.children?1:0),_this.
opacityAV=new _reactNative.Animated.Value(_this.props.children?1:0),_temp),_possibleConstructorReturn(_this,_ret);}_createClass(TextFieldError,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){if(!this.props.children&&nextProps.children)return this._show(nextProps.children);if(this.props.children&&!nextProps.children)return this._hide();if(this.props.children!==nextProps.children)return this._changeTo(nextProps.children);return null;}},{key:'_show',value:function _show(

text){
this.setState({text:text});
_index.Animations.standard(this.heightAV).start();
_index.Animations.standard(this.opacityAV,{delay:50}).start();
}},{key:'_hide',value:function _hide()

{var _this2=this;
_index.Animations.standard(this.heightAV,{delay:50,toValue:0}).start();
_index.Animations.standard(this.opacityAV,{toValue:0}).
start(function(){return _this2.setState({text:''});});
}},{key:'_changeTo',value:function _changeTo(

text){var _this3=this;
_index.Animations.standard(this.opacityAV,{toValue:0,duration:150}).start(function(){
_this3.setState({text:text});
_index.Animations.standard(_this3.opacityAV,{duration:450}).start();
});
}},{key:'render',value:function render()



{var _props=
this.props,style=_props.style,other=_objectWithoutProperties(_props,['style']);

var estimatedLines=calculateLines(this.state.text,this.width);

return(
_react2.default.createElement(_reactNative.Animated.Text,_extends({
style:[
this.styles.base,
style,
(0,_uranium.animate)('maxHeight',0,estimatedLines*4*_index.gu,this.heightAV),
(0,_uranium.animate)('marginBottom',this.styles.base,this.styles.shown,this.heightAV),
(0,_uranium.animate)('opacity',this.styles.base,this.styles.shown,this.opacityAV)]},

(0,_omit2.default)(other,'children','theme'),{
onLayout:this._setWidth}),
this.state.text));


}},{key:'styles',get:function get(){return styles(this.props.theme);}}]);return TextFieldError;}(_react.Component);


TextFieldError.propTypes={
style:_propTypes2.default.object,



children:_propTypes2.default.node,


theme:_propTypes2.default.object.isRequired};


var styles=function styles(theme){return{
base:_extends({
marginBottom:0},

_index.Type.caption,{
color:theme.colors.error,

opacity:0,
overflow:'hidden'}),


shown:_defineProperty({
marginBottom:8,

opacity:1},

_index.Breakpoints.ml,{
marginBottom:4})};};exports.default=





(0,_index.connectTheme)(
TextFieldError);