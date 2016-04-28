import React from './React'
const { Animated, Component, Easing, PropTypes, View } = React

class Ripple extends Component {
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
    const { spread, opacity, velocity } = this.props
    const { width, height } = this.position

    this.setState({
      ripples: [
        ...this.state.ripples,
        {
          startTime: Date.now(),

          size: Math.sqrt(width * width + height * height) * spread,
          x: e.nativeEvent.pageX - this.position.pageX,
          y: e.nativeEvent.pageY - this.position.pageY,
          scale: new Animated.Value(0),
          opacity: new Animated.Value(opacity),
        },
      ],
    }, () => {
      const { scale, size } = this.state.ripples[this.state.ripples.length - 1]
      Animated.timing(
        scale,
        {
          toValue: 1,
          duration: size / velocity,
          easing: Easing.out(Easing.ease),
        }
      ).start()
    })
  }

  end() {
    const { opacity, startTime, size } = this.state.ripples[this.state.ripples.length - 1]

    const duration = size / this.props.velocity

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
  }

  render() {
    const { color } = this.props
    return (
      <View
        ref="container"
        onLayout={this.getDimensions}
        style={styles.container}
        onStartShouldSetResponder={this.setResponder}
        onResponderGrant={this.start}
        onResponderRelease={this.end}>
      <View ref="test" />
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

              backgroundColor: color,

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
    )
  }
}

Ripple.propTypes = {
  color: PropTypes.string,
  spread: PropTypes.number,
  opacity: PropTypes.number,
  velocity: PropTypes.number,
}

Ripple.defaultProps = {
  color: 'black',
  spread: 2,
  opacity: 0.2,
  velocity: 1, // px/ms
}

export default Ripple

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
