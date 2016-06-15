import React, { PropTypes, Component } from 'react'
import { Animated } from 'react-native-universal'
import ps from 'react-native-ps'
import { animate } from 'uranium'
import { omit } from 'lodash'

import { Animations, Breakpoints, Type } from './styles'
import connectTheme from './connectTheme'

class Error extends Component {
  // Using state.text to delay the removal of the text so it.
  // can animate/fade out.
  // See the setTimeout in hide()
  state = {
    text: this.props.children,
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.children && nextProps.children) this.show(nextProps.children)
    if (this.props.children && !nextProps.children) this.hide()
  }

  heightAV = new Animated.Value(this.props.children ? 1 : 0)
  opacityAV = new Animated.Value(this.props.children ? 1 : 0)

  show(text) {
    this.setState({ text })
    Animated.sequence([
      Animations.standard(this.heightAV),
      Animations.standard(this.opacityAV),
    ]).start()
  }

  hide() {
    Animated.sequence([
      Animations.standard(this.heightAV, 0),
      Animations.standard(this.opacityAV, 0),
    ]).start(() => { this.setState({ text: '' }) })
  }

  render() {
    const { style, theme, ...other } = this.props

    const tStyles = styles(theme)

    return (
      <Animated.Text
        style={[
          tStyles.base,
          style,
          animate(['height', 'marginBottom'], tStyles.base, tStyles.shown, this.heightAV),
          animate('opacity', tStyles.base, tStyles.shown, this.opacityAV),
        ]}
        {...omit(other, 'children')}>
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
    height: 0,
    marginBottom: 0,

    ...Type.caption,
    color: theme.error,

    opacity: 0,
  },

  shown: {
    height: 16,
    marginBottom: 8,

    opacity: 1,

    [Breakpoints.ml]: {
      marginBottom: 4,
    },
  },


  android: {
    base: {
      // Android doesn't like height: 0
      height: 1,
    },
  },
})

export default connectTheme(Error)
