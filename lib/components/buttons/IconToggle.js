Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _index=require('../../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}



















var IconToggle=function IconToggle(_ref){var name=_ref.name,style=_ref.style,iconStyle=_ref.iconStyle,other=_objectWithoutProperties(_ref,['name','style','iconStyle']);



return(
_react2.default.createElement(_index.TouchableRipple,_extends({
rippleCentered:true,
rippleSpread:0.34,
style:[styles.base,style]},
other),
_react2.default.createElement(_index.Icon,{name:name,style:iconStyle})));


};

IconToggle.propTypes={



name:_react.PropTypes.string.isRequired,




style:_react.PropTypes.object,



iconStyle:_react.PropTypes.object};exports.default=


IconToggle;

var styles={
base:{
width:9*_index.gu,
height:9*_index.gu,

alignItems:'center',
justifyContent:'center',
overflow:undefined}};