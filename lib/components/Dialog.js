Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/components/Dialog.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _uranium=require('uranium');

var _index=require('../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

























Dialog=function(_Component){_inherits(Dialog,_Component);function Dialog(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Dialog);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Dialog.__proto__||Object.getPrototypeOf(Dialog)).call.apply(_ref,[this].concat(args))),_this),_this.
state={visible:_this.props.active},_this.














_showAV=new _reactNative.Animated.Value(_this.props.active?1:0),_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Dialog,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(next){var _this2=this;var active=this.props.active;if(!active&&next.active){this.setState({visible:true});_index.Animations.entrance(this._showAV).start();}if(active&&!next.active){_index.Animations.exit(this._showAV,{toValue:0}).start(function(){_this2.setState({visible:false});});}}},{key:'render',value:function render()

{var _props=
this.props,title=_props.title,actions=_props.actions,onOverlayPress=_props.onOverlayPress,style=_props.style,children=_props.children;var
visible=this.state.visible;

return(
_react2.default.createElement(_reactNative.Animated.View,{
style:[
styles.overlay,
(0,_uranium.animate)(['backgroundColor'],styles.overlay,styles.overlayVisible,this._showAV),

!visible&&styles.hidden],__source:{fileName:_jsxFileName,lineNumber:55}},

_react2.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:onOverlayPress,__source:{fileName:_jsxFileName,lineNumber:62}},
_react2.default.createElement(_reactNative.View,{style:styles.touchableBackground,__source:{fileName:_jsxFileName,lineNumber:63}})),

_react2.default.createElement(_reactNative.Animated.View,{
style:[
styles.dialog,
(0,_uranium.animate)(['top','opacity'],styles.dialog,styles.dialogVisible,this._showAV),
style],__source:{fileName:_jsxFileName,lineNumber:65}},

!!title&&
_react2.default.createElement(_reactNative.View,{style:styles.title,__source:{fileName:_jsxFileName,lineNumber:72}},_react2.default.createElement(_index.Title,{__source:{fileName:_jsxFileName,lineNumber:72}},title)),

_react2.default.createElement(_reactNative.View,{style:[styles.body,!title&&styles.bodyWithoutTitle],__source:{fileName:_jsxFileName,lineNumber:74}},children),
!!actions&&
_react2.default.createElement(_reactNative.View,{style:styles.actions,__source:{fileName:_jsxFileName,lineNumber:76}},
Array.isArray(actions)?_react2.default.Children.toArray(actions):actions))));





}}]);return Dialog;}(_react.Component);


Dialog.propTypes={



title:_propTypes2.default.string,



actions:_propTypes2.default.node,



active:_propTypes2.default.bool,



onOverlayPress:_propTypes2.default.func,



children:_propTypes2.default.node.isRequired,
style:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.array,_propTypes2.default.number])};


Dialog.defaultProps={
active:false};exports.default=


Dialog;

var styles={
overlay:_extends({
position:'absolute',
left:0,
right:0,
top:0,
bottom:0,

justifyContent:'center',
alignItems:'center',

backgroundColor:'rgba(0, 0, 0, 0)',

zIndex:2400,
overflow:'hidden'},
_index.Elevation.dp24,

_reactNative.Platform.select({
web:{
position:'fixed'}})),




hidden:{
left:0,
top:0,
width:0,
height:0},


overlayVisible:{
backgroundColor:'rgba(0, 0, 0, 0.25)'},


touchableBackground:{
position:'absolute',
left:0,
right:0,
top:0,
bottom:0},


dialog:_extends({
position:'relative',
top:-3*_index.gu,

minWidth:70*_index.gu,
backgroundColor:_index.Colors.white,

opacity:0},

_index.Elevation.dp24),


dialogVisible:{
top:0,
opacity:1},


title:{
paddingHorizontal:6*_index.gu,
paddingTop:6*_index.gu,
paddingBottom:5*_index.gu},


body:{
paddingHorizontal:6*_index.gu,
paddingBottom:6*_index.gu},


bodyWithoutTitle:{
paddingTop:6*_index.gu},


actions:{
paddingRight:2*_index.gu,
paddingLeft:6*_index.gu,
paddingVertical:2*_index.gu,

flexDirection:'row',
justifyContent:'flex-end'}};