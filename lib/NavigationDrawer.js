Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNativeUniversal=require('react-native-universal');
var _uranium=require('uranium');var _uranium2=_interopRequireDefault(_uranium);
var _index=require('./index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var





NavigationDrawer=function(_Component){_inherits(NavigationDrawer,_Component);function NavigationDrawer(){var _ref;var _temp,_this,_ret;_classCallCheck(this,NavigationDrawer);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=NavigationDrawer.__proto__||Object.getPrototypeOf(NavigationDrawer)).call.apply(_ref,[this].concat(args))),_this),_this.
state={shown:_this.props.open},_this.
















_openAV=new _reactNativeUniversal.Animated.Value(_this.props.open),_temp),_possibleConstructorReturn(_this,_ret);}_createClass(NavigationDrawer,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(next){var _this2=this;var open=this.props.open;if(!open&&next.open){this.setState({shown:true},function(){_index.Animations.entrance(_this2._openAV).start();});}if(open&&!next.open){_index.Animations.exit(this._openAV,0).start(function(){_this2.setState({shown:false});});}}},{key:'render',value:function render()

{var _props=
this.props,onOverlayPress=_props.onOverlayPress,children=_props.children;

if(!this.state.shown)return _react2.default.createElement(_reactNativeUniversal.View,null);

return(
_react2.default.createElement(_reactNativeUniversal.View,{style:styles.base},
_react2.default.createElement(_reactNativeUniversal.TouchableWithoutFeedback,{onPress:onOverlayPress},
_react2.default.createElement(_reactNativeUniversal.Animated.View,{
style:[
styles.overlay,
(0,_uranium.animate)('backgroundColor',_index.Colors.blackTransparent,_index.Colors.blackSecondary,this._openAV)]})),


_react2.default.createElement(_reactNativeUniversal.Animated.View,{
css:[
styles.menu,
(0,_uranium.animate)(styles.menuClosed,styles.menuOpen,this._openAV)]},

children)));



}}]);return NavigationDrawer;}(_react.Component);


NavigationDrawer.propTypes={




open:_react.PropTypes.bool,



onOverlayPress:_react.PropTypes.func,

children:_react.PropTypes.node};


NavigationDrawer.defaultProps={
open:false};exports.default=


(0,_uranium2.default)(NavigationDrawer);

var styles={
base:{
position:'absolute',
left:0,
right:0,
top:0,
bottom:0,

zIndex:200},


overlay:{
position:'absolute',
left:0,
right:0,
top:0,
bottom:0},


menu:_extends({
position:'absolute',
top:0,
bottom:0,

width:70*_index.gu,

backgroundColor:_index.Colors.white},

_index.Shadows.dp16,_defineProperty({},

_index.Breakpoints.sm,{
width:80*_index.gu})),



menuClosed:_defineProperty({
left:-70*_index.gu},

_index.Breakpoints.sm,{
left:-80*_index.gu}),



menuOpen:_defineProperty({
left:0},

_index.Breakpoints.sm,{
left:0})};