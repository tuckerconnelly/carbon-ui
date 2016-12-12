import React, { Component, PropTypes } from 'react'
import { Animated, TouchableOpacity, Platform } from 'react-native-universal'
import { animate } from 'uranium'

import { Animations, TouchableRipple, Elevation, gu, connectTheme } from '../../index'

/**
 * A floating action button represents the primary action in an application.
 *
 * The Android implementation is temporarily un-rippled until the React Native
 * team implements `overflow: hidden` on Android.
 *
 * ### Examples
 *
 *      import React from 'react'
 *      import { View } from 'react-native-universal'
 *      import { FloatingActionButton, Icon, gu } from 'carbon-ui'
 *
 *      export default () =>
 *        <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
 *          <FloatingActionButton style={{ marginRight: 2 * gu }}>
 *            <Icon name="add" style={{ color: 'white' }} />
 *          </FloatingActionButton>
 *          <FloatingActionButton accent>
 *            <Icon name="keyboard_voice" style={{ color: 'white' }} />
 *          </FloatingActionButton>
 *        </View>
 *
 */
class FloatingActionButton extends Component {
  _setPressed = e => {
    Animations.standard(this._pressAV).start()
    this.props.onPressIn && this.props.onPressIn(e)
  }
  _setNotPressed = e => {
    Animations.standard(this._pressAV, { toValue: 0 }).start()
    this.props.onPressOut && this.props.onPressOut(e)
  }

  _pressAV = new Animated.Value(0)

  render() {
    const { accent, children, style, theme, ...other } = this.props

    // Until Android implements `overflow: hidden`. Until then, the "rippled"
    // area would be square instead of round. See:
    // https://github.com/facebook/react-native/issues/3198
    const TouchableComponent = Platform.OS === 'android' ?
      TouchableOpacity :
      TouchableRipple

    const styles = tStyles(theme)

    return (
      <Animated.View
        style={[
          styles.base,
          animate(styles.base, styles.pressed, this._pressAV),
          accent && { backgroundColor: theme.colors.accent },
        ].concat(style)}>
        <TouchableComponent
          rippleColor="white"
          {...other}
          style={styles.touchableRipple}
          onPressIn={this._setPressed}
          onPressOut={this._setNotPressed}>
          {children}
        </TouchableComponent>
      </Animated.View>
    )
  }
}

FloatingActionButton.propTypes = {
  /**
   * Will set the background color to the accent color if set to true
   */
  accent: PropTypes.bool,

  /**
   * Usually an <Icon />
   */
  children: PropTypes.node,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,

  // connectTheme
  theme: PropTypes.object.isRequired,
}

export default
  connectTheme(
  FloatingActionButton)

const tStyles = theme => ({
  base: {
    position: 'relative',

    width: 14 * gu,
    height: 14 * gu,
    borderRadius: 7 * gu,

    backgroundColor: theme.colors.primary,

    ...Elevation.dp6,
  },

  pressed: {
    ...Elevation.dp12,
  },

  touchableRipple: {
    borderRadius: 7 * gu,

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
