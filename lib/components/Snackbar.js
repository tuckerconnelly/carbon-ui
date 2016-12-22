Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');

var _carbonUi=require('carbon-ui');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var





Snackbar=function(_Component){_inherits(Snackbar,_Component);function Snackbar(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Snackbar);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Snackbar.__proto__||Object.getPrototypeOf(Snackbar)).call.apply(_ref,[this].concat(args))),_this),_this.

















_activateAV=new _reactNative.Animated.Value(_this.props.children),_this.
_autoHideTimeout=null,_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Snackbar,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(next){var _props=this.props,shown=_props.shown,autoHideDuration=_props.autoHideDuration,onRequestHide=_props.onRequestHide;if(!shown&&next.shown){_carbonUi.Animations.entrance(this._activateAV,{useNativeDriver:true}).start();this._autoHideTimeout=setTimeout(onRequestHide,autoHideDuration);}if(shown&&!next.shown){clearTimeout(this._autoHideTimeout);_carbonUi.Animations.tempExit(this._activateAV,{toValue:0,useNativeDriver:true}).start();}}},{key:'render',value:function render()

{var _props2=
this.props,children=_props2.children,actionText=_props2.actionText,onPressAction=_props2.onPressAction;
return(
_react2.default.createElement(_reactNative.View,{style:styles.base},
_react2.default.createElement(_carbonUi.Body1,null,children),
actionText&&
_react2.default.createElement(_carbonUi.FlatButton,{
style:styles.action,
onPress:onPressAction},
actionText)));




}}]);return Snackbar;}(_react.Component);


Snackbar.propTypes={



shown:_react.PropTypes.bool,



children:_react.PropTypes.string,



actionText:_react.PropTypes.node,



onPressAction:_react.PropTypes.function,




autoHideDuration:_react.PropTypes.number,



onRequestHide:_react.PropTypes.function};


Snackbar.defaultProps={
autoHideDuration:400};exports.default=


Snackbar;

var styles={
base:_extends({
position:'absolute',
bottom:0,

paddingVertical:14,
paddingHorizontal:24,

backgroundColor:'#323232',

flexDirection:'row'},

_carbonUi.Elevation.dp8),


action:{
marginLeft:24}};