Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _uranium=require('uranium');var _uranium2=_interopRequireDefault(_uranium);
var _index=require('../../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var CardActions=function CardActions(_ref){var children=_ref.children,style=_ref.style;return(
_react2.default.createElement(_reactNative.View,{css:[styles.root,style]},
children));};


CardActions.propTypes={



children:_react.PropTypes.node,



style:_react.PropTypes.oneOfType([
_react.PropTypes.object,
_react.PropTypes.array])};exports.default=




(0,_index.connectTheme)(
(0,_uranium2.default)(
CardActions));

var styles={
root:{
padding:8}};