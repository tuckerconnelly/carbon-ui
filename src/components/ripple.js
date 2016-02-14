import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { TransitionMotion, spring } from 'react-motion'

const defaults = {
  centered: false,
  styles: {},
  spread: 2,
}

export default (options = {}) => {
  const {
    centered: defaultCentered,
    styles: defaultStyles,
    spread: defaultSpread,
  } = { ...defaults, ...options }

  return WrappedComponent => {
    class RippledComponent extends Component {
      state = {
        ripples: [],
      }

      _ignoreNextMouseDown: false

      _getDescriptor({ pageX, pageY }) {
        const {
          left,
          top,
          height,
          width,
        } = ReactDOM.findDOMNode(WrappedComponent).getBoundingClientRect()

        const { rippleCentered, rippleSpread } = this.props

        return {
          left: rippleCentered ? 0 : pageX - left - width / 2 - window.scrollX,
          top: rippleCentered ? 0 : pageY - top - height / 2 - window.scrollY,
          width: width * rippleSpread,
        }
      }

      start(e) {
        const { disabled, ripple } = this.props
        const { ripples } = this.state
        const isTouchEvent = e.touches && e.touches.length

        if (disabled || !ripple) return
        if (!isTouchEvent && e.button !== 0) return
        if (this._ignoreNextMouseDown) {
          this._ignoreNextMouseDown = false
          return
        }

        this._ignoreNextMouseDown = isTouchEvent

        // Start
        this.setState({ ripples: ripples.concat({
          key: ripples.length,
          style: {
            scale: spring(0),
            opacity: spring(1),
          },
          data: this._getDescriptor(e),
        }) })
      }

      end() {
        const { ripples } = this.state

        this.setState({
          ripples: ripples.slice(1, ripples.length),
        })
      }

      willEnter() {
        return {
          scale: 0,
          opacity: 1,
        }
      }

      willLeave() {
        return {
          scale: spring(1),
          opacity: spring(0),
        }
      }

      passThrough(e) {
        const handlers = [
          'onMouseDown',
          'onMouseUp',
          'onMouseLeave',
          'onTouchStart',
          'onTouchEnd',
        ]
        handlers.forEach(it =>
          this.props[it](e)
        )

        switch (e.type) {
          case 'mousedown':
          case 'touchstart':
            return this.start(e)
          case 'mouseup':
          case 'mouseleave':
          case 'touchend':
            return this.end()
        }
      }

      render() {
        const styles = {
          container: {
            position: 'absolute',
            left: '0',
            top: '0',

            width: '100%',
            height: '100%',

            pointerEvents: 'none',
          },

          ripple: {
            position: 'absolute',
            left: '50%',
            top: '50%',

            borderRadius: '50%',

            backgroundColor: this.context.theme.ripple,

            pointerEvents: 'none',
            transformOrigin: '50% 50%',
          },
        }

        const { children } = this.props
        const { ripples } = this.state

        return (
          <WrappedComponent
            onMouseDown={this.passThrough}
            onTouchStart={this.passThrough}
            onMouseUp={this.passThrough}
            onMouseLeave={this.passThrough}
            onTouchEnd={this.passThrough}>
            {children}
            <TransitionMotion
              willEnter={this.willEnter}
              willLeave={this.willLeave}
              styles={ripples}>
              {interpolatedStyles =>
                <div style={styles.container}>
                  {interpolatedStyles.map(it => {
                    const { width, left, top } = it.data
                    return (
                      <span key={it.key} style={{
                        ...styles.ripple,
                        opacity: it.style.opacity,
                        transform: `translate3d(
                          ${-width / 2 + left}px,
                          ${-width / 2 + top}px,
                          0
                        ) scale(${it.style.scale})`,
                      }} />
                    )
                  })}
                </div>
              }
            </TransitionMotion>
          </WrappedComponent>
        )
      }
    }

    RippledComponent.propTypes = {
      children: PropTypes.node,
      disabled: PropTypes.bool,

      onMouseDown: PropTypes.func,
      onMouseUp: PropTypes.func,
      onMouseLeave: PropTypes.func,
      onTouchStart: PropTypes.func,
      onTouchEnd: PropTypes.func,

      ripple: PropTypes.bool,
      rippleCentered: PropTypes.bool,
      rippleStyles: PropTypes.object,
      rippleSpread: PropTypes.number,
    }

    RippledComponent.defaultProps = {
      disabled: false,

      ripple: true,
      rippleCentered: defaultCentered,
      rippleStyles: defaultStyles,
      rippleSpread: defaultSpread,
    }

    RippledComponent.contextTypes = {
      theme: PropTypes.object,
    }

    return RippledComponent
  }
}
