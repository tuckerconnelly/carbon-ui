import React, { Component, PropTypes } from 'react'
import { Animated, TouchableWithoutFeedback, View } from 'react-native-universal'
import Uranium, { animate } from 'uranium'
import { Animations, Breakpoints, Shadows, Colors, gu } from './index'

/**
 * The navigation drawer slides in from the left and contains the navigation
 * destinations for your app.
 */
class NavigationDrawer extends Component {
  state = { shown: this.props.open }

  componentWillReceiveProps(next) {
    const { open } = this.props

    if (!open && next.open) {
      this.setState({ shown: true }, () => {
        Animations.entrance(this._openAV).start()
      })
    }
    if (open && !next.open) {
      Animations.exit(this._openAV, 0).start(() => {
        this.setState({ shown: false })
      })
    }
  }

  _openAV = new Animated.Value(this.props.open)

  render() {
    const { onOverlayPress, children } = this.props

    if (!this.state.shown) return <View />

    return (
      <View style={styles.base}>
        <TouchableWithoutFeedback onPress={onOverlayPress}>
          <Animated.View
            style={[
              styles.overlay,
              animate('backgroundColor', Colors.blackTransparent, Colors.blackSecondary, this._openAV),
            ]} />
        </TouchableWithoutFeedback>
        <Animated.View
          css={[
            styles.menu,
            animate(styles.menuClosed, styles.menuOpen, this._openAV),
          ]}>
          {children}
        </Animated.View>
      </View>
    )
  }
}

NavigationDrawer.propTypes = {
  /**
   * `true` if open, `false` if closed. Will animate open/closed when this prop
   * switches.
   */
  open: PropTypes.bool,
  /**
   * Callback for when the overlay is pressed
   */
  onOverlayPress: PropTypes.func,

  children: PropTypes.node,
}

NavigationDrawer.defaultProps = {
  open: false,
}

export default Uranium(NavigationDrawer)

const styles = {
  base: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,

    zIndex: 200,
  },

  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },

  menu: {
    position: 'absolute',
    top: 0,
    bottom: 0,

    width: 70 * gu,

    backgroundColor: Colors.white,

    ...Shadows.dp16,

    [Breakpoints.sm]: {
      width: 80 * gu,
    },
  },

  menuClosed: {
    left: -70 * gu,

    [Breakpoints.sm]: {
      left: -80 * gu,
    },
  },

  menuOpen: {
    left: 0,

    [Breakpoints.sm]: {
      left: 0,
    },
  },
}
