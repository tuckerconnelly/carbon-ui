import React, { PropTypes } from 'react'
import ps from 'react-native-ps'
import Uranium from 'uranium'
import Color from 'color'

import { Body2 } from './Type'
import connectTheme from './connectTheme'
import Shadows from './styles/Shadows'
import { Breakpoints } from './styles/Grid'
import TouchableRipple from './TouchableRipple'

const Button = ({
  children,

  disabled,
  flat,
  raised,
  icon,

  theme,
  ...other
}) => {
  // Themed styles
  const tStyles = styles(theme)

  // Uppercase and style if the child is a string
  // Otherwise it's probably an icon or image, so let it through
  const formattedChildren = typeof children === 'string' ?
    <Body2 style={tStyles.text}>{children.toUpperCase()}</Body2> :
    children

  return (
    <TouchableRipple
      hitSlop={{ top: 6, right: 6, bottom: 6, left: 6 }}
      css={[
        tStyles.base,

        flat && tStyles.flat,
        raised && tStyles.raised,
        icon && tStyles.icon,

        disabled && flat && tStyles.flat.disabled,
        disabled && raised && tStyles.raised.disabled,
        disabled && icon && tStyles.icon.disabled,
      ]}
      {...other}>
      {formattedChildren}
    </TouchableRipple>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,

  disabled: PropTypes.bool,
  flat: PropTypes.bool,
  raised: PropTypes.bool,
  icon: PropTypes.bool,

  theme: PropTypes.object.isRequired,
}

const styles = theme => ps({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 36,
    paddingHorizontal: 16,
    marginHorizontal: 8,

    [Breakpoints.ml]: {
      height: 32,
    },
  },

  text: {
    lineHeight: 16,
    textAlign: 'center',
  },

  flat: {
    color: theme.primary,

    active: {
      backgroundColor: theme.button.flat.pressed,
    },

    disabled: {
      backgroundColor: theme.button.flat.disabled,
    },
  },

  raised: {
    minWidth: 88,

    ...Shadows.dp2,

    active: {
      ...Shadows.dp4,
    },

    focus: {
      backgroundColor: Color(theme.primary).darken(0.12).hexString(),
    },

    disabled: {
      color: theme.button.raised.disabledText,

      backgroundColor: theme.button.raised.disabled,
    },

    [Breakpoints.ml]: {
      ...Shadows.none,

      hover: {
        ...Shadows.dp2,
      },
    },
  },

  icon: {
    width: 40,
    height: 40,
    paddingVertical: 12,

    fontSize: 16,
    lineHeight: 16,
    textAlign: 'center',

    [Breakpoints.ml]: {
      height: 40,
      paddingVertical: 16,

      fontSize: 16,
      lineHeight: 16,
    },
  },


  web: {
    base: {
      cursor: 'pointer',
    },
  },
})

export default connectTheme(Uranium(Button))
