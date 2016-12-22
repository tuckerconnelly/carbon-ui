import React, { Component, PropTypes } from 'react'
import { Animated, View } from 'react-native'

import { Animations, FlatButton, Body1, Elevation } from 'carbon-ui'

/**
 * Snackbars provide brief feedback about an operation through a message at the
 * bottom of the screen.
 */
class Snackbar extends Component {
  componentWillReceiveProps(next) {
    const { shown, autoHideDuration, onRequestHide } = this.props

    if (!shown && next.shown) {
      Animations.entrance(this._activateAV, { useNativeDriver: true }).start()
      this._autoHideTimeout = setTimeout(onRequestHide, autoHideDuration)
    }

    if (shown && !next.shown) {
      clearTimeout(this._autoHideTimeout)
      Animations.tempExit(this._activateAV, {
        toValue: 0,
        useNativeDriver: true,
      }).start()
    }
  }

  _activateAV = new Animated.Value(this.props.children)
  _autoHideTimeout = null

  render() {
    const { children, actionText, onPressAction } = this.props
    return (
      <View style={styles.base}>
        <Body1>{children}</Body1>
        {actionText &&
          <FlatButton
            style={styles.action}
            onPress={onPressAction}>
            {actionText}
          </FlatButton>
        }
      </View>
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
  onPressAction: PropTypes.function,
  /**
   * The duration in milliseconds after appearing that props.onRequestDeactivate
   * will be called.
   */
  autoHideDuration: PropTypes.number,
  /**
   * Called once the props.autoHideDuration passes
   */
  onRequestHide: PropTypes.function,
}

Snackbar.defaultProps = {
  autoHideDuration: 400,
}

export default Snackbar

const styles = {
  base: {
    position: 'absolute',
    bottom: 0,

    paddingVertical: 14,
    paddingHorizontal: 24,

    backgroundColor: '#323232',

    flexDirection: 'row',

    ...Elevation.dp8,
  },

  action: {
    marginLeft: 24,
  },
}
