Object.defineProperty(exports,"__esModule",{value:true});var _reactNativePs=require('react-native-ps');var _reactNativePs2=_interopRequireDefault(_reactNativePs);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var iosOpacity=0.25;

var penumbraOpacity=0.14;
var umbraOpacity=0.2;exports.default=

(0,_reactNativePs2.default)({
ios:{
dp0:{
shadowColor:'transparent',
shadowOffset:{width:0,height:0},
shadowOpacity:iosOpacity,
shadowRadius:0},

dp2:{
shadowColor:'black',
shadowOffset:{width:0,height:1},
shadowOpacity:iosOpacity,
shadowRadius:1},

dp3:{
shadowColor:'black',
shadowOffset:{width:0,height:1},
shadowOpacity:iosOpacity,
shadowRadius:2},

dp4:{
shadowColor:'black',
shadowOffset:{width:0,height:2},
shadowOpacity:iosOpacity,
shadowRadius:2},

dp6:{
shadowColor:'black',
shadowOffset:{width:0,height:3},
shadowOpacity:iosOpacity,
shadowRadius:3},

dp8:{
shadowColor:'black',
shadowOffset:{width:0,height:4},
shadowOpacity:iosOpacity,
shadowRadius:4},

dp16:{
shadowColor:'black',
shadowOffset:{width:0,height:8},
shadowOpacity:iosOpacity,
shadowRadius:8},

dp24:{
shadowColor:'black',
shadowOffset:{width:0,height:12},
shadowOpacity:iosOpacity,
shadowRadius:12}},



android:{
dp0:{
elevation:0},

dp2:{
elevation:2},

dp3:{
elevation:3},

dp4:{
elevation:4},

dp6:{
elevation:6},

dp8:{
elevation:8},

dp16:{
elevation:16},

dp24:{
elevation:24}},




web:{
dp0:{
boxShadow:'\n        0 0px 0px 0px rgba(0, 0, 0, 0),\n        0 0px 0px 0px rgba(0, 0, 0, 0)\n      '},




dp2:{
boxShadow:'\n        0 2px 2px 0px rgba(0, 0, 0, '+
penumbraOpacity+'),\n        0 3px 1px -2px rgba(0, 0, 0, '+
umbraOpacity+')\n      '},


dp3:{
boxShadow:'\n        0 3px 4px 0px rgba(0, 0, 0, '+
penumbraOpacity+'),\n        0 3px 3px -2px rgba(0, 0, 0, '+
umbraOpacity+')\n      '},


dp4:{
boxShadow:'\n        0 4px 5px 0px rgba(0, 0, 0, '+
penumbraOpacity+'),\n        0 1px 10px -2px rgba(25, 184, 222, '+
umbraOpacity+')\n      '},


dp6:{
boxShadow:'\n        0 6px 10px 0px rgba(0, 0, 0, '+
penumbraOpacity+'),\n        0 1px 18px 0px rgba(0, 0, 0, '+
umbraOpacity+')\n      '},


dp8:{
boxShadow:'\n        0 8px 10px 1px rgba(0, 0, 0, '+
penumbraOpacity+'),\n        0 3px 14px 2px rgba(0, 0, 0, '+
umbraOpacity+')\n      '},


dp16:{
boxShadow:'\n        0 16px 24px 2px rgba(0, 0, 0, '+
penumbraOpacity+'),\n        0 6px 30px 5px rgba(0, 0, 0, '+
umbraOpacity+')\n      '},


dp24:{
boxShadow:'\n        0 24px 32px 3px rgba(0, 0, 0, '+
penumbraOpacity+'),\n        0 12px 36px 8px rgba(0, 0, 0, '+
umbraOpacity+')\n      '}}});