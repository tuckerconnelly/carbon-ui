import React, { Component, PropTypes } from 'react'
import { Animated } from 'react-native-universal'
import { animate } from 'uranium'

import { Animations, TouchableRipple, Icon, Body1, Colors, connectTheme } from '../index'

class BottomNavigationIcon extends Component {
  componentWillReceiveProps(next) {
    const { active } = this.props
    if (!active && next.active) {
      Animations.standard(this._activateAV).start()
    }
    if (active && !next.active) {
      Animations.standard(this._activateAV, { toValue: 0 }).start()
    }
  }

  _activateAV = new Animated.Value(this.props.active ? 1 : 0)

  render() {
    const AnimatedIcon = Animated.createAnimatedComponent(Icon)
    const AnimatedBody1 = Animated.createAnimatedComponent(Body1)

    const { name, text, theme, ...other } = this.props

    delete other.active

    const styles = tStyles(theme)

    return (
      <TouchableRipple
        rippleCentered
        rippleSpread={0.3}
        rippleColor={theme.colors.primary}
        {...other}>
        <Animated.View
          style={[
            styles.base,
            animate(styles.base, styles.active, this._activateAV),
          ]}>
          <AnimatedIcon
            name={name}
            style={animate(styles.icon, styles.iconActive, this._activateAV)} />
          <AnimatedBody1
            style={animate(styles.text, styles.textActive, this._activateAV)}>
            {text}
          </AnimatedBody1>
        </Animated.View>
      </TouchableRipple>
    )
  }
}

BottomNavigationIcon.propTypes = {
  /**
   * The name of the icon, from material icons.
   */
  name: PropTypes.string.isRequired,
  /**
   * The text underneath the icon.
   */
  text: PropTypes.string.isRequired,
  /**
   * Will activate the icon if set to true.
   */
  active: PropTypes.bool,

  // connectTheme
  theme: PropTypes.object.isRequired,
}

export default
  connectTheme(
  BottomNavigationIcon)

const tStyles = theme => ({
  base: {
    minWidth: 56,
    maxWidth: 144,
    marginTop: 8,
    marginBottom: 10,
    paddingHorizontal: 12,

    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  active: {
    marginTop: 6,
  },

  icon: {
    color: Colors.blackSecondary,
  },

  iconActive: {
    color: theme.colors.primary,
  },

  text: {
    color: Colors.blackSecondary,
    fontSize: 12,
  },

  textActive: {
    color: theme.colors.primary,
    fontSize: 14,
  },
})
