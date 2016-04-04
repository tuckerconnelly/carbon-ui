import React, { Animated, Component, Easing, PropTypes, View } from 'react-native'

const defaultOptions = {
  color: 'black',
  spread: 2,
  opacity: 0.2,
  // px/ms
  velocity: 1,
}

export default function ripple(optionsOrComponent, passedOptions = {}) {
  // Handle ripple({ ...options })(component)
  if (typeof optionsOrComponent !== 'function') {
    return component => ripple(component, { ...optionsOrComponent })
  }

  let WrappedComponent = optionsOrComponent

  const options = { ...defaultOptions, ...passedOptions }

  // Handle stateless components
  if (!WrappedComponent.render && !WrappedComponent.prototype.render) {
    WrappedComponent = class extends Component {
      render() {
        return optionsOrComponent(this.props, this.context)
      }
    }
  }

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
      const { spread, opacity } = options
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
            duration: size / options.velocity,
            easing: Easing.out(Easing.ease),
          }
        ).start()
      })
    }

    end() {
      const { opacity, startTime, size } = this.state.ripples[this.state.ripples.length - 1]

      const duration = size / options.velocity

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
      const { children, ...other } = this.props
      return (
        <WrappedComponent
          onLayout={this.getDimensions}
          onStartShouldSetResponder={this.setResponder}
          onResponderGrant={this.start}
          onResponderRelease={this.end}
          {...other}>
          { children }
          <View ref="container" style={styles.container}>
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

                  backgroundColor: options.color,

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
        </WrappedComponent>
      )
    }
  }

  Ripple.propTypes = {
    children: PropTypes.node,
    style: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
  }

  return Ripple
}

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
