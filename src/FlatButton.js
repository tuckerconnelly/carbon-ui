import React, { PropTypes } from 'react'
import ps from 'react-native-ps'
import Uranium from 'uranium'

import {
  TouchableRipple,
  Body2,

  Breakpoints,

  connectTheme,
} from './index'

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
  disabled: PropTypes.bool,

  children: PropTypes.node,
  css: PropTypes.object,

  // connectTheme
  theme: PropTypes.object.isRequired,
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

    color: theme.primary,
  },

  active: {
    backgroundColor: theme.button.flat.pressed,
  },

  disabled: {
    backgroundColor: theme.button.flat.disabled,
  },
})

export default
  connectTheme(
  Uranium(
  Button))
