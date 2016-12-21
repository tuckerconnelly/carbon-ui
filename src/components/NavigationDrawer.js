import React, { Component, PropTypes } from 'react'
import { Animated, TouchableWithoutFeedback, View } from 'react-native'
import ps from 'react-native-ps'
import Uranium, { animate } from 'uranium'
import { Animations, Breakpoints, Elevation, Colors, gu } from '../index'

/**
 * The navigation drawer slides in from the left and contains the navigation
 * destinations for your app.
 *
 *
 * ### Examples
 *
 *
 *      import React, { Component } from 'react'
 *      import { View } from 'react-native'
 *      import { NavigationDrawer, List, ListItem, RaisedButton } from 'carbon-ui'
 *
 *      export default class Example extends Component {
 *        state = { open: false }
 *
 *        _toggleOpen = () => this.setState({ open: !this.state.open })
 *
 *        render() {
 *          return (
 *            <View style={{ height: 200 }}>
 *              <NavigationDrawer
 *                open={this.state.open}
 *                onOverlayPress={this._toggleOpen}>
 *                <List>
 *                  <ListItem
 *                    primaryText="Link one"
 *                    onPress={this._toggleOpen} />
 *                  <ListItem
 *                    primaryText="Link two"
 *                    onPress={this._toggleOpen} />
 *                </List>
 *              </NavigationDrawer>
 *              <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
 *                <RaisedButton
 *                  onPress={this._toggleOpen}>
 *                  Toggle
 *                </RaisedButton>
 *              </View>
 *            </View>
 *          )
 *        }
 *      }
 *
 */
class NavigationDrawer extends Component {
  state = { shown: this.props.open }

  async componentWillReceiveProps(next) {
    const { open, onFinishOpening, onStartClosing } = this.props

    if (!open && next.open) {
      this.setState({ shown: true }, () => {
        Animations.entrance(this._openAV).start(() => {
          onFinishOpening()
          this.setState({ fullyOpen: true })
        })
      })
    }
    if (open && !next.open) {
      await onStartClosing()
      this.setState({ fullyOpen: false })
      Animations.exit(this._openAV, { toValue: 0 })
        .start(() => this.setState({ shown: false }))
    }
  }

  _openAV = new Animated.Value(this.props.open ? 1 : 0)

  render() {
    const { menuStyle, onOverlayPress, children } = this.props

    return (
      <View
        style={[
          styles.base,
          !this.state.shown && styles.hidden,
        ]}>
        <TouchableWithoutFeedback onPress={onOverlayPress}>
          <Animated.View
            style={[
              styles.overlay,
              animate('opacity', 0, 0.54, this._openAV),
            ]} />
        </TouchableWithoutFeedback>
        <Animated.View
          css={styles.menu}
          style={[
            animate(styles.menuClosed, styles.menuOpen, this._openAV),
            // Fixes a bug on chrome where scrollbar isn't lined up to the edge
            // of the container when using translateX
            this.state.fullyOpen && styles.menuFullyOpen,
          ].concat(menuStyle)}>
          {children}
        </Animated.View>
      </View>
    )
  }
}

NavigationDrawer.propTypes = {
  /**
   * Will open the drawer if set to true.
   */
  open: PropTypes.bool,
  /**
   * The style of the menu.
   */
  menuStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /**
   * Callback for when the overlay is pressed
   */
  onOverlayPress: PropTypes.func,
  /**
   * Callback for when the drawer is finished opening. Use this to load in the
   * the content afterwards if open/close animation performance is poor.
   */
  onFinishOpening: PropTypes.func,
  /**
   * Callback for when the drawer is starting to close. Use this in conjunction
   * with onFinishOpening for performance optimization. If it returns a promise,
   * it'll wait for the promise to resolve before starting the closing animation.
   */
  onStartClosing: PropTypes.func,

  children: PropTypes.node,
}

NavigationDrawer.defaultProps = {
  open: false,
  onFinishOpening: () => 0,
  onStartClosing: () => 0,
}

export default Uranium(NavigationDrawer)

const styles = ps({
  base: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,

    zIndex: 200,
  },

  hidden: {
    zIndex: -1,
  },

  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,

    backgroundColor: 'black',
  },

  menu: {
    position: 'absolute',
    top: 0,
    bottom: 0,

    width: 70 * gu,

    backgroundColor: Colors.white,

    ...Elevation.dp16,

    [Breakpoints.sm]: {
      width: 80 * gu,
    },
  },

  menuClosed: {
    transform: [{ translateX: -70 * gu }],

    [Breakpoints.sm]: {
      transform: [{ translateX: -80 * gu }],
    },
  },

  menuOpen: {
    transform: [{ translateX: 0 }],

    [Breakpoints.sm]: {
      transform: [{ translateX: 0 }],
    },
  },


  // HACK Elevation overrides zIndex on android--this puts the base higher than
  // everything else (namely, the AppBar)
  android: {
    base: {
      elevation: 16,
    },

    hidden: {
      elevation: undefined,
    },
  },

  web: {
    menuFullyOpen: {
      transform: null,
    },
  },
})
