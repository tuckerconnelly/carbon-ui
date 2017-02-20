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
 *
 * ### Examples
 *
 *      import React from 'react'
 *      import { View } from 'react-native'
 *      import { FlatButton } from 'carbon-ui'
 *
 *      export default () =>
 *        <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
 *          <FlatButton>Hey I'm a button</FlatButton>
 *          <FlatButton disabled>Hey I'm disabled</FlatButton>
 *        </View>
 */
const Button = ({
  disabled,
  children,
  theme,
  textStyle,
  ...other
}) => {
  // Themed styles
  const styles = tStyles(theme)

  // Uppercase and style if the child is a string
  // Otherwise it's probably an icon or image, so let it through
  const formattedChildren = typeof children === 'string' ?
    (<Body2
      style={[
        styles.text,
        disabled && styles.disabledText,
        textStyle,
      ]}>{children.toUpperCase()}</Body2>) :
    children

  return (
    <TouchableRipple
      hitSlop={{ top: 6, right: 6, bottom: 6, left: 6 }}
      css={[styles.base, disabled && styles.disabled]}
      disabled={disabled}
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
  /**
   * The style of the button text. Only applies if props.children isn't passed.
   */
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),

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

  disabledText: {
    color: theme.colors.button.flat.disabledText,
  },
})

export default
  connectTheme(
  Uranium(
  Button))
