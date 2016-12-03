Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNativeUniversal=require('react-native-universal');
var _uranium=require('uranium');var _uranium2=_interopRequireDefault(_uranium);
var _omit=require('lodash/omit');var _omit2=_interopRequireDefault(_omit);
var _get=require('lodash/get');var _get2=_interopRequireDefault(_get);
var _index=require('../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}














var HOVER_FADE_DURATION=175;
var EXPAND_DURATION=150;
var RIGHT_TEXT_WIDTH=14*_index.gu;var








ListItem=function(_Component){_inherits(ListItem,_Component);function ListItem(){var _ref;var _temp,_this,_ret;_classCallCheck(this,ListItem);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=ListItem.__proto__||Object.getPrototypeOf(ListItem)).call.apply(_ref,[this].concat(args))),_this),_this.
state={
hovered:false,
expanded:_this.props.expanded},_this.



















































_hoverAV=new _reactNativeUniversal.Animated.Value(0),_this.
_expandIconAV=new _reactNativeUniversal.Animated.Value(_this.props.expanded?1:0),_this.
_expandHeightAV=new _reactNativeUniversal.Animated.Value(_this.props.expanded?1:0),_this.
_expandOpacityAV=new _reactNativeUniversal.Animated.Value(_this.props.expanded?1:0),_temp),_possibleConstructorReturn(_this,_ret);}_createClass(ListItem,[{key:'componentWillUpdate',value:function componentWillUpdate(nextProps,nextState){var _this2=this;var expanded=this.props.expanded;var hovered=this.state.hovered;if(!hovered&&nextState.hovered){_index.Animations.standard(this._hoverAV,{duration:HOVER_FADE_DURATION}).start();}else if(hovered&&!nextState.hovered){_index.Animations.standard(this._hoverAV,{toValue:0,duration:HOVER_FADE_DURATION}).start();}if(!expanded&&nextProps.expanded){if(_reactNativeUniversal.Platform.OS==='android'){this._expandIconAV.setValue(1);this._expandHeightAV.setValue(1);this._expandOpacityAV.setValue(1);}else{setTimeout(function(){return _index.Animations.standard(_this2._expandIconAV,{duration:EXPAND_DURATION}).start();});_index.Animations.standard(this._expandHeightAV,{duration:EXPAND_DURATION}).start();_index.Animations.standard(this._expandOpacityAV,{duration:EXPAND_DURATION,delay:50}).start(function(){return _this2.setState({expanded:true});});}}else if(expanded&&!nextProps.expanded){this.setState({expanded:false});if(_reactNativeUniversal.Platform.OS==='android'){this._expandIconAV.setValue(0);this._expandHeightAV.setValue(0);this._expandOpacityAV.setValue(0);}else{setTimeout(function(){return _index.Animations.standard(_this2._expandIconAV,{toValue:0,duration:EXPAND_DURATION}).start();});_index.Animations.standard(this._expandHeightAV,{toValue:0,duration:EXPAND_DURATION,delay:50}).start();_index.Animations.standard(this._expandOpacityAV,{toValue:0,duration:EXPAND_DURATION}).start();}}}},{key:'render',value:function render()

{var _this3=this;
var AnimatedIcon=_reactNativeUniversal.Animated.createAnimatedComponent(_index.Icon);var _props=















this.props,leftIcon=_props.leftIcon,primaryText=_props.primaryText,secondaryText=_props.secondaryText,secondaryTextLines=_props.secondaryTextLines,rightText=_props.rightText,rightIcon=_props.rightIcon,active=_props.active,nestingDepth=_props.nestingDepth,onPress=_props.onPress,children=_props.children,style=_props.style,theme=_props.theme,other=_objectWithoutProperties(_props,['leftIcon','primaryText','secondaryText','secondaryTextLines','rightText','rightIcon','active','nestingDepth','onPress','children','style','theme']);

var styles=tStyles(theme);
var childrenCount=_react2.default.Children.count(children);
var otherWithoutCustomProps=(0,_omit2.default)(other,'expanded');

var thereIsSomethingOnTheRight=rightText||rightIcon||childrenCount>0;

return(
_react2.default.createElement(_reactNativeUniversal.View,null,
_react2.default.createElement(_index.TouchableRipple,{
style:styles.touchable,
onMouseEnter:function onMouseEnter(){return _this3.setState({hovered:true});},
onMouseLeave:function onMouseLeave(){return _this3.setState({hovered:false});},
onPress:onPress},
_react2.default.createElement(_reactNativeUniversal.Animated.View,_extends({
css:styles.body,
style:[
(0,_uranium.animate)(['backgroundColor'],styles.body,styles.hovered,this._hoverAV)].
concat(style)},
otherWithoutCustomProps),
leftIcon&&
_react2.default.createElement(_index.Icon,{
name:leftIcon,
style:[
styles.leftIcon,
active&&styles.active]}),


_react2.default.createElement(_index.Subheading,{
style:[
active&&styles.active,
thereIsSomethingOnTheRight&&styles.primaryTextGivenRightEl],

numberOfLines:1,
ellipsizeMode:'tail'},
primaryText),

secondaryText&&
_react2.default.createElement(_index.Body1,{
numberOfLines:secondaryTextLines,
ellipsizeMode:'tail',
style:[
styles.secondaryText,
rightIcon&&styles.secondaryTextGivenRightEl]},

secondaryText),


rightText&&
_react2.default.createElement(_index.Caption,{
numberOfLines:1,
ellipsizeMode:'tail',
css:styles.rightText},
rightText),


childrenCount>0&&!rightIcon&&
_react2.default.createElement(AnimatedIcon,{
name:'keyboard_arrow_down',
css:[
styles.rightIcon,
rightText&&styles.rightIconGivenRightText],

style:(0,_uranium.animate)(
styles.expandIconCollapsed,
styles.expandIconExpanded,
this._expandIconAV)}),


rightIcon&&
typeof rightIcon==='string'?
_react2.default.createElement(_index.Icon,{
name:rightIcon,
css:[
styles.rightIcon,
rightText&&styles.rightIconGivenRightText]}):

_react2.default.createElement(_reactNativeUniversal.View,{
css:[
styles.rightIcon,
rightText&&styles.rightIconGivenRightText]},

rightIcon))),




childrenCount>0&&
_react2.default.createElement(_reactNativeUniversal.Animated.View,{
style:[
styles.nestedList,
(0,_uranium.animate)('maxHeight',0,childrenCount*72+40,this._expandHeightAV),
(0,_uranium.animate)('opacity',0,1,this._expandOpacityAV),
this.state.expanded&&{maxHeight:undefined}]},


_react2.default.Children.map(children,function(listItem){return(
_react2.default.cloneElement(listItem,_extends({},
listItem.props,{
style:_extends({
paddingLeft:(0,_get2.default)(style,'paddingLeft',0)+nestingDepth},
listItem.props.style)})));}))));







}}]);return ListItem;}(_react.Component);


