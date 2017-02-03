Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _uranium=require('uranium');var _uranium2=_interopRequireDefault(_uranium);
var _index=require('../../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

CardText=function(_Component){_inherits(CardText,_Component);function CardText(){_classCallCheck(this,CardText);return _possibleConstructorReturn(this,(CardText.__proto__||Object.getPrototypeOf(CardText)).apply(this,arguments));}_createClass(CardText,[{key:'render',value:function render()



















{var _props=
this.props,children=_props.children,style=_props.style,textStyle=_props.textStyle;

return _react2.default.createElement(_reactNative.View,{css:[styles.root,style]},
_react2.default.createElement(_reactNative.Text,{css:[styles.text,textStyle]},
children));


}}]);return CardText;}(_react.Component);CardText.propTypes={children:_react.PropTypes.node,style:_react.PropTypes.oneOfType([_react.PropTypes.object,_react.PropTypes.array]),textStyle:_react.PropTypes.oneOfType([_react.PropTypes.object,_react.PropTypes.array])};


var styles={
root:_defineProperty({
paddingLeft:16,
paddingRight:16,
paddingTop:16,
paddingBottom:24},

_index.Breakpoints.md,{
paddingLeft:24,
paddingRight:24}),


text:{
fontSize:14}};exports.default=



(0,_index.connectTheme)((0,_uranium2.default)(CardText));