/* eslint-disable react/prefer-es6-class, react/prop-types */

import React, { PropTypes } from 'react'
import {
  Animated,
  Easing,
  TouchableWithoutFeedback,
  Touchable,
  View,
} from 'react-native-universal'
import ps from 'react-native-ps'
import Uranium from 'uranium'

const PRESS_RETENTION_OFFSET = { top: 20, left: 20, right: 20, bottom: 30 }

const TouchableRipple = React.createClass({
  propTypes: {
    ...TouchableWithoutFeedback.propTypes,
    rippleColor: PropTypes.string,
    rippleSpread: PropTypes.number,
    rippleOpacity: PropTypes.number,
    rippleVelocity: PropTypes.number,

    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),

    onResponderGrant: PropTypes.func,
    onResponderRelease: PropTypes.func,
    onPress: PropTypes.func,
    onPressIn: PropTypes.func,
    onPressOut: PropTypes.func,
    onLayout: PropTypes.func,
  },

  mixins: [Touchable.Mixin],

  getDefaultProps() {
    return {
      rippleColor: 'black',
      rippleSpread: 2,
      rippleOpacity: 0.2,
      rippleVelocity: 1, // px/ms
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

  getDimensions(e) {
    // NOTE When hot-reloading, the container ref isn't available. Not sure why
    if (!this.refs.container) return

    this.refs.container.measure((x, y, width, height, pageX, pageY) => {
      this.position = { width, height, pageX, pageY }
      this.refs.container.forceUpdate()
    })

    this.props.onLayout && this.props.onLayout(e)
  },

  measure(cb) { this.refs.container.measure(cb) },

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

  position: {},

  start(e) {
    const { rippleSpread, rippleOpacity, rippleVelocity, disabled } = this.props
    const { width, height } = this.position

    if (disabled) return

    const newRipple = {
      startTime: Date.now(),

      size: Math.sqrt(width * width + height * height) * rippleSpread,
      x: e.nativeEvent.pageX - this.position.pageX,
      y: e.nativeEvent.pageY - this.position.pageY,
      scale: new Animated.Value(0),
      opacity: new Animated.Value(rippleOpacity),
    }

    this.setState({ ripples: [...this.state.ripples, newRipple] })

    // Start the expansion Animations
    const { scale, size } = newRipple
    Animated.timing(
      scale,
      {
        toValue: 1,
        duration: size / rippleVelocity,
        easing: Easing.out(Easing.ease),
      }
    ).start()
  },

  _cleanupTimeout: null,

  end() {
    const ripple = this.state.ripples[this.state.ripples.length - 1]
    if (!ripple) return

    const { rippleVelocity } = this.props
    const { opacity, startTime, size } = ripple

    const duration = size / rippleVelocity

    // Adjust duration to account for time between mousedown and
    // mouseup
    // User mouses down, 200ms passes, user mouses up
    // Duration of fadeout should be 200ms less now
    // Minimum duration of duration/2
    const adjustedDuration = Math.max(
      duration - (Date.now() - startTime),
      duration / 2
    )

    Animated.timing(
      opacity,
      {
        toValue: 0,
        duration: adjustedDuration,
        easing: Easing.out(Easing.ease),
      }
    ).start()

    // Clean up after fade out
    const index = this.state.ripples.length - 1
    this._cleanupTimeout = setTimeout(() =>
      this.setState({ ripples: this.state.ripples.splice(index, 1) })
    , adjustedDuration + 10)
  },

  render() {
    const { rippleColor, disabled, children, style, ...other } = this.props
    return (
      <View
        style={[
          styles.container,
          disabled && styles.containerDisabled,
          style,
        ]}
        ref="container"
        onLayout={this.getDimensions}
        onKeyDown={this._onKeyDown}
        onKeyUp={this._onKeyUp}
        onKeyPress={this._onKeyPress}
        onStartShouldSetResponder={this.touchableHandleStartShouldSetResponder}
        onResponderTerminationRequest={this.touchableHandleResponderTerminationRequest}
        onResponderGrant={this.touchableHandleResponderGrant}
        onResponderMove={this.touchableHandleResponderMove}
        onResponderRelease={this.touchableHandleResponderRelease}
        onResponderTerminate={this.touchableHandleResponderTerminate}
        {...other}>
        {children}
        {
          this.state.ripples.map((ripple, i) =>
            <Animated.View
              key={i}
              style={{
                position: 'absolute',
                left: ripple.scale.interpolate({
                  inputRange: [0, 1],
                  outputRange: [ripple.x, ripple.x - ripple.size / 2],
                }),
                top: ripple.scale.interpolate({
                  inputRange: [0, 1],
                  outputRange: [ripple.y, ripple.y - ripple.size / 2],
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

export default Uranium(TouchableRipple)

const styles = ps({
  container: {
    overflow: 'hidden',
  },

  web: {
    container: {
      cursor: 'pointer',

      // Fix overflow-hidden with border-radius on webkit
      WebkitMaskImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC)', // eslint-disable-line max-len
    },

    containerDisabled: {
      cursor: 'default',
    },
  },
})
