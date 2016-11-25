/* eslint-disable react/prefer-stateless-function */

import React, { PropTypes, Component } from 'react'
import { Text } from 'react-native-universal'
import Uranium from 'uranium'

import { Type as styles } from '../index'

// Using Class instead of function because refs can't be applied to function
// components

class Display4 extends Component {
  render() {
    const { children, style, ...other } = this.props
    return <Text style={[styles.display4, style]} {...other}>{children}</Text>
  }
}

class Display3 extends Component {
  render() {
    const { children, style, ...other } = this.props
    return <Text style={[styles.display3, style]} {...other}>{children}</Text>
  }
}

class Display2 extends Component {
  render() {
    const { children, style, ...other } = this.props
    return <Text style={[styles.display2, style]} {...other}>{children}</Text>
  }
}

class Display1 extends Component {
  render() {
    const { children, style, ...other } = this.props
    return <Text style={[styles.display1, style]} {...other}>{children}</Text>
  }
}

class Headline extends Component {
  render() {
    const { children, style, ...other } = this.props
    return <Text style={[styles.headline, style]} {...other}>{children}</Text>
  }
}

class Title extends Component {
  render() {
    const { children, style, ...other } = this.props
    return <Text style={[styles.title, style]} {...other}>{children}</Text>
  }
}

class Subheading extends Component {
  render() {
    const { children, css, ...other } = this.props
    return <Text css={[styles.subheading, css]} {...other}>{children}</Text>
  }
}

const UraniumSubheading = Uranium(Subheading)

class Body2 extends Component {
  render() {
    const { children, css, ...other } = this.props
    return <Text css={[styles.body2, css]} {...other}>{children}</Text>
  }
}

const UraniumBody2 = Uranium(Body2)

class Body1 extends Component {
  render() {
    const { children, css, ...other } = this.props
    return <Text css={[styles.body1, css]} {...other}>{children}</Text>
  }
}

const UraniumBody1 = Uranium(Body1)

class Caption extends Component {
  render() {
    const { children, style, ...other } = this.props
    return <Text style={[styles.caption, style]} {...other}>{children}</Text>
  }
}

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
  Display4,
  Display3,
  Display2,
  Display1,
  Headline,
  Title,
  UraniumSubheading as Subheading,
  UraniumBody2 as Body2,
  UraniumBody1 as Body1,
  Caption,
}
