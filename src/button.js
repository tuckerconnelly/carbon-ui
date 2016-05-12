import React, { PropTypes } from 'react'
import { TouchableWithoutFeedback, View } from 'react-native-universal'
import ps from 'react-native-ps'
import Uranium from 'uranium'
import Color from 'color'

import connectTheme from './connectTheme'
import Shadows from './styles/Shadows'
import { Breakpoints } from './styles/Grid'
import { Body1 } from 'carbon-ui/lib/Type'
import Ripple from './Ripple'

const Button = ({
  children,
  style,

  disabled,
  flat,
  raised,
  fab,
  icon,

  theme,
  ...other,
}) => {
  // Themed styles
  const tStyles = styles(theme)

  // Uppercase and style if the child is a string
  // Otherwise it's probably an icon or image, so let it through
  const formattedChildren = typeof children === 'string' ?
    <Body1>{children.toUpperCase()}</Body1> :
    children

  return (
    <TouchableWithoutFeedback
      css={[
        tStyles.base,

        flat && tStyles.flat,
        raised && tStyles.raised,
        fab && tStyles.fab,
        icon && tStyles.icon,

        disabled && flat && tStyles.flat.disabled,
        disabled && raised && tStyles.raised.disabled,
        disabled && fab && tStyles.fab.disabled,
        disabled && icon && tStyles.icon.disabled,

        style,
      ]}
      style={tStyles.touchable}
      hitSlop={{ top: 12, right: 12, bottom: 12, left: 12 }}
      {...other}>
      <View>
        {formattedChildren}
        <Ripple />
      </View>
    </TouchableWithoutFeedback>
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

const styles = theme => ps({
  base: {
    height: 36,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginHorizontal: 8,

    [Breakpoints.ml]: {
      height: 32,
    },
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


  web: {
    base: {
      cursor: 'pointer',
    },
  },
})

export default connectTheme(Uranium(Button))
