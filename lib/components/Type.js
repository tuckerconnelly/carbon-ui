Object.defineProperty(exports,"__esModule",{value:true});exports.Caption=exports.Body1=exports.Body2=exports.Subheading=exports.Title=exports.Headline=exports.Display1=exports.Display2=exports.Display3=exports.Display4=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _uranium=require('uranium');var _uranium2=_interopRequireDefault(_uranium);

var _index=require('../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var




Display4=function(_Component){_inherits(Display4,_Component);function Display4(){_classCallCheck(this,Display4);return _possibleConstructorReturn(this,(Display4.__proto__||Object.getPrototypeOf(Display4)).apply(this,arguments));}_createClass(Display4,[{key:'render',value:function render()
{var _props=
this.props,children=_props.children,style=_props.style,other=_objectWithoutProperties(_props,['children','style']);
return _react2.default.createElement(_reactNative.Text,_extends({style:[_index.Type.display4,style]},other),children);
}}]);return Display4;}(_react.Component);var


Display3=function(_Component2){_inherits(Display3,_Component2);function Display3(){_classCallCheck(this,Display3);return _possibleConstructorReturn(this,(Display3.__proto__||Object.getPrototypeOf(Display3)).apply(this,arguments));}_createClass(Display3,[{key:'render',value:function render()
{var _props2=
this.props,children=_props2.children,style=_props2.style,other=_objectWithoutProperties(_props2,['children','style']);
return _react2.default.createElement(_reactNative.Text,_extends({style:[_index.Type.display3,style]},other),children);
}}]);return Display3;}(_react.Component);var


Display2=function(_Component3){_inherits(Display2,_Component3);function Display2(){_classCallCheck(this,Display2);return _possibleConstructorReturn(this,(Display2.__proto__||Object.getPrototypeOf(Display2)).apply(this,arguments));}_createClass(Display2,[{key:'render',value:function render()
{var _props3=
this.props,children=_props3.children,style=_props3.style,other=_objectWithoutProperties(_props3,['children','style']);
return _react2.default.createElement(_reactNative.Text,_extends({style:[_index.Type.display2,style]},other),children);
}}]);return Display2;}(_react.Component);var


Display1=function(_Component4){_inherits(Display1,_Component4);function Display1(){_classCallCheck(this,Display1);return _possibleConstructorReturn(this,(Display1.__proto__||Object.getPrototypeOf(Display1)).apply(this,arguments));}_createClass(Display1,[{key:'render',value:function render()
{var _props4=
this.props,children=_props4.children,style=_props4.style,other=_objectWithoutProperties(_props4,['children','style']);
return _react2.default.createElement(_reactNative.Text,_extends({style:[_index.Type.display1,style]},other),children);
}}]);return Display1;}(_react.Component);var


Headline=function(_Component5){_inherits(Headline,_Component5);function Headline(){_classCallCheck(this,Headline);return _possibleConstructorReturn(this,(Headline.__proto__||Object.getPrototypeOf(Headline)).apply(this,arguments));}_createClass(Headline,[{key:'render',value:function render()
{var _props5=
this.props,children=_props5.children,style=_props5.style,other=_objectWithoutProperties(_props5,['children','style']);
return _react2.default.createElement(_reactNative.Text,_extends({style:[_index.Type.headline,style]},other),children);
}}]);return Headline;}(_react.Component);var


Title=function(_Component6){_inherits(Title,_Component6);function Title(){_classCallCheck(this,Title);return _possibleConstructorReturn(this,(Title.__proto__||Object.getPrototypeOf(Title)).apply(this,arguments));}_createClass(Title,[{key:'render',value:function render()
{var _props6=
this.props,children=_props6.children,style=_props6.style,other=_objectWithoutProperties(_props6,['children','style']);
return _react2.default.createElement(_reactNative.Text,_extends({style:[_index.Type.title,style]},other),children);
}}]);return Title;}(_react.Component);var


Subheading=function(_Component7){_inherits(Subheading,_Component7);function Subheading(){_classCallCheck(this,Subheading);return _possibleConstructorReturn(this,(Subheading.__proto__||Object.getPrototypeOf(Subheading)).apply(this,arguments));}_createClass(Subheading,[{key:'render',value:function render()
{var _props7=
this.props,children=_props7.children,css=_props7.css,other=_objectWithoutProperties(_props7,['children','css']);
return _react2.default.createElement(_reactNative.Text,_extends({css:[_index.Type.subheading,css]},other),children);
}}]);return Subheading;}(_react.Component);


var UraniumSubheading=(0,_uranium2.default)(Subheading);var

Body2=function(_Component8){_inherits(Body2,_Component8);function Body2(){_classCallCheck(this,Body2);return _possibleConstructorReturn(this,(Body2.__proto__||Object.getPrototypeOf(Body2)).apply(this,arguments));}_createClass(Body2,[{key:'render',value:function render()
{var _props8=
this.props,children=_props8.children,css=_props8.css,other=_objectWithoutProperties(_props8,['children','css']);
return _react2.default.createElement(_reactNative.Text,_extends({css:[_index.Type.body2,css]},other),children);
}}]);return Body2;}(_react.Component);


var UraniumBody2=(0,_uranium2.default)(Body2);var

Body1=function(_Component9){_inherits(Body1,_Component9);function Body1(){_classCallCheck(this,Body1);return _possibleConstructorReturn(this,(Body1.__proto__||Object.getPrototypeOf(Body1)).apply(this,arguments));}_createClass(Body1,[{key:'render',value:function render()
{var _props9=
this.props,children=_props9.children,css=_props9.css,other=_objectWithoutProperties(_props9,['children','css']);
return _react2.default.createElement(_reactNative.Text,_extends({css:[_index.Type.body1,css]},other),children);
}}]);return Body1;}(_react.Component);


var UraniumBody1=(0,_uranium2.default)(Body1);var

Caption=function(_Component10){_inherits(Caption,_Component10);function Caption(){_classCallCheck(this,Caption);return _possibleConstructorReturn(this,(Caption.__proto__||Object.getPrototypeOf(Caption)).apply(this,arguments));}_createClass(Caption,[{key:'render',value:function render()
{var _props10=
this.props,children=_props10.children,style=_props10.style,other=_objectWithoutProperties(_props10,['children','style']);
return _react2.default.createElement(_reactNative.Text,_extends({style:[_index.Type.caption,style]},other),children);
}}]);return Caption;}(_react.Component);


var propTypes={
children:_react.PropTypes.node,
style:_react.PropTypes.oneOfType([
_react.PropTypes.object,
_react.PropTypes.array]),

css:_react.PropTypes.oneOfType([
_react.PropTypes.object,
_react.PropTypes.array])};



Display4.propTypes=propTypes;
Display3.propTypes=propTypes;
Display2.propTypes=propTypes;
Display1.propTypes=propTypes;
Headline.propTypes=propTypes;
Title.propTypes=propTypes;
Subheading.propTypes=propTypes;
Body2.propTypes=propTypes;
Body1.propTypes=propTypes;
Caption.propTypes=propTypes;exports.


Display4=Display4;exports.
Display3=Display3;exports.
Display2=Display2;exports.
Display1=Display1;exports.
Headline=Headline;exports.
Title=Title;exports.
Subheading=UraniumSubheading;exports.
Body2=UraniumBody2;exports.
Body1=UraniumBody1;exports.
Caption=Caption;