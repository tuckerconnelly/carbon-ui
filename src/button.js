import Color from 'color'
import Uranium from 'uranium'
import React, { PropTypes } from 'react'

import connectTheme from './connect-theme'
import { Breakpoints, Shadows } from './styles'

const Button = (props) => {
  const { children, disabled, flat, raised, fab, icon, theme } = props

  const styles = {
    base: {
      minWidth: 64,
      height: 36,
      paddingHorizontal: 16,
      paddingVertical: 10,
      marginHorizontal: 8,

      fontSize: 14,
      lineHeight: 16,

      [Breakpoints.ml]: {
        height: 32,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
        paddingBottom: 8,

        fontSize: 13,
        lineHeight: 16,
      },
    },

    flat: {
      color: theme.primary,

      ':active': {
        backgroundColor: theme.button.flat.pressed,
      },

      disabled: {
        backgroundColor: theme.button.flat.disabled,
      },
    },

    raised: {
      minWidth: 88,

      ...Shadows.dp2,

      ':active': {
        ...Shadows.dp4,
      },

      ':focus': {
        backgroundColor: Color(theme.primary).darken(0.12).hexString(),
      },

      disabled: {
        color: theme.button.raised.disabledText,

        backgroundColor: theme.button.raised.disabled,
      },

      [Breakpoints.ml]: {
        ...Shadows.none,

        ':hover': {
          ...Shadows.dp2,
        },
      },
    },

    fab: {

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
  }

  return (
    <div style={[
      styles.base,

      flat && styles.flat,
      raised && styles.raised,
      fab && styles.fab,
      icon && styles.icon,

      disabled && flat && styles.flat.disabled,
      disabled && raised && styles.raised.disabled,
      disabled && fab && styles.fab.disabled,
      disabled && icon && styles.icon.disabled,

      props.style,
    ]}>
      {children}
    </div>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,

  disabled: PropTypes.bool,
  flat: PropTypes.bool,
  raised: PropTypes.bool,
  fab: PropTypes.bool,
  icon: PropTypes.bool,

  theme: PropTypes.object.isRequired,
}

export default connectTheme(Uranium(Button))
