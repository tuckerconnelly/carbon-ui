Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _uranium=require('uranium');var _uranium2=_interopRequireDefault(_uranium);
var _index=require('../../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var CardActions=function CardActions(_ref){var children=_ref.children,style=_ref.style;return(
_react2.default.createElement(_reactNative.View,{css:[styles.root,style]},
children));};


CardActions.propTypes={



children:_propTypes2.default.node,



style:_propTypes2.default.oneOfType([
_propTypes2.default.object,
_propTypes2.default.array])};exports.default=




(0,_index.connectTheme)(
(0,_uranium2.default)(
CardActions));

var styles={
root:{
padding:8}};