import React, { PropTypes, Component } from 'react'
import { Animated } from 'react-native'
import ps from 'react-native-ps'
import { animate } from 'uranium'
import omit from 'lodash/omit'

import { Animations, Breakpoints, Type, gu, connectTheme } from '../index'

const PIXELS_PER_CHARACTER = 7

// Estimate lines to animate maxHeight
export function calculateLines(text, width) {
  const charactersPerLine = (width / PIXELS_PER_CHARACTER) || 1
  return Math.ceil((text || '').length / charactersPerLine)
}

/**
 * Error component for the TextField. Normally you wouldn't use this, but you
 * you could use it for a generic form error or something.
 */
class TextFieldError extends Component {
  // Using state.text to delay the removal of the text so it.
  // can animate/fade out.
  state = {
    text: this.props.children,
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.children && nextProps.children) return this._show(nextProps.children)
    if (this.props.children && !nextProps.children) return this._hide()
    if (this.props.children !== nextProps.children) return this._changeTo(nextProps.children)
    return null
  }

  _setWidth = ({ nativeEvent: { layout: { width } } }) => {
    this.width = width
  }

  width = 0
  heightAV = new Animated.Value(this.props.children ? 1 : 0)
  opacityAV = new Animated.Value(this.props.children ? 1 : 0)

  _show(text) {
    this.setState({ text })
    Animations.standard(this.heightAV).start()
    Animations.standard(this.opacityAV, { delay: 50 }).start()
  }

  _hide() {
    Animations.standard(this.heightAV, { delay: 50, toValue: 0 }).start()
    Animations.standard(this.opacityAV, { toValue: 0 })
      .start(() => this.setState({ text: '' }))
  }

  _changeTo(text) {
    Animations.standard(this.opacityAV, { toValue: 0, duration: 150 }).start(() => {
      this.setState({ text })
      Animations.standard(this.opacityAV, { duration: 450 }).start()
    })
  }

  get styles() { return styles(this.props.theme) }

  render() {
    const { style, ...other } = this.props

    const estimatedLines = calculateLines(this.state.text, this.width)

    return (
      <Animated.Text
        style={[
          this.styles.base,
          style,
          animate('maxHeight', 0, estimatedLines * 4 * gu, this.heightAV),
          animate('marginBottom', this.styles.base, this.styles.shown, this.heightAV),
          animate('opacity', this.styles.base, this.styles.shown, this.opacityAV),
        ]}
        {...omit(other, 'children')}
        onLayout={this._setWidth}>
        {this.state.text}
      </Animated.Text>
    )
  }
}

TextFieldError.propTypes = {
  style: PropTypes.object,
  /**
   * The error text. The height expands to show it.
   */
  children: PropTypes.node,

  // connectTheme
  theme: PropTypes.object.isRequired,
}

const styles = theme => ps({
  base: {
    marginBottom: 0,

    ...Type.caption,
    color: theme.colors.error,

    opacity: 0,
    overflow: 'hidden',
  },

  shown: {
    marginBottom: 8,

    opacity: 1,

    [Breakpoints.ml]: {
      marginBottom: 4,
    },
  },
})

export default
  connectTheme(
  TextFieldError)
