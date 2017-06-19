/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import Uranium from 'uranium'

import { connectTheme } from '../index'

// Using Class instead of function because refs can't be applied to function
// components

class Display4 extends Component {
  render() {
    const { children, style, theme, ...other } = this.props
    return <Text style={[theme.type.display4, style]} {...other}>{children}</Text>
  }
}

const ThemedDisplay4 = connectTheme(Display4)

class Display3 extends Component {
  render() {
    const { children, style, theme, ...other } = this.props
    return <Text style={[theme.type.display3, style]} {...other}>{children}</Text>
  }
}

const ThemedDisplay3 = connectTheme(Display3)

class Display2 extends Component {
  render() {
    const { children, style, theme, ...other } = this.props
    return <Text style={[theme.type.display2, style]} {...other}>{children}</Text>
  }
}

const ThemedDisplay2 = connectTheme(Display2)

class Display1 extends Component {
  render() {
    const { children, style, theme, ...other } = this.props
    return <Text style={[theme.type.display1, style]} {...other}>{children}</Text>
  }
}

const ThemedDisplay1 = connectTheme(Display1)

class Headline extends Component {
  render() {
    const { children, style, theme, ...other } = this.props
    return <Text style={[theme.type.headline, style]} {...other}>{children}</Text>
  }
}

const ThemedHeadline = connectTheme(Headline)

class Title extends Component {
  render() {
    const { children, style, theme, ...other } = this.props
    return <Text style={[theme.type.title, style]} {...other}>{children}</Text>
  }
}

const ThemedTitle = connectTheme(Title)

class Subheading extends Component {
  render() {
    const { children, css, theme, ...other } = this.props
    return <Text css={[theme.type.subheading, css]} {...other}>{children}</Text>
  }
}

const ThemedSubheading = connectTheme(Uranium(Subheading))

class Body2 extends Component {
  render() {
    const { children, css, theme, ...other } = this.props
    return <Text css={[theme.type.body2, css]} {...other}>{children}</Text>
  }
}

const ThemedBody2 = connectTheme(Uranium(Body2))

class Body1 extends Component {
  render() {
    const { children, css, theme, ...other } = this.props
    return <Text css={[theme.type.body1, css]} {...other}>{children}</Text>
  }
}

const ThemedBody1 = connectTheme(Uranium(Body1))

class Caption extends Component {
  render() {
    const { children, style, theme, ...other } = this.props
    return <Text style={[theme.type.caption, style]} {...other}>{children}</Text>
  }
}

const ThemedCaption = connectTheme(Caption)

const propTypes = {
  children: PropTypes.node,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  css: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  theme: PropTypes.object.isRequired,
}

Display4.propTypes = propTypes
Display3.propTypes = propTypes
Display2.propTypes = propTypes
Display1.propTypes = propTypes
Headline.propTypes = propTypes
Title.propTypes = propTypes
Subheading.propTypes = propTypes
Body2.propTypes = propTypes
Body1.propTypes = propTypes
Caption.propTypes = propTypes

export {
  ThemedDisplay4 as Display4,
  ThemedDisplay3 as Display3,
  ThemedDisplay2 as Display2,
  ThemedDisplay1 as Display1,
  ThemedHeadline as Headline,
  ThemedTitle as Title,
  ThemedSubheading as Subheading,
  ThemedBody2 as Body2,
  ThemedBody1 as Body1,
  ThemedCaption as Caption,
}
