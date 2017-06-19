Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _uranium=require('uranium');var _uranium2=_interopRequireDefault(_uranium);
var _omit=require('lodash/omit');var _omit2=_interopRequireDefault(_omit);
var _index=require('../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}












var ELEVATE_DURATION=175;var

















AppBar=function(_Component){_inherits(AppBar,_Component);function AppBar(){var _ref;var _temp,_this,_ret;_classCallCheck(this,AppBar);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=AppBar.__proto__||Object.getPrototypeOf(AppBar)).call.apply(_ref,[this].concat(args))),_this),_this.












_elevateAV=new _reactNative.Animated.Value(_this.props.elevated|0),_temp),_possibleConstructorReturn(_this,_ret);}_createClass(AppBar,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(next){var elevated=this.props.elevated;if(!elevated&&next.elevated){_index.Animations.standard(this._elevateAV,{duration:ELEVATE_DURATION}).start();}if(elevated&&!next.elevated){_index.Animations.standard(this._elevateAV,{toValue:0,duration:ELEVATE_DURATION}).start();}}},{key:'render',value:function render()

{var _props=
this.props,title=_props.title,navIcon=_props.navIcon,onNavIconPress=_props.onNavIconPress,theme=_props.theme,children=_props.children,other=_objectWithoutProperties(_props,['title','navIcon','onNavIconPress','theme','children']);

var otherWithoutAppBarProps=(0,_omit2.default)(other,
'elevated');


var styles=tStyles(theme);

return(
_react2.default.createElement(_reactNative.Animated.View,_extends({
css:[
styles.base,
!navIcon&&styles.baseWithoutNavIcon,
(0,_uranium.animate)(_index.Elevation.dp0,_index.Elevation.dp4,this._elevateAV)]},

otherWithoutAppBarProps),
navIcon&&
_react2.default.createElement(_index.IconToggle,{
name:navIcon,
style:styles.icon,
iconStyle:styles.iconIcon,
rippleColor:_index.Colors.white,
onPress:onNavIconPress}),

_react2.default.createElement(_reactNative.View,{style:styles.title},
typeof title==='string'?
_react2.default.createElement(_index.Title,{style:styles.titleText},title):
title),


children));


}}]);return AppBar;}(_react.Component);


AppBar.propTypes={



title:_propTypes2.default.node,



navIcon:_propTypes2.default.string,



onNavIconPress:_propTypes2.default.func,



elevated:_propTypes2.default.bool,




children:_propTypes2.default.node,
css:_propTypes2.default.object,


theme:_propTypes2.default.object};


AppBar.defaultProps={
navIcon:'menu',
elevated:true};exports.default=



(0,_index.connectTheme)(
(0,_uranium2.default)(
AppBar));

var IOS_HEADING_SIZE=20;
var tStyles=function tStyles(theme){var _extends2;return{
base:_extends({
height:14*_index.gu,
padding:1*_index.gu,

flexDirection:'row',
alignItems:'center',

backgroundColor:theme.colors.primary},

_index.Elevation.dp4,(_extends2={

zIndex:100},_defineProperty(_extends2,

_index.Breakpoints.sm,{
height:12*_index.gu}),_defineProperty(_extends2,


_index.Breakpoints.ml,{
height:16*_index.gu}),_extends2),


_reactNative.Platform.select({
ios:_defineProperty({

height:14*_index.gu+IOS_HEADING_SIZE,
paddingTop:IOS_HEADING_SIZE},

_index.Breakpoints.sm,{
paddingTop:4})})),





baseWithoutNavIcon:{
paddingLeft:4*_index.gu},


icon:{
marginRight:8*_index.gu},


iconIcon:{
color:_index.Colors.white},


title:{
flex:1},


titleText:{
color:_index.Colors.white}};};