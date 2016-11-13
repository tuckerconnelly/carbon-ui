Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=_interopRequireDefault(_react);
var _uranium=require('uranium');var _uranium2=_interopRequireDefault(_uranium);
var _index=require('./index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}





var AppBar=function AppBar(_ref){var title=_ref.title,leftIcon=_ref.leftIcon,onLeftIconPress=_ref.onLeftIconPress,theme=_ref.theme,children=_ref.children;
var tStyles=styles(theme);
return(
_react2.default.createElement(_index.Paper,{
elevation:4,
style:tStyles.base},
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


theme:_react.PropTypes.object};


AppBar.defaultProps={
leftIcon:'menu'};exports.default=


(0,_index.connectTheme)((0,_uranium2.default)(AppBar));

var styles=function styles(theme){return{
base:{
height:14*_index.gu,
paddingHorizontal:4*_index.gu,
paddingVertical:1*_index.gu,

flexDirection:'row',
alignItems:'center',

backgroundColor:theme.primary},


icon:{
marginRight:5*_index.gu},


iconIcon:{
color:_index.Colors.white},


title:{
color:_index.Colors.white}};};