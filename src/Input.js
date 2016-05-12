import React, { Component, PropTypes } from 'react'
import { Animated, Text, TextInput, View } from 'react-native-universal'
import matchMedia from 'react-native-match-media'
import Uranium from 'uranium'
import Color from 'color'
import ps from 'react-native-ps'

import connectTheme from './connectTheme'
import { Animations, Colors, Type } from './styles'
import { Breakpoints } from './styles/Grid'
import Divider from './Divider'
import Error from './Error'

const AnimatedDivider = Animated.createAnimatedComponent(Divider)

class Input extends Component {
  constructor(props) {
    super(props)

    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.focusInput = this.focusInput.bind(this)

    this.state = {
      // If the component starts with a value, start the
      // placeholder in its focused state
      labelAV: new Animated.Value(this.props.value ? 1 : 0),
      colorAV: new Animated.Value(0),
    }
  }

  componentDidMount() {
  }

  get styles() {
    return styles(this.props.theme)
  }

  handleFocus() {
    if (this.props.disabled) {
      this.refs.input.blur()
      return
    }
    Animated.timing(
      this.state.labelAV,
      { ...Animations.default, toValue: 1 }
    ).start()
    Animated.timing(
      this.state.colorAV,
      { ...Animations.default, toValue: 1 }
    ).start()
  }

  handleBlur() {
    Animated.timing(
      this.state.colorAV,
      { ...Animations.default, toValue: 0 }
    ).start()

    // Only return color to its original state if the input
    // has a value
    if (this.props.value) return

    Animated.timing(
      this.state.labelAV,
      { ...Animations.default, toValue: 0 }
    ).start()
  }

  focusInput() {
    this.refs.input.focus()
  }

  render() {
    const { placeholder, style, theme, disabled, error, ...other } = this.props
    const { colorAV, labelAV, focused } = this.state
    return (
      <View style={[this.styles.base, style]}>
        <TextInput
          ref="input"
          css={[
            this.styles.textInput,
            disabled && this.styles.disabled,
          ]}
          selectionColor={Color(theme.accent).alpha(0.87).rgbString()}
          underlineColorAndroid="transparent"
          {...other}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur} />
        <Animated.Text
          css={[
            this.styles.placeholder,
            focused && this.styles.placeholderFocus,
            disabled && this.styles.disabled,
          ]}
          style={{
            top: labelAV.interpolate({
              inputRange: [0, 1],
              outputRange: !matchMedia(Breakpoints.ml.split('@media ')[1]).matches ?
                [
                  this.styles.placeholder.top,
                  this.styles.placeholderFocus.top,
                ] :
                [
                  this.styles.placeholder[Breakpoints.ml].top,
                  this.styles.placeholderFocus[Breakpoints.ml].top,
                ],
            }),
            color: colorAV.interpolate({
              inputRange: [0, 1],
              outputRange: [
                this.styles.placeholder.color,
                this.styles.placeholderFocus.color,
              ],
            }),
            fontSize: labelAV.interpolate({
              inputRange: [0, 1],
              outputRange: [
                this.styles.placeholder.fontSize,
                this.styles.placeholderFocus.fontSize,
              ],
            }),
          }}
          onPress={this.focusInput}>
          {placeholder}
        </Animated.Text>
        <AnimatedDivider
          color={colorAV.interpolate({
            inputRange: [0, 1],
            outputRange: [
              theme.divider,
              Color(theme.accent).alpha(0.87).rgbString(),
            ],
          })}
          type={disabled && 'dotted'}
          css={this.styles.divider} />
        {error &&
          <Error css={this.styles.error}>{error}</Error>
        }
      </View>
    )
  }
}

Input.propTypes = {
  style: PropTypes.object,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,

  theme: PropTypes.object.isRequired,
}

Input.defaultProps = {
  style: {},
  placeholder: '',
  disabled: false,
}

const styles = theme => ps({
  base: {
    alignSelf: 'stretch',
  },

  textInput: {
    height: 16,
    marginTop: 40,

    ...Type.subheading,
    lineHeight: 16,

    [Breakpoints.ml]: {
      marginTop: 32,

      ...Type.subheading[Breakpoints.ml],
    },
  },

  // Applies to both input and placeholder
  disabled: {
    color: Colors.blackHint,
  },

  placeholder: {
    position: 'absolute',
    top: 40,

    ...Type.subheading,
    color: Colors.blackHint,
    lineHeight: 16,

    [Breakpoints.ml]: {
      top: 32,

      ...Type.subheading[Breakpoints.ml],
    },
  },

  placeholderFocus: {
    top: 16,
    ...Type.caption,
    color: Color(theme.accent).alpha(0.87).rgbString(),

    [Breakpoints.ml]: {
      top: 12,
    },
  },

  divider: {
    marginTop: 8,
    marginBottom: 8,

    [Breakpoints.ml]: {
      marginBottom: 4,
    },
  },

  error: {
    marginBottom: 8,

    [Breakpoints.ml]: {
      marginBottom: 4,
    },
  },


  web: {
    disabled: {
      cursor: 'default',
      userSelect: 'none',
    },
  },
})

export default connectTheme(Uranium(Input))
