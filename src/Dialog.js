import React, { Component, PropTypes } from 'react'
import { View, Animated } from 'react-native-universal'
import { animate } from 'uranium'

import { Title, Animations, Colors, Shadows, gu } from './index'

class Dialog extends Component {
  state = { visible: this.props.active }

  componentWillReceiveProps(next) {
    const { active } = this.props
    if (!active && next.active) {
      this.setState({ visible: true })
      Animations.entrance(this._showAV).start()
    }
    if (active && !next.active) {
      Animations.exit(this._showAV).start(() => {
        this.setState({ visible: false })
      })
    }
  }

  _showAV = new Animated.Value(this.props.active ? 1 : 0)

  render() {
    const { title, actions, children } = this.props
    const { visible } = this.state

    if (!visible) return <View />

    return (
      <Animated.View
        style={[
          styles.overlay,
          animate(['backgroundColor'], styles.overlay, styles.overlayVisible, this._showAV),
        ]}>
        <Animated.View
          style={[
            styles.dialog,
            animate(['top', 'opacity'], styles.dialog, styles.dialogVisible, this._showAV),
          ]}>
          {!!title &&
            <View style={styles.title}><Title>{title}</Title></View>
          }
          <View style={[styles.body, !title && styles.bodyWithoutTitle]}>{children}</View>
          {!!actions &&
            <View style={styles.actions}>
              {Array.isArray(actions) ? React.Children.toArray(actions) : actions}
            </View>
          }
        </Animated.View>
      </Animated.View>
    )
  }
}

Dialog.propTypes = {
  title: PropTypes.string,
  /**
   * Whether or not the Dialog is active.
   */
  actions: PropTypes.node,
  active: PropTypes.bool,

  children: PropTypes.node,
}

Dialog.defaultProps = {
  active: false,
}

export default Dialog

const styles = {
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'rgba(0, 0, 0, 0)',

    zIndex: 2400,
    elevation: 24,
  },

  overlayVisible: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },

  dialog: {
    minWidth: 70 * gu,
    backgroundColor: Colors.white,

    opacity: 0,

    ...Shadows.dp24,
  },

  dialogVisible: {
    opacity: 1,
  },

  title: {
    paddingHorizontal: 6 * gu,
    paddingTop: 6 * gu,
    paddingBottom: 5 * gu,
  },

  body: {
    paddingHorizontal: 6 * gu,
    paddingBottom: 6 * gu,
  },

  bodyWithoutTitle: {
    paddingTop: 6 * gu,
  },

  actions: {
    paddingRight: 2 * gu,
    paddingLeft: 6 * gu,
    paddingVertical: 2 * gu,

    alignItems: 'flex-end',
  },
}
