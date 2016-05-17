import React, { PropTypes } from 'react'
import { Text } from 'react-native-universal'
import Uranium from 'uranium'

import styles from './styles/Type'

export const Display4 = ({ children, style, ...other }) =>
  <Text style={[styles.display4, style]} {...other}>{children}</Text>

export const Display3 = ({ children, style, ...other }) =>
  <Text style={[styles.display3, style]} {...other}>{children}</Text>

export const Display2 = ({ children, style, ...other }) =>
  <Text style={[styles.display2, style]} {...other}>{children}</Text>

export const Display1 = ({ children, style, ...other }) =>
  <Text style={[styles.display1, style]} {...other}>{children}</Text>

export const Headline = ({ children, style, ...other }) =>
  <Text style={[styles.headline, style]} {...other}>{children}</Text>

export const Title = ({ children, style, ...other }) =>
  <Text style={[styles.title, style]} {...other}>{children}</Text>

export const Subheading = Uranium(({ children, css, ...other }) =>
  <Text css={[styles.subheading, css]} {...other}>{children}</Text>
)

export const Body2 = Uranium(({ children, css, ...other }) =>
  <Text css={[styles.body2, css]} {...other}>{children}</Text>
)

export const Body1 = Uranium(({ children, css, ...other }) =>
  <Text css={[styles.body1, css]} {...other}>{children}</Text>
)

export const Caption = ({ children, style, ...other }) =>
  <Text style={[styles.caption, style]} {...other}>{children}</Text>


const propTypes = {
  children: PropTypes.node,
  style: PropTypes.oneOfType([
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
