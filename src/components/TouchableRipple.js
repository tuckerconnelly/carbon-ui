/* eslint-disable react/prefer-es6-class, react/prop-types */

import React from 'react'
import createReactClass from 'create-react-class'
import PropTypes from 'prop-types'
import {
  Animated,
  Easing,
  TouchableWithoutFeedback,
  Touchable,
  TouchableNativeFeedback,
  View,
  Platform,
} from 'react-native'
import omit from 'lodash/omit'
import Color from 'color'

const PRESS_RETENTION_OFFSET = { top: 20, left: 20, right: 20, bottom: 30 }

/**
 * Ink ripples confirm user input by immediately expanding outward from the
 * point of touch. The card lifts to indicate an active state.
 *
 * ### Examples
 *
 *      import React from 'react'
 *      import { View } from 'react-native'
 *      import { Paper, TouchableRipple, Body1, Colors, gu } from 'carbon-ui'
 *
 *      export default () =>
 *        <View>
 *          <TouchableRipple>
 *            <View style={{ padding: 4 * gu }}>
 *              <Body1>Simple TouchableRipple</Body1>
 *            </View>
 *          </TouchableRipple>
 *          <TouchableRipple rippleColor={Colors.pinkA200}>
 *            <View style={{ padding: 4 * gu }}>
 *              <Body1>Colorful ripple</Body1>
 *            </View>
 *          </TouchableRipple>
 *        </View>
 */
