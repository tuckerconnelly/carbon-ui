Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _index=require('./index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}





var IconToggle=function IconToggle(_ref){var iconName=_ref.iconName,style=_ref.style,iconStyle=_ref.iconStyle,other=_objectWithoutProperties(_ref,['iconName','style','iconStyle']);return(
_react2.default.createElement(_index.TouchableRipple,_extends({
rippleCentered:true,
hitSlop:{top:3*_index.gu,right:3*_index.gu,bottom:3*_index.gu,left:3*_index.gu},
style:[styles.base,style]},
other),
_react2.default.createElement(_index.Icon,{name:iconName,style:iconStyle})));};


IconToggle.propTypes={



iconName:_react.PropTypes.string,




style:_react.PropTypes.object,



iconStyle:_react.PropTypes.object};exports.default=


IconToggle;

var styles={
base:{
overflow:undefined}};