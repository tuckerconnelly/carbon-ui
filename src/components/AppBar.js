import React, { Component, PropTypes } from 'react'
import { Animated, View, Platform } from 'react-native'
import Uranium, { animate } from 'uranium'
import omit from 'lodash/omit'
import {
  IconToggle,
  Title,

  Animations,
  Breakpoints,
  Colors,
  Elevation,
  gu,

  connectTheme,
} from '../index'

const ELEVATE_DURATION = 175

/**
 *
 * The app bar is a special kind of toolbar that’s used for branding,
 * navigation, search, and actions.
 *
 *     import React from 'react'
 *     import { View } from 'react-native'
 *     import { AppBar } from 'carbon-ui'
 *
 *     export default () =>
 *       <View>
 *         <AppBar title="The app" />
 *       </View>
 *
 *
 */
class AppBar extends Component {
  componentWillReceiveProps(next) {
    const { elevated } = this.props

    if (!elevated && next.elevated) {
      Animations.standard(this._elevateAV, { duration: ELEVATE_DURATION }).start()
    }

    if (elevated && !next.elevated) {
      Animations.standard(this._elevateAV, { toValue: 0, duration: ELEVATE_DURATION }).start()
    }
  }

  _elevateAV = new Animated.Value(this.props.elevated | 0) // eslint-disable-line no-bitwise

  render() {
    const { title, navIcon, onNavIconPress, theme, children, ...other } = this.props

    const otherWithoutAppBarProps = omit(other,
      'elevated',
    )

    const styles = tStyles(theme)

    return (
      <Animated.View
        css={[
          styles.base,
          !navIcon && styles.baseWithoutNavIcon,
          animate(Elevation.dp0, Elevation.dp4, this._elevateAV),
        ]}
        {...otherWithoutAppBarProps}>
        {navIcon &&
          <IconToggle
            name={navIcon}
            style={styles.icon}
            iconStyle={styles.iconIcon}
            rippleColor={Colors.white}
            onPress={onNavIconPress} />
        }
        <View style={styles.title}>
          <Title style={styles.titleText}>{title}</Title>
        </View>
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
   * The material icon name of the nav icon
   */
  navIcon: PropTypes.string,
  /**
   * Callback for handling presses on the nav icon
   */
  onNavIconPress: PropTypes.func,
  /**
   * Will make the AppBar flat and without shadows if false.
   */
  elevated: PropTypes.bool,

  /**
   * children are inserted after the title
   */
  children: PropTypes.node,
  css: PropTypes.object,

  // connectTheme
  theme: PropTypes.object,
}

AppBar.defaultProps = {
  navIcon: 'menu',
  elevated: true,
}

export default
  connectTheme(
  Uranium(
  AppBar))

const IOS_HEADING_SIZE = 20
const tStyles = theme => ({
  base: {
    height: 14 * gu,
    padding: 1 * gu,

    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: theme.colors.primary,

    ...Elevation.dp4,

    zIndex: 100,

    [Breakpoints.sm]: {
      height: 12 * gu,
    },

    [Breakpoints.ml]: {
      height: 16 * gu,
    },

    ...Platform.select({
      ios: {
        // Account for heading on iOS in portrait mode
        height: (14 * gu) + IOS_HEADING_SIZE,
        paddingTop: IOS_HEADING_SIZE,

        [Breakpoints.sm]: {
          paddingTop: 4,
        },
      },
    }),
  },

  baseWithoutNavIcon: {
    paddingLeft: 4 * gu,
  },

  icon: {
    marginRight: 8 * gu,
  },

  iconIcon: {
    color: Colors.white,
  },

  title: {
    flex: 1,
  },

  titleText: {
    color: Colors.white,
  },
})
