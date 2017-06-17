Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _uranium=require('uranium');

var _index=require('../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var




BottomNavigationIcon=function(_Component){_inherits(BottomNavigationIcon,_Component);function BottomNavigationIcon(){var _ref;var _temp,_this,_ret;_classCallCheck(this,BottomNavigationIcon);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=BottomNavigationIcon.__proto__||Object.getPrototypeOf(BottomNavigationIcon)).call.apply(_ref,[this].concat(args))),_this),_this.










_activateAV=new _reactNative.Animated.Value(_this.props.active?1:0),_temp),_possibleConstructorReturn(_this,_ret);}_createClass(BottomNavigationIcon,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(next){var active=this.props.active;if(!active&&next.active){_index.Animations.standard(this._activateAV).start();}if(active&&!next.active){_index.Animations.standard(this._activateAV,{toValue:0}).start();}}},{key:'render',value:function render()

{
var AnimatedIcon=_reactNative.Animated.createAnimatedComponent(_index.Icon);
var AnimatedBody1=_reactNative.Animated.createAnimatedComponent(_index.Body1);var _props=

this.props,name=_props.name,text=_props.text,theme=_props.theme,other=_objectWithoutProperties(_props,['name','text','theme']);

delete other.active;

var styles=tStyles(theme);

return(
_react2.default.createElement(_index.TouchableRipple,_extends({
rippleCentered:true,
rippleSpread:0.3,
rippleColor:theme.colors.primary},
other),
_react2.default.createElement(_reactNative.Animated.View,{
style:[
styles.base,
(0,_uranium.animate)(styles.base,styles.active,this._activateAV)]},

_react2.default.createElement(AnimatedIcon,{
name:name,
style:(0,_uranium.animate)(styles.icon,styles.iconActive,this._activateAV)}),
_react2.default.createElement(AnimatedBody1,{
style:(0,_uranium.animate)(styles.text,styles.textActive,this._activateAV)},
text))));




}}]);return BottomNavigationIcon;}(_react.Component);


BottomNavigationIcon.propTypes={



name:_propTypes2.default.string.isRequired,



text:_propTypes2.default.string.isRequired,



active:_propTypes2.default.bool,


theme:_propTypes2.default.object.isRequired};exports.default=



(0,_index.connectTheme)(
BottomNavigationIcon);

var tStyles=function tStyles(theme){return{
base:{
minWidth:56,
maxWidth:144,
marginTop:8,
marginBottom:10,
paddingHorizontal:12,

flexGrow:1,
alignItems:'center',
justifyContent:'center'},


active:{
marginTop:6},


icon:{
color:_index.Colors.blackSecondary},


iconActive:{
color:theme.colors.primary},


text:{
color:_index.Colors.blackSecondary,
fontSize:12},


textActive:{
color:theme.colors.primary,
fontSize:14}};};