ListItem.propTypes={



primaryText:_react.PropTypes.string,



secondaryText:_react.PropTypes.string,



secondaryTextLines:_react.PropTypes.oneOf([1,2]),



leftIcon:_react.PropTypes.string,





rightIcon:_react.PropTypes.oneOfType([_react.PropTypes.string,_react.PropTypes.element]),



rightText:_react.PropTypes.string,



active:_react.PropTypes.bool,




nestingDepth:_react.PropTypes.number,



expanded:_react.PropTypes.bool,




children:_react.PropTypes.node,
style:_react.PropTypes.oneOfType([_react.PropTypes.object,_react.PropTypes.array]),
onPress:_react.PropTypes.func,


theme:_react.PropTypes.object.isRequired};


ListItem.defaultProps={
nestingDepth:18*_index.gu,
secondaryTextLines:1};exports.default=



(0,_index.connectTheme)(
(0,_uranium2.default)(
ListItem));

var tStyles=function tStyles(theme){return{
touchable:{
backgroundColor:_index.Colors.white},


body:_defineProperty({
paddingVertical:3*_index.gu,
paddingHorizontal:4*_index.gu,

alignItems:'flex-start',
justifyContent:'center',
flexDirection:'column'},

_index.Breakpoints.ml,{
paddingVertical:2*_index.gu}),



secondaryText:{
color:_index.Colors.blackSecondary,
lineHeight:6*_index.gu},


leftIcon:{
marginRight:8*_index.gu},


primaryTextGivenRightEl:{
marginRight:RIGHT_TEXT_WIDTH},


secondaryTextGivenRightEl:{
marginRight:RIGHT_TEXT_WIDTH},


rightIcon:_defineProperty({
position:'absolute',
right:4*_index.gu,
top:3*_index.gu},

_index.Breakpoints.ml,{
top:2*_index.gu}),



rightIconGivenRightText:_defineProperty({
top:9*_index.gu},

_index.Breakpoints.ml,{
top:8*_index.gu}),



rightText:_defineProperty({
position:'absolute',
right:4*_index.gu,
top:3*_index.gu,

width:RIGHT_TEXT_WIDTH,
textAlign:'right'},

_index.Breakpoints.ml,{
top:2*_index.gu}),



expandIconCollapsed:{
transform:[{rotate:'0deg'}]},


expandIconExpanded:{
transform:[{rotate:'-180deg'}]},


hovered:{
backgroundColor:_index.Colors.grey200},


active:{
color:theme.colors.primary},


nestedList:{
overflow:'hidden'}};};