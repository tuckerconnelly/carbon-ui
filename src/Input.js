import React from './React'
const { Animated, Component, PropTypes, Text, TextInput, View } = React
import Uranium from 'uranium'
import Color from 'color'

import connectTheme from './connectTheme'
import Type from './styles/Type'
import animation from './styles/Animations'
import Colors from './styles/Colors'
import Divider from './Divider'

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
      focusAV: new Animated.Value(this.props.value ? 1 : 0),
    }
  }

  get styles() {
    return styles(this.props.theme)
  }

  handleFocus() {
    Animated.timing(
      this.state.focusAV,
      { ...animation, toValue: 1 }
    ).start()
  }

  handleBlur() {
    // Dont return placeholder to its blurred state if the input
    // has something in it
    if (this.props.value) return

    Animated.timing(
      this.state.focusAV,
      { ...animation, toValue: 0 }
    ).start()
  }

  focusInput() {
    this.refs.input.focus()
  }

  render() {
    const { placeholder, style, theme, ...other } = this.props
    return (
      <View style={this.styles.base}>
        <TextInput
          ref="input"
          css={[this.styles.textInput, style]}
          selectionColor={Color(theme.primary).alpha(0.87).rgbString()}
          underlineColorAndroid="transparent"
          {...other}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur} />
        <Animated.Text
          css={[
            this.styles.placeholder,
            this.state.focused && this.styles.placeholderFocus,
            {
              top: this.state.focusAV.interpolate({
                inputRange: [0, 1],
                outputRange: [
                  this.styles.placeholder.top,
                  this.styles.placeholderFocus.top,
                ],
              }),
              color: this.state.focusAV.interpolate({
                inputRange: [0, 1],
                outputRange: [
                  this.styles.placeholder.color,
                  this.styles.placeholderFocus.color,
                ],
              }),
              fontSize: this.state.focusAV.interpolate({
                inputRange: [0, 1],
                outputRange: [
                  this.styles.placeholder.fontSize,
                  this.styles.placeholderFocus.fontSize,
                ],
              }),
            },
          ]}
          onPress={this.focusInput}>
          {placeholder}
        </Animated.Text>
        <AnimatedDivider
          color={this.state.focusAV.interpolate({
            inputRange: [0, 1],
            outputRange: [
              theme.divider,
              Color(theme.primary).alpha(0.87).rgbString(),
            ],
          })} />
      </View>
    )
  }
}

Input.propTypes = {
  style: PropTypes.object,
  placeholder: PropTypes.string,
  value: PropTypes.string,

  theme: PropTypes.object.isRequired,
}

Input.defaultProps = {
  style: {},
  placeholder: '',
}

const styles = theme => ({
  base: {
    alignSelf: 'stretch',
    marginTop: 16,
    marginBottom: 8,
  },

  placeholder: {
    position: 'absolute',
    top: 28,

    height: 20,

    ...Type.subheading,
    color: Colors.blackHint,
  },

  placeholderFocus: {
    top: 8,
    ...Type.caption,
    color: Color(theme.primary).alpha(0.87).rgbString(),
  },

  textInput: {
    height: 36,
    paddingVertical: 8,
    marginTop: 20,

    ...Type.subheading,
  },
})

export default connectTheme(Uranium(Input))
