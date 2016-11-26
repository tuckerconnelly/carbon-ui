Object.defineProperty(exports,"__esModule",{value:true});var _color=require('color');var _color2=_interopRequireDefault(_color);

var _index=require('../../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

{
colors:{
primary:_index.Colors.cyan500,
primaryLight:_index.Colors.cyan200,
primaryDark:_index.Colors.cyan700,

accent:_index.Colors.pinkA200,
accentLight:_index.Colors.pinkA100,
accentDark:_index.Colors.pinkA400,

button:{
flat:{
pressed:'rgba(153, 153, 153, .40)',
disabledText:'rgba(0, 0, 0, .26)'},

raised:{
disabled:'rgba(0, 0, 0, .12)',
disabledText:'rgba(0, 0, 0, .26)',
focusedShade:'rgba(0, 0, 0, .12)'}},



divider:'rgba(0, 0, 0, .12)',
ripple:'rgba(0, 0, 0, .87)',
error:(0,_color2.default)(_index.Colors.red400).alpha(0.87).rgbString()}};