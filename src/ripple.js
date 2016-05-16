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
  }

  setResponder() { return true }

  start(e) {
    const { rippleSpread, rippleOpacity, rippleVelocity, onPressIn } = this.props
    const { width, height } = this.position

    this.setState({
      // Create a new ripple
      ripples: [
        ...this.state.ripples,
        {
          startTime: Date.now(),

          size: Math.sqrt(width * width + height * height) * rippleSpread,
          x: e.nativeEvent.pageX - this.position.pageX,
          y: e.nativeEvent.pageY - this.position.pageY,
          scale: new Animated.Value(0),
          opacity: new Animated.Value(rippleOpacity),
        },
      ],
    }, () => {
      // And then start the expansion animation
      const { scale, size } = this.state.ripples[this.state.ripples.length - 1]
      Animated.timing(
        scale,
        {
          toValue: 1,
          duration: size / rippleVelocity,
          easing: Easing.out(Easing.ease),
        }
      ).start()
    })

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
    const { rippleColor, ...other } = this.props
    return (
      <TouchableWithoutFeedback
        {...other}
        onPressIn={this.start}
        onPressOut={this.end}>
        <View style={styles.container} ref="container">
          {
            this.state.ripples.map((ripple, i) =>
              <Animated.View
                key={i}
                style={{
                  position: 'absolute',
                  left: ripple.x,
                  top: ripple.y,

                  width: ripple.size,
                  height: ripple.size,
                  borderRadius: ripple.size / 2,

                  backgroundColor: rippleColor,

                  opacity: ripple.opacity,

                  transform: [
                    { translateX: -ripple.size / 2 },
                    { translateY: -ripple.size / 2 },
                    { scale: ripple.scale },
                  ],
                }} />
            )
          }
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

  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
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
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,

    overflow: 'hidden',
  },
}
