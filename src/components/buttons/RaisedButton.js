import React from 'react'
import PropTypes from 'prop-types'
import Uranium from 'uranium'
import Color from 'color'

import {
  TouchableRipple,
  Body2,

  Breakpoints,
  Colors,
  Elevation,

  connectTheme,
} from '../../index'

/**
 * Raised buttons behave like a piece of material resting on another sheet –
 * they lift and fill with color on press.
 *
 * ### Examples
 *
 *      import React from 'react'
 *      import { View } from 'react-native'
 *      import { RaisedButton } from 'carbon-ui'
 *
 *      export default () =>
 *        <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
 *          <RaisedButton>Click me!</RaisedButton>
 *          <RaisedButton disabled>Out of commission</RaisedButton>
 *        </View>
 *
 */
const RaisedButton = ({
  disabled,

  children,
  textStyle,

  theme,
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
      ]}>
      {children.toUpperCase()}
    </Body2>) :
    children

  return (
    <TouchableRipple
      hitSlop={{ top: 6, right: 6, bottom: 6, left: 6 }}
      css={[styles.base, disabled && styles.disabled]}
      rippleColor={Colors.white}
      disabled={disabled}
      {...other}>
      {formattedChildren}
    </TouchableRipple>
  )
}

RaisedButton.propTypes = {
  /**
   * Disables the button if set to true.
   */
  disabled: PropTypes.bool,

  /**
   * The inside of the button. If it's text, it'll be UPPERCASEd.
   */
  children: PropTypes.node,
  /**
   * The style of the button text. Only applies if props.children isn't passed.
   */
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),

  // connectTheme
  theme: PropTypes.object.isRequired,
}

const tStyles = theme => ({
  base: {
    height: 36,
    minWidth: 88,
    paddingHorizontal: 16,
    borderRadius: 2,
    marginHorizontal: 8,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: theme.colors.primary,

    ...Elevation.dp2,

    [Breakpoints.ml]: {
      height: 32,

      ...Elevation.none,
    },
  },

  text: {
    color: Colors.whitePrimary,
    lineHeight: 16,
    textAlign: 'center',
  },

  pressed: {
    ...Elevation.dp4,
  },

  disabled: {
    backgroundColor: theme.colors.button.raised.disabled,
  },

  disabledText: {
    color: theme.colors.button.raised.disabledText,
  },

  focused: {
    backgroundColor: Color(theme.colors.primary).darken(0.12).hexString(),
  },

  hovered: {
    ...Elevation.dp2,
  },
})

export default
  connectTheme(
  Uranium(
  RaisedButton))
