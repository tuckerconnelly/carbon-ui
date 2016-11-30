import React, { Component, PropTypes } from 'react'
import { View, Animated } from 'react-native-universal'
import { animate } from 'uranium'

import { Title, Animations, Colors, Elevation, gu } from '../index'

/**
 * Dialogs inform users about a specific task and may contain critical
 * information, require decisions, or involve multiple tasks.
 *
 * ### Examples
 *
 *      import React from 'react'
 *      import { View } from 'react-native-universal'
 *      import { Dialog, FlatButton, Body1 } from 'carbon-ui'
 *
 *      export default () =>
 *        <View style={{ height: 300 }}>
 *          <Dialog
 *            title="Title"
 *            actions={[
 *              <FlatButton>No</FlatButton>,
 *              <FlatButton>Yes</FlatButton>
 *            ]}
 *            active>
 *            <Body1>Body of the dialog here</Body1>
 *           </Dialog>
 *        </View>
 *
 */
class Dialog extends Component {
  state = { visible: this.props.active }

  componentWillReceiveProps(next) {
    const { active } = this.props
    if (!active && next.active) {
      this.setState({ visible: true })
      Animations.entrance(this._showAV).start()
    }
    if (active && !next.active) {
      Animations.exit(this._showAV, 0).start(() => {
        this.setState({ visible: false })
      })
    }
  }

  _showAV = new Animated.Value(this.props.active ? 1 : 0)

  render() {
    const { title, actions, children } = this.props
    const { visible } = this.state

    return (
      <Animated.View
        style={[
          styles.overlay,
          animate(['backgroundColor'], styles.overlay, styles.overlayVisible, this._showAV),
          // HACK Just returning a <View /> if !visible freezes iOS for some reason :P
          !visible && styles.hidden,
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
  /**
   * The title of the dialog.
   */
  title: PropTypes.string,
  /**
   * The actions, can be an array (say, of FlatButtons) or a full element itself.
   */
  actions: PropTypes.node,
  /**
   * Whether or not the Dialog is active.
   */
  active: PropTypes.bool,
  /**
   * The contents of the dialog
   */
  children: PropTypes.node.isRequired,
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
    overflow: 'hidden',
    elevation: 24,
  },

  hidden: {
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  },

  overlayVisible: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },

  dialog: {
    minWidth: 70 * gu,
    backgroundColor: Colors.white,

    opacity: 0,

    ...Elevation.dp24,
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

    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
}
