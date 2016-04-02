import React, { Animated, Component, Easing, PropTypes, View } from 'react-native'

export default component => {
  let WrappedComponent = component

  // Handle stateless components
  if (!WrappedComponent.render && !WrappedComponent.prototype.render) {
    WrappedComponent = class extends Component {
      render() {
        return component(this.props, this.context)
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
      this.refs.component.measure((x, y, width, height, pageX, pageY) => {
        this.position = {
          width,
          height,
          x: pageX,
          y: pageY,
        }
      })
    }

    setResponder() { return true }

    start(e) {
      const { width, height } = this.position

      this.setState({
        ripples: [
          ...this.state.ripples,
          {
            startTime: e.nativeEvent.timestamp,

            size: Math.sqrt(width * width + height * height) * 2,
            left: e.nativeEvent.pageX - this.position.x,
            top: e.nativeEvent.pageY - this.position.y,
            scale: new Animated.Value(0),
            opacity: new Animated.Value(0.2),
          },
        ],
      })
      Animated.timing(
        this.state.ripples[this.state.ripples.length - 1].scale,
        {
          toValue: 1,
          duration: 800,
          easing: Easing.out(Easing.ease),
        }
      ).start()
    }

    end(e) {
      const { opacity, startTime } = this.state.ripples[this.state.ripples.length - 1]
      Animated.timing(
        opacity,
        {
          toValue: 0,
          duration: Math.max(800 - (e.nativeEvent.timestamp - startTime), 400),
          easing: Easing.out(Easing.ease),
        }
      ).start()
    }

    render() {
      const { children, ...other } = this.props
      return (
        <WrappedComponent
          ref="component"
          onLayout={this.getDimensions}
          onStartShouldSetResponder={this.setResponder}
          onResponderGrant={this.start}
          onResponderRelease={this.end}
          {...other}>
          { children }
          <View style={styles.container}>
          {
            this.state.ripples.map((ripple, i) =>
              <Animated.View
                key={i}
                style={[
                  styles.ripple,
                  {
                    left: ripple.left,
                    top: ripple.top,

                    width: ripple.size,
                    height: ripple.size,
                    borderRadius: ripple.size / 2,

                    opacity: ripple.opacity,

                    transform: [
                      { translateX: -ripple.size / 2 },
                      { translateY: -ripple.size / 2 },
                      { scale: ripple.scale },
                    ],
                  },
                ]}/>
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

  ripple: {
    position: 'absolute',
    top: 100,
    left: 100,

    backgroundColor: 'black',
  },
}
