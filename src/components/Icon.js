import React, { Component, PropTypes } from 'react'
import { Text } from 'react-native-universal'
import ps from 'react-native-ps'

const SIZE = 24

// Stateful so refs can be attached, mostly so Animated.createAnimatedComponent
// works, which needs to attach a ref to the animating component

/**
 * A system icon, or UI icon, symbolizes a command, file, device, or directory.
 * System icons are also used to represent common actions like trash, print,
 * and save.
 *
 * The Icon's name maps to the material icons font.
 */
class Icon extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { name, style, children, ...other } = this.props

    return (
      <Text
        style={[
          styles.base,
          {
            height: SIZE,
            width: SIZE,

            fontSize: SIZE,
            lineHeight: SIZE,
          },
        ].concat(style)}
        {...other}>
        {name}
        {children}
      </Text>
    )
  }
}

Icon.propTypes = {
  /**
   * The name of the icon, from the material icons font.
   */
  name: PropTypes.string.isRequired,

  children: PropTypes.node,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default Icon

const styles = ps({
  base: {
    fontFamily: 'MaterialIcons-Regular',
  },


  web: {
    base: {
      wordWrap: 'normal',
    },
  },
})
