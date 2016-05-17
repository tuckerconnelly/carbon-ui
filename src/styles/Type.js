import Colors from './Colors'
import { Breakpoints } from './Grid'

export default {
  display4: {
    color: Colors.blackPrimary,
    fontFamily: 'Roboto-Light',
    fontSize: 112,
    // NOTE Not currently in MD spec, making educated guess
    lineHeight: 112,
  },
  display3: {
    color: Colors.blackPrimary,
    fontFamily: 'Roboto-Regular',
    fontSize: 56,
    // NOTE Not in MD spec
    lineHeight: 56,
  },
  display2: {
    color: Colors.blackPrimary,
    fontFamily: 'Roboto-Regular',
    fontSize: 45,
    lineHeight: 48,
  },
  display1: {
    color: Colors.blackPrimary,
    fontFamily: 'Roboto-Regular',
    fontSize: 34,
    lineHeight: 40,
  },
  headline: {
    color: Colors.blackPrimary,
    fontFamily: 'Roboto-Regular',
    fontSize: 24,
    lineHeight: 32,
  },
  title: {
    color: Colors.blackPrimary,
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    // NOTE Not in MD spec
    lineHeight: 28,
  },
  subheading: {
    color: Colors.blackPrimary,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 24,
    [Breakpoints.ml]: { fontSize: 15 },
  },
  body2: {
    color: Colors.blackPrimary,
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    lineHeight: 24,
    [Breakpoints.ml]: { fontSize: 13 },
  },
  body1: {
    color: Colors.blackPrimary,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    lineHeight: 20,
    [Breakpoints.ml]: { fontSize: 13 },
  },
  caption: {
    color: Colors.blackPrimary,
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    // NOTE Not in MD spec
    lineHeight: 16,
  },
}
