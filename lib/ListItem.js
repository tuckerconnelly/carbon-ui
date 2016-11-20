Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNativeUniversal=require('react-native-universal');
var _uranium=require('uranium');var _uranium2=_interopRequireDefault(_uranium);
var _index=require('./index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}











var HOVER_FADE_DURATION=175;var




ListItem=function(_Component){_inherits(ListItem,_Component);function ListItem(){var _ref;var _temp,_this,_ret;_classCallCheck(this,ListItem);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=ListItem.__proto__||Object.getPrototypeOf(ListItem)).call.apply(_ref,[this].concat(args))),_this),_this.
state={hovered:false},_this.











_hoverAV=new _reactNativeUniversal.Animated.Value(0),_temp),_possibleConstructorReturn(_this,_ret);}_createClass(ListItem,[{key:'componentDidUpdate',value:function componentDidUpdate(_,prevState){var hovered=this.state.hovered;if(!prevState.hovered&&hovered){_index.Animations.standard(this._hoverAV,1,HOVER_FADE_DURATION).start();}else if(prevState.hovered&&!hovered){_index.Animations.standard(this._hoverAV,0,HOVER_FADE_DURATION).start();}}},{key:'render',value:function render()

{var _this2=this;var _props=
this.props,leftIcon=_props.leftIcon,primaryText=_props.primaryText,active=_props.active,theme=_props.theme,other=_objectWithoutProperties(_props,['leftIcon','primaryText','active','theme']);

var tStyles=styles(theme);

return(
_react2.default.createElement(_index.TouchableRipple,_extends({
onMouseEnter:function onMouseEnter(){return _this2.setState({hovered:true});},
onMouseLeave:function onMouseLeave(){return _this2.setState({hovered:false});}},
other),
_react2.default.createElement(_reactNativeUniversal.Animated.View,{
css:tStyles.base,
style:(0,_uranium.animate)(['backgroundColor'],tStyles.base,tStyles.hovered,this._hoverAV)},
leftIcon&&
_react2.default.createElement(_index.Icon,{
name:leftIcon,
style:[
tStyles.icon,
active&&tStyles.active]}),


_react2.default.createElement(_index.Subheading,{
style:active?tStyles.active:undefined,
numberOfLines:1,
ellipsizeMode:'tail'},
primaryText))));




}}]);return ListItem;}(_react.Component);


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
paddingHorizontal:4*_index.gu,

backgroundColor:_index.Colors.white},

_index.Breakpoints.ml,{
height:10*_index.gu}),



icon:{
marginRight:8*_index.gu},


hovered:{
backgroundColor:_index.Colors.grey200},


active:{
color:theme.primary}};};