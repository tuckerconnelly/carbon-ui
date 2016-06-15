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
  componentWillReceiveProps(nextProps) {
    if (!this.props.value && nextProps.value) {
      Animations.standard(this.singleLineLabelAV).start()
    }
    if (this.props.value && !nextProps.value) {
      Animations.standard(this.singleLineLabelAV, 0).start()
    }
  }

  // If the component starts with a value, start the
  // placeholder in its focused state
  labelAV = new Animated.Value(this.props.value ? 1 : 0)
  singleLineLabelAV = new Animated.Value(this.props.value ? 1 : 0)
  colorAV = new Animated.Value(0)

  get styles() {
    return styles(this.props.theme)
  }

  handleFocus = () => {
    if (this.props.disabled) {
      this.refs.textInput.blur()
      return
    }
    Animations.standard(this.labelAV).start()
    Animations.standard(this.colorAV).start()
  }

  handleBlur = () => {
    Animations.standard(this.colorAV, 0).start()

    // Only return color to its original state if the input
    // has a value
    if (this.props.value) return

    Animations.standard(this.labelAV, 0).start()
  }

  focusInput = () => {
    this.refs.textInput.focus()
  }

  render() {
    const {
      style,
      textInputStyle,
      placeholderStyle,
      placeholder,
      theme,
      disabled,
      error,
      singleLine,
      ...other,
    } = this.props
    const { styles } = this

    return (
      <View style={[styles.base, style]}>
        <TextInput
          ref="textInput"
          css={[
            styles.textInput,
            singleLine && styles.singleLine,
            disabled && styles.disabled,
            textInputStyle,
          ]}
          selectionColor={Color(theme.accent).alpha(0.87).rgbString()}
          underlineColorAndroid="transparent"
          {...other}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur} />
        <Animated.Text
          css={[
            styles.placeholder,
            singleLine && styles.placeholderSingleLine,
            disabled && styles.disabled,
            placeholderStyle,
          ]}
          style={[
            !singleLine && animate(
              ['top', 'fontSize'],
              styles.placeholder,
              styles.placeholderFocus,
              this.labelAV
            ),
            !singleLine && animate(
              'color',
              styles.placeholder,
              styles.placeholderFocus,
              this.colorAV
            ),
            singleLine && animate(
              'opacity',
              styles.placeholderSingleLine,
              styles.placeholderSingleLineFocus,
              this.singleLineLabelAV,
            ),
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
          css={styles.divider} />
        <Error>{error}</Error>
      </View>
    )
  }
}

Input.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textInputStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  placeholderStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  singleLine: PropTypes.bool,

  theme: PropTypes.object.isRequired,
}

Input.defaultProps = {
  style: {},
  textInputStyle: {},
  placeholderStyle: {},
  placeholder: '',
  disabled: false,
  singleLine: false,
}

const styles = theme => ps({
  base: {
    alignSelf: 'stretch',
    flex: 1,
  },

  textInput: {
    alignSelf: 'stretch',
    height: 32,
    paddingHorizontal: 0,
    paddingVertical: 4,
    marginTop: 32,

    ...Type.subheading,

    [Breakpoints.ml]: {
      marginTop: 28,

      ...Type.subheading[Breakpoints.ml],
    },
  },

  singleLine: {
    marginTop: 12,
    [Breakpoints.ml]: {
      marginTop: 8,
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
    textAlign: 'left',

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

  placeholderSingleLine: {
    top: 16,

    opacity: 1,

    [Breakpoints.ml]: {
      top: 12,
    },
  },

  placeholderSingleLineFocus: {
    opacity: 0,
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
