Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _uranium=require('uranium');
var _index=require('../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var




ExpansionPanel=function(_Component){_inherits(ExpansionPanel,_Component);function ExpansionPanel(){var _ref;var _temp,_this,_ret;_classCallCheck(this,ExpansionPanel);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=ExpansionPanel.__proto__||Object.getPrototypeOf(ExpansionPanel)).call.apply(_ref,[this].concat(args))),_this),_this.
state={expanded:false},_this.


























_labelOpacityAV=new _reactNative.Animated.Value(_this.props.expanded?0:1),_this.
_opacityAV=new _reactNative.Animated.Value(_this.props.expanded?1:0),_this.
_heightAV=new _reactNative.Animated.Value(_this.props.expanded?1:0),_this.
_iconAV=new _reactNative.Animated.Value(_this.props.expanded?1:0),_temp),_possibleConstructorReturn(_this,_ret);}_createClass(ExpansionPanel,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(next){var _this2=this;var expanded=this.props.expanded;if(!expanded&&next.expanded){_index.Animations.standard(this._labelOpacityAV,{delay:50,duration:175,toValue:0}).start(function(){return _this2.setState({expanded:true});});setTimeout(function(){return _index.Animations.standard(_this2._opacityAV,{delay:175,duration:300}).start();});setTimeout(function(){return _index.Animations.standard(_this2._heightAV).start();});setTimeout(function(){return _index.Animations.standard(_this2._iconAV,{duration:150}).start();});}if(expanded&&!next.expanded){_index.Animations.standard(this._heightAV,{delay:50,duration:300,toValue:0}).start();setTimeout(function(){return _index.Animations.standard(_this2._opacityAV,{duration:150,toValue:0}).start(function(){return _this2.setState({expanded:false});});});_index.Animations.standard(this._labelOpacityAV,{delay:150,duration:300,toValue:1}).start();setTimeout(function(){return _index.Animations.standard(_this2._iconAV,{duration:150,toValue:0}).start();});}}},{key:'render',value:function render()

{var _props=
this.props,actions=_props.actions,label=_props.label,children=_props.children,approximateHeight=_props.approximateHeight,onExpand=_props.onExpand;var
expanded=this.state.expanded;

var AnimatedIcon=_reactNative.Animated.createAnimatedComponent(_index.Icon);

var labelEl=typeof label==='string'?
_react2.default.createElement(_index.Body1,{style:styles.labelText},label):
label;



return(
_react2.default.createElement(_reactNative.Animated.View,{style:(0,_uranium.animate)('marginVertical',0,16,this._heightAV)},
_react2.default.createElement(_index.Paper,{style:styles.base},
!expanded&&
_react2.default.createElement(_index.TouchableRipple,{
style:styles.label,
onPress:onExpand},
_react2.default.createElement(_reactNative.Animated.View,{
style:(0,_uranium.animate)('opacity',0,1,this._labelOpacityAV)},
labelEl)),



_react2.default.createElement(AnimatedIcon,{
name:'keyboard_arrow_down',
style:[
styles.icon,
(0,_uranium.animate)(['transform'],styles.icon,styles.iconExpanded,this._iconAV)]}),

_react2.default.createElement(_reactNative.Animated.View,{
style:[
styles.content,
(0,_uranium.animate)('opacity',0,1,this._opacityAV),
(0,_uranium.animate)('maxHeight',0,approximateHeight,this._heightAV)]},

_react2.default.createElement(_reactNative.View,{style:styles.body},
children),

!!actions&&
_react2.default.createElement(_reactNative.View,{style:styles.actions},
Array.isArray(actions)?_react2.default.Children.toArray(actions):actions)))));






}}]);return ExpansionPanel;}(_react.Component);


ExpansionPanel.propTypes={



expanded:_propTypes2.default.bool,



onExpand:_propTypes2.default.func,



label:_propTypes2.default.node,



children:_propTypes2.default.node,



actions:_propTypes2.default.node,





approximateHeight:_propTypes2.default.number};


ExpansionPanel.defaultProps={
expanded:false,
onExpand:function onExpand(){return 0;},
approximateHeight:50*_index.gu};exports.default=


ExpansionPanel;

var styles={
base:{
position:'relative',
minHeight:12*_index.gu,

padding:0,

alignSelf:'stretch'},


label:{
position:'absolute',
left:0,
right:0,
top:0,
bottom:0,

paddingLeft:6*_index.gu,
paddingRight:15*_index.gu,
paddingVertical:3*_index.gu,

flexDirection:'row'},


icon:{
position:'absolute',
right:4*_index.gu,
top:4*_index.gu,
transform:[{rotate:'0deg'}]},


iconExpanded:{
transform:[{rotate:'-180deg'}]},


body:{
paddingTop:5*_index.gu,
paddingBottom:4*_index.gu,
paddingHorizontal:6*_index.gu},


actions:{
paddingRight:2*_index.gu,
paddingLeft:6*_index.gu,
paddingVertical:2*_index.gu,

flexDirection:'row',
justifyContent:'flex-end'}};