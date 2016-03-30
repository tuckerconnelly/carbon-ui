import Colors from './Colors'
import { Breakpoints } from './Grid'

export default {
  display4: {
    color: Colors.blackPrimary,
    fontFamily: 'Roboto-Light',
    fontSize: 112,
  },
  display3: {
    color: Colors.blackPrimary,
    fontFamily: 'Roboto-Regular',
    fontSize: 56,
  },
  display2: {
    color: Colors.blackPrimary,
    fontFamily: 'Roboto-Regular',
    fontSize: 45,
  },
  display1: {
    color: Colors.blackPrimary,
    fontFamily: 'Roboto-Regular',
    fontSize: 34,
  },
  headline: {
    color: Colors.blackPrimary,
    fontFamily: 'Roboto-Regular',
    fontSize: 24,
  },
  title: {
    color: Colors.blackPrimary,
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
  },
  subheading: {
    color: Colors.blackPrimary,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    [Breakpoints.ml]: { fontSize: 15 },
  },
  body2: {
    color: Colors.blackPrimary,
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    [Breakpoints.ml]: { fontSize: 13 },
  },
  body1: {
    color: Colors.blackPrimary,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    [Breakpoints.ml]: { fontSize: 13 },
  },
  caption: {
    color: Colors.blackPrimary,
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
  },
}
