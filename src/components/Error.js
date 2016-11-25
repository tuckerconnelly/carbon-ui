import React, { PropTypes, Component } from 'react'
import { Animated } from 'react-native-universal'
import ps from 'react-native-ps'
import { animate } from 'uranium'
import omit from 'lodash/omit'

import { Animations, Breakpoints, Type, gu, connectTheme } from '../index'

const PIXELS_PER_CHARACTER = 7

// Can't animate to height: auto, so multiline errors get cut off
// Calculating height temporarily until it's possible to animate maxHeight
export function calculateLines(text, width) {
  const charactersPerLine = (width / PIXELS_PER_CHARACTER) || 1
  return Math.round((text || '').length / charactersPerLine)
}

class Error extends Component {
  // Using state.text to delay the removal of the text so it.
  // can animate/fade out.
  state = {
    text: this.props.children,
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.children && nextProps.children) return this.show(nextProps.children)
    if (this.props.children && !nextProps.children) return this.hide()
    if (this.props.children !== nextProps.children) return this.changeTo(nextProps.children)
    return null
  }

  setWidth = ({ nativeEvent: { layout: { width } } }) => {
    this.width = width
  }

  width = 0
  heightAV = new Animated.Value(this.props.children ? 1 : 0)
  opacityAV = new Animated.Value(this.props.children ? 1 : 0)

  show(text) {
    this.setState({ text })
    Animations.staggered(this.heightAV, this.opacityAV).start()
  }

  hide() {
    Animations.staggered(this.heightAV, this.opacityAV, 0).start(() =>
      this.setState({ text: '' })
    )
  }

  changeTo(text) {
    Animations.standard(this.opacityAV, 0, 150).start(() => {
      this.setState({ text })
      Animations.standard(this.opacityAV, 1, 450).start()
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
          animate('height', 0, estimatedLines * 4 * gu, this.heightAV),
          animate('marginBottom', this.styles.base, this.styles.shown, this.heightAV),
          animate('opacity', this.styles.base, this.styles.shown, this.opacityAV),
        ]}
        {...omit(other, 'children')}
        onLayout={this.setWidth}>
        {this.state.text}
      </Animated.Text>
    )
  }
}

Error.propTypes = {
  theme: PropTypes.object.isRequired,
  style: PropTypes.object,
  children: PropTypes.node,
}

const styles = theme => ps({
  base: {
    marginBottom: 0,

    ...Type.caption,
    color: theme.error,

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

export default connectTheme(Error)
