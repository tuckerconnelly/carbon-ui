import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { TransitionMotion, spring } from 'react-motion'

class Ripple extends Component {
  state = {
    ripples: [],
  }

  _ignoreNextMouseDown: false

  _getClickDescription({ pageX, pageY }) {
    const {
      left,
      top,
      height,
      width,
    } = ReactDOM.findDOMNode(this).getBoundingClientRect()

    const { centered, spread } = this.props

    return {
      left: centered ? 0 : pageX - left - width / 2 - window.scrollX,
      top: centered ? 0 : pageY - top - height / 2 - window.scrollY,
      width: width * spread,
    }
  }

  start(e) {
    const { disabled } = this.props
    const { ripples } = this.state
    const isTouchEvent = e.touches && e.touches.length

    if (disabled) return
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
      data: this._getClickDescription(e),
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

    const { ripples } = this.state

    return (
      <TransitionMotion
        willEnter={this.willEnter}
        willLeave={this.willLeave}
        styles={ripples}>
        {interpolatedStyles =>
          <div
            style={styles.container}

            onMouseDown={this.start}
            onTouchStart={this.start}

            onMouseUp={this.end}
            onMouseLeave={this.end}
            onTouchEnd={this.end}>
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
    )
  }
}

Ripple.propTypes = {
  disabled: PropTypes.bool,

  centered: PropTypes.bool,
  style: PropTypes.object,
  spread: PropTypes.number,
}

Ripple.defaultProps = {
  disabled: false,

  centered: false,
  style: {},
  spread: 2,
}

Ripple.contextTypes = {
  theme: PropTypes.object,
}

export default Ripple
