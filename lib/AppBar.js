Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _uranium=require('uranium');var _uranium2=_interopRequireDefault(_uranium);
var _reactNativePs=require('react-native-ps');var _reactNativePs2=_interopRequireDefault(_reactNativePs);
var _index=require('./index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}





var AppBar=function AppBar(_ref){var title=_ref.title,leftIcon=_ref.leftIcon,onLeftIconPress=_ref.onLeftIconPress,theme=_ref.theme,css=_ref.css,children=_ref.children,other=_objectWithoutProperties(_ref,['title','leftIcon','onLeftIconPress','theme','css','children']);
var tStyles=styles(theme);
return(
_react2.default.createElement(_reactNative.View,_extends({css:[tStyles.base,css]},other),
_react2.default.createElement(_index.IconToggle,{
iconName:leftIcon,
style:tStyles.icon,
iconStyle:tStyles.iconIcon,
rippleColor:_index.Colors.white,
onPress:onLeftIconPress}),
_react2.default.createElement(_index.Title,{style:tStyles.title},title),
children));


};

AppBar.propTypes={



title:_react.PropTypes.string,



leftIcon:_react.PropTypes.string,



onLeftIconPress:_react.PropTypes.func,




children:_react.PropTypes.node,
css:_react.PropTypes.object,


theme:_react.PropTypes.object};


AppBar.defaultProps={
leftIcon:'menu'};exports.default=


(0,_index.connectTheme)((0,_uranium2.default)(AppBar));

var IOS_HEADING_SIZE=20;
var styles=function styles(theme){var _extends2;return(0,_reactNativePs2.default)({
base:_extends({
height:14*_index.gu,
padding:1*_index.gu,

flexDirection:'row',
alignItems:'center',

backgroundColor:theme.primary},

_index.Shadows.dp4,(_extends2={

zIndex:100},_defineProperty(_extends2,

_index.Breakpoints.sm,{
height:12*_index.gu}),_defineProperty(_extends2,


_index.Breakpoints.ml,{
height:16*_index.gu}),_extends2)),



icon:{
marginRight:5*_index.gu},


iconIcon:{
color:_index.Colors.white},


title:{
color:_index.Colors.white},



ios:{
base:_defineProperty({
height:14*_index.gu+IOS_HEADING_SIZE,
paddingTop:IOS_HEADING_SIZE},

_index.Breakpoints.sm,{
paddingTop:4})}});};