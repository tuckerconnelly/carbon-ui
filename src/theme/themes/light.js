import Color from 'color'

import {
  Colors,
  Type,
} from '../../index'

export default {
  colors: {
    primary: Colors.cyan500,
    primaryLight: Colors.cyan200,
    primaryDark: Colors.cyan700,

    accent: Colors.pinkA200,
    accentLight: Colors.pinkA100,
    accentDark: Colors.pinkA400,

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
  },

  type: Type,
}
