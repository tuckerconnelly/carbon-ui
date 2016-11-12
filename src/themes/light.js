import Color from 'color'

import Colors from '../styles/Colors'

export default {
  primary: Colors.lightBlue400,
  primaryLight: Colors.lightBlue100,
  primaryDark: Colors.lightBlue700,

  accent: Colors.orangeA200,
  accentLight: Colors.orangeA100,
  accentDark: Colors.orangeA400,

  button: {
    flat: {
      pressed: 'rgba(153, 153, 153, .40)',
      disabledText: 'rgba(0, 0, 0, .26)',
    },
    raised: {
      disabled: 'rgba(0, 0, 0, .12)',
      disabledText: 'rgba(0, 0, 0, .26)',
      focusedShade: 'rgba(0, 0, 0, .12)',
    },
  },

  divider: 'rgba(0, 0, 0, .12)',
  ripple: 'rgba(0, 0, 0, .87)',
  error: Color(Colors.red400).alpha(0.87).rgbString(),
}
