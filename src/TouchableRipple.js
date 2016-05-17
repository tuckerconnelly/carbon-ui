import React, { Component, PropTypes } from 'react'
import { Animated, Easing, TouchableWithoutFeedback, View } from 'react-native-universal'

class TouchableRipple extends Component {
  constructor(props, context) {
    super(props, context)

    this.getDimensions = this.getDimensions.bind(this)
    this.start = this.start.bind(this)
    this.end = this.end.bind(this)
  }

  state = {
    ripples: [],
  };

  getDimensions() {
    this.refs.container.measure((x, y, width, height, pageX, pageY) => {
      this.position = {
        width,
        height,
        pageX,
        pageY,
      }
    })

    this.props.onLayout && this.props.onLayout()
  }

  setResponder() { return true }

  start(e) {
    const { rippleSpread, rippleOpacity, rippleVelocity, onPressIn } = this.props
    const { width, height } = this.position

    const newRipple = {
      startTime: Date.now(),

      size: Math.sqrt(width * width + height * height) * rippleSpread,
      x: e.nativeEvent.pageX - this.position.pageX,
      y: e.nativeEvent.pageY - this.position.pageY,
      scale: new Animated.Value(0),
      opacity: new Animated.Value(rippleOpacity),
    }

    this.setState({ ripples: [...this.state.ripples, newRipple] })

    // Start the expansion animation
    const { scale, size } = newRipple
    Animated.timing(
      scale,
      {
        toValue: 1,
        duration: size / rippleVelocity,
        easing: Easing.out(Easing.ease),
      }
    ).start()

    onPressIn && onPressIn()
  }

  end() {
    const { rippleVelocity, onPressOut } = this.props
    const { opacity, startTime, size } = this.state.ripples[this.state.ripples.length - 1]

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
    setTimeout(() => this.state.ripples.slice(index, 1), duration)

    onPressOut && onPressOut()
  }

  render() {
    const { rippleColor, children, ...other } = this.props
    return (
      <TouchableWithoutFeedback
        {...other}
        onLayout={this.getDimensions}
        onPressIn={this.start}
        onPressOut={this.end}>
        <View style={styles.container} ref="container">
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
          {children}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

TouchableRipple.propTypes = {
  rippleColor: PropTypes.string,
  rippleSpread: PropTypes.number,
  rippleOpacity: PropTypes.number,
  rippleVelocity: PropTypes.number,

  children: PropTypes.node,

  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
  onLayout: PropTypes.func,
}

TouchableRipple.defaultProps = {
  rippleColor: 'black',
  rippleSpread: 2,
  rippleOpacity: 0.2,
  rippleVelocity: 1, // px/ms
}

export default TouchableRipple

const styles = {
  container: {
    overflow: 'hidden',
  },
}
