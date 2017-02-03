Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _uranium=require('uranium');var _uranium2=_interopRequireDefault(_uranium);
var _index=require('../../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

CardActions=function(_Component){_inherits(CardActions,_Component);function CardActions(){_classCallCheck(this,CardActions);return _possibleConstructorReturn(this,(CardActions.__proto__||Object.getPrototypeOf(CardActions)).apply(this,arguments));}_createClass(CardActions,[{key:'render',value:function render()









{var _props=
this.props,children=_props.children,style=_props.style;

return _react2.default.createElement(_reactNative.View,{css:[styles.root,style]},
children);

}}]);return CardActions;}(_react.Component);CardActions.propTypes={children:_react.PropTypes.node,style:_react.PropTypes.oneOfType([_react.PropTypes.object,_react.PropTypes.array])};exports.default=


(0,_index.connectTheme)((0,_uranium2.default)(CardActions));

var styles={
root:{
padding:8}};