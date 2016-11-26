import React, { PropTypes } from 'react'
import ps from 'react-native-ps'
import Uranium from 'uranium'

import {
  TouchableRipple,
  Body2,

  Breakpoints,

  connectTheme,
} from '../../index'

/**
 * Flat buttons are printed on material. They do not lift, but fill with color
 * on press.
 */
const Button = ({
  disabled,
  children,
  css,
  theme,
  ...other
}) => {
  // Themed styles
  const styles = tStyles(theme)

  // Uppercase and style if the child is a string
  // Otherwise it's probably an icon or image, so let it through
  const formattedChildren = typeof children === 'string' ?
    <Body2 style={styles.text}>{children.toUpperCase()}</Body2> :
    children

  return (
    <TouchableRipple
      hitSlop={{ top: 6, right: 6, bottom: 6, left: 6 }}
      css={[styles.base, disabled && styles.disabled, css]}
      {...other}>
      {formattedChildren}
    </TouchableRipple>
  )
}

Button.propTypes = {
  /**
   * Disables the button if set to true.
   */
  disabled: PropTypes.bool,

  /**
   * The inside of the button. If it's text, it'll be UPPERCASEd.
   */
  children: PropTypes.node.isRequired,
  css: PropTypes.object,

  // connectTheme
  theme: PropTypes.object.isRequired,
}

Button.defaultProps = {
  disabled: false,
}

const tStyles = theme => ps({
  base: {
    height: 36,
    minWidth: 88,
    paddingHorizontal: 16,
    borderRadius: 2,
    marginHorizontal: 8,

    alignItems: 'center',
    justifyContent: 'center',

    [Breakpoints.ml]: {
      height: 32,
    },
  },

  text: {
    lineHeight: 16,
    textAlign: 'center',

    color: theme.colors.primary,
  },

  active: {
    backgroundColor: theme.colors.button.flat.pressed,
  },

  disabled: {
    backgroundColor: theme.colors.button.flat.disabled,
  },
})

export default
  connectTheme(
  Uranium(
  Button))
