Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _uranium=require('uranium');var _uranium2=_interopRequireDefault(_uranium);
var _index=require('../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var













































NavigationDrawer=function(_Component){_inherits(NavigationDrawer,_Component);function NavigationDrawer(){var _ref;var _temp,_this,_ret;_classCallCheck(this,NavigationDrawer);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=NavigationDrawer.__proto__||Object.getPrototypeOf(NavigationDrawer)).call.apply(_ref,[this].concat(args))),_this),_this.
state={shown:_this.props.open},_this.




















_openAV=new _reactNative.Animated.Value(_this.props.open?1:0),_temp),_possibleConstructorReturn(_this,_ret);}_createClass(NavigationDrawer,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(next){var _this2=this;var _props,open,onFinishOpening,onStartClosing;return regeneratorRuntime.async(function componentWillReceiveProps$(_context){while(1){switch(_context.prev=_context.next){case 0:_props=this.props,open=_props.open,onFinishOpening=_props.onFinishOpening,onStartClosing=_props.onStartClosing;if(!open&&next.open){this.setState({shown:true},function(){_index.Animations.entrance(_this2._openAV).start(function(){onFinishOpening();_this2.setState({fullyOpen:true});});});}if(!(open&&!next.open)){_context.next=7;break;}_context.next=5;return regeneratorRuntime.awrap(onStartClosing());case 5:this.setState({fullyOpen:false});_index.Animations.exit(this._openAV,{toValue:0}).start(function(){return _this2.setState({shown:false});});case 7:case'end':return _context.stop();}}},null,this);}},{key:'render',value:function render()

{var _props2=
this.props,style=_props2.style,menuStyle=_props2.menuStyle,onOverlayPress=_props2.onOverlayPress,children=_props2.children;

return(
_react2.default.createElement(_reactNative.View,{
style:[
styles.base,
!this.state.shown&&styles.hidden,
style]},

_react2.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:onOverlayPress},
_react2.default.createElement(_reactNative.Animated.View,{
style:[
styles.overlay,
(0,_uranium.animate)('opacity',0,0.54,this._openAV)]})),


_react2.default.createElement(_reactNative.Animated.View,{
css:styles.menu,
style:[
(0,_uranium.animate)(styles.menuClosed,styles.menuOpen,this._openAV),


this.state.fullyOpen&&styles.menuFullyOpen].
concat(menuStyle)},
children)));



}}]);return NavigationDrawer;}(_react.Component);


NavigationDrawer.propTypes={



open:_react.PropTypes.bool,
style:_react.PropTypes.oneOfType([_react.PropTypes.object,_react.PropTypes.array]),



menuStyle:_react.PropTypes.oneOfType([_react.PropTypes.object,_react.PropTypes.array]),



onOverlayPress:_react.PropTypes.func,




onFinishOpening:_react.PropTypes.func,





onStartClosing:_react.PropTypes.func,

children:_react.PropTypes.node};


NavigationDrawer.defaultProps={
open:false,
onFinishOpening:function onFinishOpening(){return 0;},
onStartClosing:function onStartClosing(){return 0;}};exports.default=


(0,_uranium2.default)(NavigationDrawer);

var styles={
base:_extends({
position:'absolute',
left:0,
top:0,
bottom:0,
right:0},

_index.Elevation.dp24,{
zIndex:2400},

_reactNative.Platform.select({
android:{
elevation:16}})),




hidden:_extends({},
_index.Elevation.dp0,{
zIndex:-1},

_reactNative.Platform.select({
android:{
elevation:undefined}})),




overlay:{
position:'absolute',
left:0,
right:0,
top:0,
bottom:0,

backgroundColor:'black'},


menu:_extends({
position:'absolute',
top:0,
bottom:0,

width:70*_index.gu,

backgroundColor:_index.Colors.white},

_index.Elevation.dp16,_defineProperty({},

_index.Breakpoints.sm,{
width:80*_index.gu})),



menuClosed:_defineProperty({
transform:[{translateX:-70*_index.gu}]},

_index.Breakpoints.sm,{
transform:[{translateX:-80*_index.gu}]}),



menuOpen:_defineProperty({
transform:[{translateX:0}]},

_index.Breakpoints.sm,{
transform:[{translateX:0}]}),



menuFullyOpen:_extends({},
_reactNative.Platform.select({
web:{
transform:null}}))};