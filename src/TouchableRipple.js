import React, { Component, PropTypes } from 'react'
import { Animated, Easing, View } from 'react-native-universal'
import ps from 'react-native-ps'
import Uranium from 'uranium'


class TouchableRipple extends Component {
  state = {
    ripples: [],
  };

  componentWillUnmount() {
    clearInterval(this._cleanupTimeout)
  }

  getDimensions = e => {
    // NOTE When hot-reloading, the container ref isn't available. Not sure why
    if (!this.refs.container) return

    this.refs.container.measure((x, y, width, height, pageX, pageY) => {
      this.position = { width, height, pageX, pageY }
      this.refs.container.forceUpdate()
    })

    this.props.onLayout && this.props.onLayout(e)
  }

  measure = cb => { this.refs.container.measure(cb) }

  position = {}

  start = e => {
    const {
      rippleSpread, rippleOpacity, rippleVelocity,
      disabled,
      onPressIn, onResponderGrant,
    } = this.props
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

    onResponderGrant && onResponderGrant(e)
    onPressIn && onPressIn(e)
  }

  _cleanupTimeout

  end = e => {
    const ripple = this.state.ripples[this.state.ripples.length - 1]
    if (!ripple) return

    const { rippleVelocity, disabled, onPress, onPressOut, onResponderRelease } = this.props
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
    , duration + 10)

    if (disabled) return

    onResponderRelease && onResponderRelease(e)
    onPressOut && onPressOut(e)
    onPress && onPress(e)
  }

  grantResponder() { return true }

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
        onStartShouldSetResponder={this.grantResponder}
        onResponderGrant={this.start}
        onResponderRelease={this.end}
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
  }
}

TouchableRipple.propTypes = {
  rippleColor: PropTypes.string,
  rippleSpread: PropTypes.number,
  rippleOpacity: PropTypes.number,
  rippleVelocity: PropTypes.number,
  disabled: PropTypes.bool,

  children: PropTypes.node,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),

  onResponderGrant: PropTypes.func,
  onResponderRelease: PropTypes.func,
  onPress: PropTypes.func,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
  onLayout: PropTypes.func,
}

TouchableRipple.defaultProps = {
  rippleColor: 'black',
  rippleSpread: 2,
  rippleOpacity: 0.2,
  rippleVelocity: 1, // px/ms
  disabled: false,
}

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
