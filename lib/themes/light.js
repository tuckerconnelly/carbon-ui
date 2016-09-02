Object.defineProperty(exports,"__esModule",{value:true});var _Colors=require('../styles/Colors');var _Colors2=_interopRequireDefault(_Colors);
var _color=require('color');var _color2=_interopRequireDefault(_color);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

{
primary:_Colors2.default.lightBlue400,
primaryLight:_Colors2.default.lightBlue100,
primaryDark:_Colors2.default.lightBlue700,

accent:_Colors2.default.orangeA200,
accentLight:_Colors2.default.orangeA100,
accentDark:_Colors2.default.orangeA400,

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
error:(0,_color2.default)(_Colors2.default.red400).alpha(0.87).rgbString()};