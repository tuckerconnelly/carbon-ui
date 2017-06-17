import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Animated } from 'react-native'
import { animate } from 'uranium'

import { Animations, FlatButton, Body1, Elevation } from '../index'

/**
 * Snackbars provide brief feedback about an operation through a message at the
 * bottom of the screen.
 */
class Snackbar extends Component {
  componentWillReceiveProps(next) {
    const { shown, autoHideDuration, onRequestHide } = this.props

    // NOTE Was getting an exception with `useNativeDriver` and transform.translateY,
    // using non-native `bottom` for now.
    if (!shown && next.shown) {
      Animations.entrance(this._showAV).start()
      this._autoHideTimeout = setTimeout(onRequestHide, autoHideDuration)
    }

    if (shown && !next.shown) {
      clearTimeout(this._autoHideTimeout)
      Animations.tempExit(this._showAV, {
        toValue: 0,
      }).start()
    }
  }

  _showAV = new Animated.Value(this.props.shown ? 1 : 0)
  _autoHideTimeout = null

  render() {
    const { children, actionText, onPressAction } = this.props

    return (
      <Animated.View
        style={[
          styles.base,
          animate(styles.base, styles.shown, this._showAV),
        ]}>
        <Body1 style={styles.text}>{children}</Body1>
        {actionText &&
          <FlatButton
            style={styles.action}
            onPress={onPressAction}>
            {actionText}
          </FlatButton>
        }
      </Animated.View>
    )
  }
}

Snackbar.propTypes = {
  /**
   * Will show the Snackbar when set to true
   */
  shown: PropTypes.bool,
  /**
   * The text of the snackbar.
   */
  children: PropTypes.string,
  /**
   * The text of the action button.
   */
  actionText: PropTypes.node,
  /**
   * The onPress prop of the action button.
   */
  onPressAction: PropTypes.func,
  /**
   * The duration in milliseconds after appearing that props.onRequestDeactivate
   * will be called.
   */
  autoHideDuration: PropTypes.number,
  /**
   * Called once the props.autoHideDuration passes
   */
  onRequestHide: PropTypes.func,
}

Snackbar.defaultProps = {
  autoHideDuration: 3000,
}

export default Snackbar

const styles = {
  base: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -48,

    alignSelf: 'center',

    paddingVertical: 14,
    paddingHorizontal: 24,

    backgroundColor: '#323232',

    flexDirection: 'row',

    ...Elevation.dp8,
  },

  shown: {
    bottom: 0,
  },

  text: {
    color: 'white',
  },

  action: {
    marginLeft: 24,
  },
}
