import React, { Component, PropTypes } from 'react'
import { Animated, TextInput, View } from 'react-native-universal'
import Color from 'color'
import ps from 'react-native-ps'
import Uranium, { animate } from 'uranium'

import { TextFieldError, Animations, Breakpoints, Colors, Type, connectTheme } from '../index'
import Divider from './Divider'

const AnimatedDivider = Animated.createAnimatedComponent(Divider)

/**
 * Text fields allow users to input text, select text, and lookup data via
 * auto-completion.
 *
 * This component wraps React Native's TextInput, so it accepts all the same
 * props.
 *
 * ### Examples
 *
 *      import React, { Component } from 'react'
 *      import { View } from 'react-native-universal'
 *      import { TextField } from 'carbon-ui'
 *
 *      export default class Example extends Component {
 *        state = {
 *          form: {
 *            textFieldOne: '',
 *            textFieldTwo: 'Edit this one to see an error',
 *          },
 *          errors: {}
 *        }
 *
 *        _setFormValue = (field, val) => {
 *          // Set an example error
 *          if (field === 'textFieldTwo') {
 *            this.setState({
 *              errors: { textFieldTwo: 'Something went wrong'}
 *            })
 *          }
 *
 *          this.setState({ form: { ...this.state.form, [field]: val }})
 *        }
 *
 *        render() {
 *          return (
 *            <View>
 *              <TextField
 *                placeholder="Text field one"
 *                value={this.state.form.textFieldOne}
 *                onChangeText={val => this._setFormValue('textFieldOne', val)} />
 *              <TextField
 *                placeholder="Text field two"
 *                singleLine
 *                value={this.state.form.textFieldTwo}
 *                error={this.state.errors.textFieldTwo}
 *                onChangeText={val => this._setFormValue('textFieldTwo', val)} />
 *              <TextField
 *                placeholder="Disabled"
 *                singleLine
 *                disabled />
 *            </View>
 *          )
 *        }
 *      }
 */
class TextField extends Component {
  componentWillReceiveProps(nextProps) {
    if (!this.props.value && nextProps.value) {
      Animations.standard(this.singleLineLabelAV, 1, 100).start()
    }
    if (this.props.value && !nextProps.value) {
      Animations.standard(this.singleLineLabelAV, 0, 100).start()
    }
  }

  // If the component starts with a value, start the
  // placeholder in its focused state
  labelAV = new Animated.Value(this.props.value ? 1 : 0)
  singleLineLabelAV = new Animated.Value(this.props.value ? 1 : 0)
  colorAV = new Animated.Value(0)

  _textInput: null

  get styles() {
    return styles(this.props.theme)
  }

  handleFocus = () => {
    if (this.props.disabled) {
      this._textInput.blur()
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
    this._textInput.focus()
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
      ...other
    } = this.props

    const { styles } = this

    return (
      <View style={[styles.base, style]}>
        <TextInput
          ref={c => { this._textInput = c }}
          css={[
            styles.textInput,
            singleLine && styles.singleLine,
            disabled && styles.disabled,
            textInputStyle,
          ]}
          selectionColor={Color(theme.colors.accent).alpha(0.87).rgbString()}
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
              theme.colors.divider,
              Color(theme.colors.accent).alpha(0.87).rgbString(),
            ],
          })}
          type={disabled && 'dotted'}
          css={styles.divider} />
        <TextFieldError>{error}</TextFieldError>
      </View>
    )
  }
}

TextField.propTypes = {
  /**
   * The value of the TextField.
   */
  value: PropTypes.string,
  /**
   * The placeholder, for when the value is blank.
   */
  placeholder: PropTypes.string,
  /**
   * Will disabled the TextField if set to true.
   */
  disabled: PropTypes.bool,
  /**
   * The error to display under the TextField
   */
  error: PropTypes.string,
  /**
   * Will make the TextField a single-line TextField, without a label.
   */
  singleLine: PropTypes.bool,
  /**
   * The style passed to the React Native TextInput
   */
  textInputStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /**
   * The style passed to the placeholder.
   */
  placeholderStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /**
   * Passed through to the underlying TextInput.
   */
  onChangeText: PropTypes.func,

  // connectTheme
  theme: PropTypes.object.isRequired,

  /**
   * The style of the containing View.
   */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

TextField.defaultProps = {
  disabled: false,
  singleLine: false,
}

const styles = theme => ps({
  base: {
    alignSelf: 'stretch',
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
    color: Color(theme.colors.accent).alpha(0.87).rgbString(),

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

export default
  connectTheme(
  Uranium(
  TextField))
