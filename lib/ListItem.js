Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=_interopRequireDefault(_react);
var _uranium=require('uranium');var _uranium2=_interopRequireDefault(_uranium);
var _index=require('./index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}




var ListItem=function ListItem(_ref){var leftIcon=_ref.leftIcon,primaryText=_ref.primaryText,active=_ref.active,theme=_ref.theme;
var tStyles=styles(theme);
return(
_react2.default.createElement(_index.TouchableRipple,{css:tStyles.base},
leftIcon&&
_react2.default.createElement(_index.Icon,{
name:leftIcon,
style:[
tStyles.icon,
active&&tStyles.active]}),


_react2.default.createElement(_index.Subheading,{
style:active&&tStyles.active},
primaryText)));



};

ListItem.propTypes={



primaryText:_react.PropTypes.string,



leftIcon:_react.PropTypes.string,



active:_react.PropTypes.bool,


theme:_react.PropTypes.object.isRequired};exports.default=



(0,_index.connectTheme)(
(0,_uranium2.default)(
ListItem));

var styles=function styles(theme){return{
base:_defineProperty({
justifyContent:'center',

height:12*_index.gu,
paddingLeft:4*_index.gu},

_index.Breakpoints.ml,{
height:10*_index.gu}),



icon:{
marginRight:8*_index.gu},


active:{
color:theme.primary}};};