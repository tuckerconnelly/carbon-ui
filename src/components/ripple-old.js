import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { TransitionMotion, spring } from 'react-motion'

import autoPrefix from '../styles/auto-prefix'
import Transitions from '../styles/transitions'

class CircleRipple extends Component {
  componentWillAppear(callback) {
    this._initializeAnimation(callback)
  }

  componentWillEnter(callback) {
    this._initializeAnimation(callback)
  }

  componentDidAppear() {
    this._animate()
  }

  componentDidEnter() {
    this._animate()
  }

  componentWillLeave(callback) {
    const style = ReactDOM.findDOMNode(this).style
    style.opacity = 0
    setTimeout(() => callback(), 2000)
  }

  _animate() {
    const style = ReactDOM.findDOMNode(this).style
    const transitionValue = `${Transitions.easeOut('2s', 'opacity')}, ${
      Transitions.easeOut('1s', 'transform')}`
    autoPrefix.set(style, 'transition', transitionValue, this.props.muiTheme)
    autoPrefix.set(style, 'transform', 'scale(1)', this.props.muiTheme)
  }

  _initializeAnimation(callback) {
    const style = ReactDOM.findDOMNode(this).style
    style.opacity = this.props.opacity
    autoPrefix.set(style, 'transform', 'scale(0)', this.props.muiTheme)
    setTimeout(() => {
      if (this.isMounted()) callback()
    }, 0)
  }

  render() {
    const {
      color,
    } = this.props

    const styles = {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      borderRadius: '50%',
      backgroundColor: color,
    }

    return (
      <div style={[styles, this.props.style]} />
    )
  }
}

CircleRipple.propTypes = {
  color: React.PropTypes.string,
  opacity: React.PropTypes.number,
  style: React.PropTypes.object,
}

CircleRipple.defaultProps = {
  opacity: 0.16,
}




const domOffset = el => {
  const rect = el.getBoundingClientRect()
  return {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft,
  }
}

const calcDiag = (a, b) => Math.sqrt((a * a) + (b * b))

class TouchRipple extends Component {
  constructor(props, context) {
    super(props, context)

    // Touch start produces a mouse down event for compat reasons. To avoid
    // showing ripples twice we skip showing a ripple for the first mouse down
    // after a touch start. Note we don't store ignoreNextMouseDown in this.state
    // to avoid re-rendering when we change it
    this._ignoreNextMouseDown = false

    this.state = {
      ripples: [],
    }
  }

  _getRippleStyle(e) {
    const el = ReactDOM.findDOMNode(this)
    const elHeight = el.offsetHeight
    const elWidth = el.offsetWidth
    const offset = domOffset(el)
    const isTouchEvent = e.touches && e.touches.length
    const pageX = isTouchEvent ? e.touches[0].pageX : e.pageX
    const pageY = isTouchEvent ? e.touches[0].pageY : e.pageY
    const pointerX = pageX - offset.left
    const pointerY = pageY - offset.top
    const topLeftDiag = calcDiag(pointerX, pointerY)
    const topRightDiag = calcDiag(elWidth - pointerX, pointerY)
    const botRightDiag = calcDiag(elWidth - pointerX, elHeight - pointerY)
    const botLeftDiag = calcDiag(pointerX, elHeight - pointerY)
    const rippleRadius = Math.max(
      topLeftDiag, topRightDiag, botRightDiag, botLeftDiag
    )
    const rippleSize = rippleRadius * 2

    return {
      left: pointerX - rippleRadius,
      top: pointerY - rippleRadius,
      width: rippleSize,
      height: rippleSize,

      color: this.props.color || this.context.theme.ripple,
    }
  }

  start(e) {
    const isTouchEvent = e.touches && e.touches.length
    const { ripples } = this.state

    if (this._ignoreNextMouseDown && !isTouchEvent) {
      this._ignoreNextMouseDown = false
      return
    }

    // Only handle left-clicks
    if (!isTouchEvent && e.button !== 0) return

    this.setState({ ripples: ripples.concat(
      <CircleRipple
        key={ripples.length}
        style={this.props.centerRipple && this._getRippleStyle(e)}
        opacity={this.props.opacity}
        touchGenerated={isTouchEvent} />
    ) })

    this._ignoreNextMouseDown = isTouchEvent
  }

  end() {
    const { ripples } = this.state

    this.setState({
      ripples: ripples.slice(1, ripples.length),
    })
  }

  render() {
    const { ripples } = this.state

    const styles = {
      position: 'absolute',
      left: 0,
      top: 0,

      width: '100%',
      height: '100%',

      overflow: 'hidden',
    }



    return (
      <TransitionMotion
        style={[ripples.length && styles, this.props.style]}


        onMouseDown={this.start}
        onTouchStart={this.start}
        onMouseUp={this.end}
        onMouseLeave={this.end}
        onTouchEnd={this.end}>
        {ripples}
        {this.props.children}
      </TransitionMotion>
    )
  }
}

TouchRipple.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,

  centerRipple: React.PropTypes.bool,
  color: React.PropTypes.string,
  opacity: React.PropTypes.number,
}

TouchRipple.contextTypes = {
  theme: PropTypes.object,
}

export default TouchRipple
