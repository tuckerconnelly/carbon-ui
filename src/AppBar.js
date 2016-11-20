import React, { Component, PropTypes } from 'react'
import { Animated } from 'react-native-universal'
import Uranium, { animate } from 'uranium'
import ps from 'react-native-ps'
import omit from 'lodash/omit'
import {
  IconToggle,
  Title,

  Animations,
  Breakpoints,
  Colors,
  Shadows,
  gu,

  connectTheme,
} from './index'

/**
 * The app bar, formerly known as the action bar in Android, is a special kind
 * of toolbar that’s used for branding, navigation, search, and actions.
 */

const ELEVATE_DURATION = 175

class AppBar extends Component {
  componentWillReceiveProps(next) {
    const { elevated } = this.props

    if (!elevated && next.elevated) {
      Animations.standard(this._elevateAV, 1, ELEVATE_DURATION).start()
    }

    if (elevated && !next.elevated) {
      Animations.standard(this._elevateAV, 0, ELEVATE_DURATION).start()
    }
  }

  _elevateAV = new Animated.Value(this.props.elevated | 0) // eslint-disable-line no-bitwise

  render() {
    const { title, leftIcon, onLeftIconPress, theme, css, children, ...other } = this.props

    const otherWithoutAppBarProps = omit(other,
      'elevated',
    )

    const styles = tStyles(theme)

    return (
      <Animated.View
        css={[
          styles.base,
          animate(Shadows.dp0, Shadows.dp4, this._elevateAV),
          css,
        ]}
        {...otherWithoutAppBarProps}>
        <IconToggle
          iconName={leftIcon}
          style={styles.icon}
          iconStyle={styles.iconIcon}
          rippleColor={Colors.white}
          onPress={onLeftIconPress} />
        <Title style={styles.title}>{title}</Title>
        {children}
      </Animated.View>
    )
  }
}

AppBar.propTypes = {
  /**
   * The title on the AppBar
   */
  title: PropTypes.string,
  /**
   * The material icon name of the left icon
   */
  leftIcon: PropTypes.string,
  /**
   * Callback for handling presses on the left icon
   */
  onLeftIconPress: PropTypes.func,
  /**
   * `true` if the AppBar is elevated and has shadows. `false` if you want a
   * flat AppBar
   */
  elevated: PropTypes.bool,

  /**
   * Children inserted after the title
   */
  children: PropTypes.node,
  css: PropTypes.object,

  // connectTheme
  theme: PropTypes.object,
}

AppBar.defaultProps = {
  leftIcon: 'menu',
}

export default connectTheme(Uranium(AppBar))

const IOS_HEADING_SIZE = 20
const tStyles = theme => ps({
  base: {
    height: 14 * gu,
    padding: 1 * gu,

    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: theme.primary,

    ...Shadows.dp4,

    zIndex: 100,

    [Breakpoints.sm]: {
      height: 12 * gu,
    },

    [Breakpoints.ml]: {
      height: 16 * gu,
    },
  },

  icon: {
    marginRight: 5 * gu,
  },

  iconIcon: {
    color: Colors.white,
  },

  title: {
    color: Colors.white,
  },

  // Account for heading on iOS in portrait mode
  ios: {
    base: {
      height: (14 * gu) + IOS_HEADING_SIZE,
      paddingTop: IOS_HEADING_SIZE,

      [Breakpoints.sm]: {
        paddingTop: 4,
      },
    },
  },
})
