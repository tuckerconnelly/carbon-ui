import React, { Component, PropTypes } from 'react'
import { Animated, Text, TextInput, View } from 'react-native-universal'
import Uranium from 'uranium'
import Color from 'color'
import ps from 'react-native-ps'
import { animate } from 'uranium'

import connectTheme from './connectTheme'
import { Animations, Breakpoints, Colors, Type } from './styles'
import Divider from './Divider'
import Error from './Error'

const AnimatedDivider = Animated.createAnimatedComponent(Divider)

class Input extends Component {
  // If the component starts with a value, start the
  // placeholder in its focused state
  labelAV = new Animated.Value(this.props.value ? 1 : 0)
  colorAV = new Animated.Value(0)

  get styles() {
    return styles(this.props.theme)
  }

  handleFocus = () => {
    if (this.props.disabled) {
      this.refs.input.blur()
      return
    }
    Animated.timing(this.labelAV, { ...Animations.default, toValue: 1 }).start()
    Animated.timing(this.colorAV, { ...Animations.default, toValue: 1 }).start()
  }

  handleBlur = () => {
    Animated.timing(this.colorAV, { ...Animations.default, toValue: 0 }).start()

    // Only return color to its original state if the input
    // has a value
    if (this.props.value) return

    Animated.timing(this.labelAV, { ...Animations.default, toValue: 0 }).start()
  }

  focusInput = () => {
    this.refs.input.focus()
  }

  render() {
    const { placeholder, style, theme, disabled, error, ...other } = this.props
    const { styles } = this

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
            disabled && this.styles.disabled,
          ]}
          style={[
            animate(['top', 'fontSize'], styles.placeholder, styles.placeholderFocus, this.labelAV), // eslint-disable-line max-len
            animate('color', styles.placeholder, styles.placeholderFocus, this.colorAV),
          ]}
          onPress={this.focusInput}>
          {placeholder}
        </Animated.Text>
        <AnimatedDivider
          color={this.colorAV.interpolate({
            inputRange: [0, 1],
            outputRange: [
              theme.divider,
              Color(theme.accent).alpha(0.87).rgbString(),
            ],
          })}
          type={disabled && 'dotted'}
          css={this.styles.divider} />
        <Error>{error}</Error>
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
    height: 32,
    paddingHorizontal: 0,
    paddingVertical: 4,
    marginTop: 32,

    ...Type.subheading,
    lineHeight: 16,

    [Breakpoints.ml]: {
      marginTop: 28,

      ...Type.subheading[Breakpoints.ml],
    },
  },

  // Applies to both input and placeholder
  disabled: {
    color: Colors.blackHint,
  },

  placeholder: {
    position: 'absolute',
    top: 36,

    ...Type.subheading,
    color: Colors.blackHint,

    overflow: 'visible',

    [Breakpoints.ml]: {
      top: 28,

      ...Type.subheading[Breakpoints.ml],
    },
  },

  placeholderFocus: {
    top: 12,
    ...Type.caption,
    color: Color(theme.accent).alpha(0.87).rgbString(),

    [Breakpoints.ml]: {
      top: 8,
    },
  },

  divider: {
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
