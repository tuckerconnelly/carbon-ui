Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNativeUniversal=require('react-native-universal');
var _uranium=require('uranium');var _uranium2=_interopRequireDefault(_uranium);
var _omit=require('lodash/omit');var _omit2=_interopRequireDefault(_omit);
var _index=require('./index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}











var HOVER_FADE_DURATION=175;
var EXPAND_DURATION=150;var




ListItem=function(_Component){_inherits(ListItem,_Component);function ListItem(){var _ref;var _temp,_this,_ret;_classCallCheck(this,ListItem);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=ListItem.__proto__||Object.getPrototypeOf(ListItem)).call.apply(_ref,[this].concat(args))),_this),_this.
state={hovered:false},_this.




















_hoverAV=new _reactNativeUniversal.Animated.Value(0),_this.
_expandIconAV=new _reactNativeUniversal.Animated.Value(_this.props.expanded?1:0),_this.
_expandHeightAV=new _reactNativeUniversal.Animated.Value(_this.props.expanded?1:0),_this.
_expandOpacityAV=new _reactNativeUniversal.Animated.Value(_this.props.expanded?1:0),_temp),_possibleConstructorReturn(_this,_ret);}_createClass(ListItem,[{key:'componentDidUpdate',value:function componentDidUpdate(prevProps,prevState){var expanded=this.props.expanded;var hovered=this.state.hovered;if(!prevState.hovered&&hovered){_index.Animations.standard(this._hoverAV,1,HOVER_FADE_DURATION).start();}else if(prevState.hovered&&!hovered){_index.Animations.standard(this._hoverAV,0,HOVER_FADE_DURATION).start();}if(!prevProps.expanded&&expanded){_index.Animations.standard(this._expandIconAV,1,EXPAND_DURATION).start();_index.Animations.staggered(this._expandHeightAV,this._expandOpacityAV,1,EXPAND_DURATION).start();}else if(prevProps.expanded&&!expanded){_index.Animations.standard(this._expandIconAV,0,EXPAND_DURATION).start();_index.Animations.staggered(this._expandHeightAV,this._expandOpacityAV,0,EXPAND_DURATION).start();}}},{key:'render',value:function render()

{var _this2=this;
var AnimatedIcon=_reactNativeUniversal.Animated.createAnimatedComponent(_index.Icon);var _props=

this.props,leftIcon=_props.leftIcon,primaryText=_props.primaryText,active=_props.active,onPress=_props.onPress,children=_props.children,style=_props.style,theme=_props.theme,other=_objectWithoutProperties(_props,['leftIcon','primaryText','active','onPress','children','style','theme']);

var styles=tStyles(theme);
var childrenCount=_react2.default.Children.count(children);
var otherWithoutCustomProps=(0,_omit2.default)(other,'expanded');

return(
_react2.default.createElement(_reactNativeUniversal.View,null,
_react2.default.createElement(_index.TouchableRipple,{
onMouseEnter:function onMouseEnter(){return _this2.setState({hovered:true});},
onMouseLeave:function onMouseLeave(){return _this2.setState({hovered:false});},
onPress:onPress},
_react2.default.createElement(_reactNativeUniversal.Animated.View,_extends({
css:styles.base,
style:[
(0,_uranium.animate)(['backgroundColor'],styles.base,styles.hovered,this._hoverAV)].
concat(style)},
otherWithoutCustomProps),
leftIcon&&
_react2.default.createElement(_index.Icon,{
name:leftIcon,
style:[
styles.leftIcon,
active&&styles.active]}),


_react2.default.createElement(_index.Subheading,{
style:active?styles.active:undefined,
numberOfLines:1,
ellipsizeMode:'tail'},
primaryText),

childrenCount>0&&
_react2.default.createElement(AnimatedIcon,{
name:'keyboard_arrow_down',
css:styles.rightIcon,
style:(0,_uranium.animate)(
styles.expandIconCollapsed,
styles.expandIconExpanded,
this._expandIconAV)}))),




childrenCount>0&&
_react2.default.createElement(_reactNativeUniversal.Animated.View,{
style:[
styles.nestedList,
(0,_uranium.animate)('maxHeight',0,childrenCount*styles.base.height+40,this._expandHeightAV),
(0,_uranium.animate)('opacity',0,1,this._expandOpacityAV)]},


_react2.default.Children.map(children,function(listItem){return(
_react2.default.cloneElement(listItem,_extends({},
listItem.props,{
style:_extends({},
styles.nestedListItem,
listItem.props.style)})));}))));







}}]);return ListItem;}(_react.Component);


ListItem.propTypes={



primaryText:_react.PropTypes.string,



leftIcon:_react.PropTypes.string,



active:_react.PropTypes.bool,



expanded:_react.PropTypes.bool,



children:_react.PropTypes.node,
style:_react.PropTypes.oneOfType([_react.PropTypes.object,_react.PropTypes.array]),
onPress:_react.PropTypes.func,


theme:_react.PropTypes.object.isRequired};exports.default=



(0,_index.connectTheme)(
(0,_uranium2.default)(
ListItem));

var tStyles=function tStyles(theme){return{
base:_defineProperty({
height:12*_index.gu,
paddingHorizontal:4*_index.gu,

alignItems:'center',
justifyContent:'flex-start',
flexDirection:'row',

backgroundColor:_index.Colors.white},

_index.Breakpoints.ml,{
height:10*_index.gu}),



leftIcon:{
marginRight:8*_index.gu},


rightIcon:_defineProperty({
position:'absolute',
right:4*_index.gu,
top:3*_index.gu},

_index.Breakpoints.ml,{
top:2*_index.gu}),



expandIconCollapsed:{
transform:[{rotateZ:'0deg'}]},


expandIconExpanded:{
transform:[{rotateZ:'-180deg'}]},


hovered:{
backgroundColor:_index.Colors.grey200},


active:{
color:theme.primary},


nestedList:{
overflow:'hidden'},


nestedListItem:{
paddingLeft:18*_index.gu}};};