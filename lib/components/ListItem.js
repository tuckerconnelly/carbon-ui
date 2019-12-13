Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/components/ListItem.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _uranium=require('uranium');var _uranium2=_interopRequireDefault(_uranium);
var _omit=require('lodash/omit');var _omit2=_interopRequireDefault(_omit);
var _index=require('../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}














var HOVER_FADE_DURATION=175;
var EXPAND_DURATION=150;
var RIGHT_TEXT_WIDTH=14*_index.gu;var










ListItem=function(_Component){_inherits(ListItem,_Component);function ListItem(){var _ref;var _temp,_this,_ret;_classCallCheck(this,ListItem);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=ListItem.__proto__||Object.getPrototypeOf(ListItem)).call.apply(_ref,[this].concat(args))),_this),_this.
state={
hovered:false,
expanded:_this.props.expanded},_this.


























































_hoverAV=new _reactNative.Animated.Value(0),_this.
_expandIconAV=new _reactNative.Animated.Value(_this.props.expanded?1:0),_this.
_expandHeightAV=new _reactNative.Animated.Value(_this.props.expanded?1:0),_this.
_expandOpacityAV=new _reactNative.Animated.Value(_this.props.expanded?1:0),_temp),_possibleConstructorReturn(_this,_ret);}_createClass(ListItem,[{key:'componentWillUpdate',value:function componentWillUpdate(nextProps,nextState){var _this2=this;var expanded=this.props.expanded;var hovered=this.state.hovered;if(!hovered&&nextState.hovered){_index.Animations.standard(this._hoverAV,{duration:HOVER_FADE_DURATION}).start();}else if(hovered&&!nextState.hovered){_index.Animations.standard(this._hoverAV,{toValue:0,duration:HOVER_FADE_DURATION}).start();}if(!expanded&&nextProps.expanded){if(_reactNative.Platform.OS==='android'){this._expandIconAV.setValue(1);this._expandHeightAV.setValue(1);this._expandOpacityAV.setValue(1);this.setState({expanded:true,fullyExpanded:true});}else{this.setState({expanded:true});setTimeout(function(){return _index.Animations.standard(_this2._expandIconAV,{duration:EXPAND_DURATION}).start();});_index.Animations.standard(this._expandHeightAV,{duration:EXPAND_DURATION}).start();_index.Animations.standard(this._expandOpacityAV,{duration:EXPAND_DURATION,delay:50}).start(function(){return _this2.setState({fullyExpanded:true});});}}else if(expanded&&!nextProps.expanded){if(_reactNative.Platform.OS==='android'){this._expandIconAV.setValue(0);this._expandHeightAV.setValue(0);this._expandOpacityAV.setValue(0);this.setState({expanded:false,fullyExpanded:false});}else{this.setState({fullyExpanded:false});setTimeout(function(){return _index.Animations.standard(_this2._expandIconAV,{toValue:0,duration:EXPAND_DURATION}).start();});_index.Animations.standard(this._expandOpacityAV,{toValue:0,duration:EXPAND_DURATION}).start();_index.Animations.standard(this._expandHeightAV,{delay:50,duration:EXPAND_DURATION,toValue:0}).start(function(){return _this2.setState({expanded:false});});}}}},{key:'render',value:function render()

{var _this3=this;
var AnimatedIcon=_reactNative.Animated.createAnimatedComponent(_index.Icon);var _props=














this.props,leftIcon=_props.leftIcon,primaryText=_props.primaryText,secondaryText=_props.secondaryText,secondaryTextLines=_props.secondaryTextLines,rightText=_props.rightText,rightIcon=_props.rightIcon,active=_props.active,onPress=_props.onPress,children=_props.children,style=_props.style,theme=_props.theme,other=_objectWithoutProperties(_props,['leftIcon','primaryText','secondaryText','secondaryTextLines','rightText','rightIcon','active','onPress','children','style','theme']);

var styles=tStyles(theme);
var childrenCount=_react2.default.Children.count(children);
var otherWithoutCustomProps=(0,_omit2.default)(other,'expanded');

var thereIsSomethingOnTheRight=rightText||rightIcon||childrenCount>0;

return(
_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:126}},
_react2.default.createElement(_index.TouchableRipple,{
style:styles.touchable,
onMouseEnter:function onMouseEnter(){return _this3.setState({hovered:true});},
onMouseLeave:function onMouseLeave(){return _this3.setState({hovered:false});},
onPress:onPress,__source:{fileName:_jsxFileName,lineNumber:127}},
_react2.default.createElement(_reactNative.Animated.View,_extends({
css:styles.body,
style:[
(0,_uranium.animate)(['backgroundColor'],styles.body,styles.hovered,this._hoverAV)].
concat(style)},
otherWithoutCustomProps,{__source:{fileName:_jsxFileName,lineNumber:132}}),
leftIcon&&
_react2.default.createElement(_index.Icon,{
name:leftIcon,
style:[
styles.leftIcon,
active&&styles.active],__source:{fileName:_jsxFileName,lineNumber:139}}),


_react2.default.createElement(_index.Subheading,{
style:[
active&&styles.active,
thereIsSomethingOnTheRight&&styles.primaryTextGivenRightEl],

numberOfLines:1,
ellipsizeMode:'tail',__source:{fileName:_jsxFileName,lineNumber:146}},
primaryText),

secondaryText&&
_react2.default.createElement(_index.Body1,{
numberOfLines:secondaryTextLines,
ellipsizeMode:'tail',
style:[
styles.secondaryText,
rightIcon&&styles.secondaryTextGivenRightEl],__source:{fileName:_jsxFileName,lineNumber:156}},

secondaryText),


rightText&&
_react2.default.createElement(_index.Caption,{
numberOfLines:1,
ellipsizeMode:'tail',
css:styles.rightText,__source:{fileName:_jsxFileName,lineNumber:167}},
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
this._expandIconAV),__source:{fileName:_jsxFileName,lineNumber:175}}),


rightIcon&&
typeof rightIcon==='string'?
_react2.default.createElement(_index.Icon,{
name:rightIcon,
css:[
styles.rightIcon,
rightText&&styles.rightIconGivenRightText],__source:{fileName:_jsxFileName,lineNumber:189}}):

_react2.default.createElement(_reactNative.View,{
css:[
styles.rightIcon,
rightText&&styles.rightIconGivenRightText],__source:{fileName:_jsxFileName,lineNumber:195}},

rightIcon))),




childrenCount>0&&this.state.expanded&&
_react2.default.createElement(_reactNative.Animated.View,{
style:[
styles.nestedList,
(0,_uranium.animate)('maxHeight',0,childrenCount*72+40,this._expandHeightAV),
(0,_uranium.animate)('opacity',0,1,this._expandOpacityAV),
this.state.fullyExpanded&&{maxHeight:undefined}],__source:{fileName:_jsxFileName,lineNumber:206}},

children)));




}}]);return ListItem;}(_react.Component);


ListItem.propTypes={



primaryText:_propTypes2.default.string,



secondaryText:_propTypes2.default.string,



secondaryTextLines:_propTypes2.default.oneOf([1,2]),



leftIcon:_propTypes2.default.string,





rightIcon:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.element]),



rightText:_propTypes2.default.string,



active:_propTypes2.default.bool,



expanded:_propTypes2.default.bool,




children:_propTypes2.default.node,
style:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.array,_propTypes2.default.number]),
onPress:_propTypes2.default.func,


theme:_propTypes2.default.object.isRequired};


ListItem.defaultProps={
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