const TouchableRipple = createReactClass({
  propTypes: {
    ...TouchableWithoutFeedback.propTypes,
    /**
     * The color of the ripple.
     */
    rippleColor: PropTypes.string,
    /**
     * How large the ripple gets. It's multipled by the diagonal length of the
     * TouchableRipple.
     */
    rippleSpread: PropTypes.number,
    /**
     * The opacity of the ripple
     */
    rippleOpacity: PropTypes.number,
    /**
     * The duration of the ripple _and_ the ripple fade out, in ms. So multiply
     * it by 2 to get the full duration.
     */
    rippleDuration: PropTypes.number,
    /**
     * Will center the ripple if set to true.
     */
    rippleCentered: PropTypes.bool,

    /**
     * The contents of the ripple. Unlike other Touchables, doesn't need to be
     * a single element.
     */
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.number]),
  },

  mixins: [Touchable.Mixin],

  getDefaultProps() {
    return {
      rippleColor: 'black',
      rippleSpread: 1,
      rippleOpacity: 0.2,
      rippleDuration: 300, // ms
      rippleCentered: false,
    }
  },

  getInitialState() {
    return {
      ...this.touchableGetInitialState(),
      ripples: [],
    }
  },

  componentWillUnmount() {
    clearInterval(this._cleanupTimeout)
  },

  async getLayout() {
    if (this._layoutChanged) {
      this._layout = await new Promise(resolve => {
        this._container.measure((x, y, width, height, pageX, pageY) => {
          resolve({ x, y, width, height, pageX, pageY })
        })
      })
    }
    return this._layout
  },

  _layoutChanged: false,
  _layout: null,
  _container: null,

  _handleLayout(e) {
    this._layoutChanged = true

    this.props.onLayout && this.props.onLayout(e)
  },

  measure(cb) { this._container.measure(cb) },

  /**
   * `Touchable.Mixin` self callbacks. The mixin will invoke these if they are
   * defined on your component.
   */
  touchableHandleActivePressIn(e) {
    this.start(e)
    this.props.onPressIn && this.props.onPressIn(e)
  },

  touchableHandleActivePressOut(e) {
    this.end(e)
    this.props.onPressOut && this.props.onPressOut(e)
  },

  touchableHandlePress(e) {
    this.props.onPress && this.props.onPress(e)
  },

  touchableHandleLongPress(e) {
    this.props.onLongPress && this.props.onLongPress(e)
  },

  touchableGetPressRectOffset() {
    return this.props.pressRetentionOffset || PRESS_RETENTION_OFFSET
  },

  touchableGetHitSlop() {
    return this.props.hitSlop
  },

  touchableGetHighlightDelayMS() {
    return this.props.delayPressIn || 0
  },

  touchableGetLongPressDelayMS() {
    return this.props.delayLongPress === 0 ? 0 :
      this.props.delayLongPress || 500
  },

  touchableGetPressOutDelayMS() {
    return this.props.delayPressOut
  },

  _onKeyEnter(e, callback) {
    const ENTER = 13
    if (e.keyCode === ENTER) {
      callback && callback(e)
    }
  },

  _onKeyDown(e) { this._onKeyEnter(e, this.touchableHandleActivePressIn) },
  _onKeyUp(e) { this._onKeyEnter(e, this.touchableHandleActivePressOut) },
  _onKeyPress(e) { this._onKeyEnter(e, this.touchableHandlePress) },

  async start(e) {
    if (this.props.disabled) return

    const { rippleSpread, rippleOpacity, rippleDuration, rippleCentered } = this.props
    const { width, height, pageX, pageY } = await this.getLayout()

    const newRipple = {
      size: Math.sqrt((width * width) + (height * height)) * 2 * rippleSpread,
      x: rippleCentered ?
        width / 2 :
        e.nativeEvent.pageX - pageX,
      y: rippleCentered ?
        height / 2 :
        e.nativeEvent.pageY - pageY,
      scale: new Animated.Value(0),
      opacity: new Animated.Value(rippleOpacity),
    }

    this.setState({ ripples: [...this.state.ripples, newRipple] })

    // Start the expansion Animations
    const { scale } = newRipple
    Animated.timing(
      scale,
      {
        toValue: 1,
        duration: rippleDuration,
        easing: Easing.out(Easing.ease),
      }
    ).start()
  },

  _cleanupTimeout: null,

  end() {
    const { ripples } = this.state
    const ripple = ripples[ripples.length - 1]
    if (!ripple) return

    const { rippleDuration } = this.props
    const { opacity } = ripple

    Animated.timing(
      opacity,
      {
        toValue: 0,
        duration: rippleDuration,
        easing: Easing.out(Easing.ease),
      }
    ).start(() => {
      // Clean up after fade out
      const pureRipples = [...this.state.ripples]
      pureRipples.splice(pureRipples.indexOf(ripple), 1)
      this.setState({ ripples: pureRipples })
    })
  },

  render() {
    const { rippleColor, rippleOpacity, disabled, children, style, ...other } = this.props

    if (Platform.OS === 'android' && Platform.Version >= 21) {
      const mergedStyle = Array.isArray(style) ?
        style.reduce((prev, curr) => ({ ...prev, ...curr })) :
        style

      return (
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple(
            Color(rippleColor).alpha(rippleOpacity).rgbString(),
            mergedStyle && mergedStyle.overflow === 'visible'
          )}
          disabled={disabled}
          {...other}>
          <View style={style}>
            {children}
          </View>
        </TouchableNativeFeedback>
      )
    }

    return (
      <View
        style={[
          styles.container,
          disabled && styles.containerDisabled,
        ].concat(style)}
        ref={c => { this._container = c }}
        onLayout={this._handleLayout}
        onKeyDown={this._onKeyDown}
        onKeyUp={this._onKeyUp}
        onKeyPress={this._onKeyPress}
        onStartShouldSetResponder={this.touchableHandleStartShouldSetResponder}
        onResponderTerminationRequest={this.touchableHandleResponderTerminationRequest}
        onResponderGrant={this.touchableHandleResponderGrant}
        onResponderMove={this.touchableHandleResponderMove}
        onResponderRelease={this.touchableHandleResponderRelease}
        onResponderTerminate={this.touchableHandleResponderTerminate}
        {...omit(other, Object.keys(TouchableRipple.propTypes))}>
        {children}
        {
          this.state.ripples.map((ripple, i) =>
            <Animated.View
              key={i}
              style={{
                position: 'absolute',
                left: ripple.scale.interpolate({
                  inputRange: [0, 1],
                  outputRange: [ripple.x, ripple.x - (ripple.size / 2)],
                }),
                top: ripple.scale.interpolate({
                  inputRange: [0, 1],
                  outputRange: [ripple.y, ripple.y - (ripple.size / 2)],
                }),

                width: ripple.scale.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, ripple.size],
                }),
                height: ripple.scale.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, ripple.size],
                }),
                borderRadius: ripple.size / 2,

                backgroundColor: rippleColor,

                opacity: ripple.opacity,
              }} />
          )
        }
      </View>
    )
  },
})

export default TouchableRipple

const styles = {
  container: {
    overflow: 'hidden',

    ...Platform.select({
      web: {
        cursor: 'pointer',
      },
    }),
  },

  containerDisabled: {
    ...Platform.select({
      web: {
        cursor: 'default',
      },
    }),
  },
}
