import React, { PropTypes } from 'react'
import { Text } from 'react-native-universal'
import Uranium from 'uranium'

import styles from './styles/Type'

export const Display4 = ({ children, style }) =>
  <Text style={[styles.display4, style]}>{children}</Text>

export const Display3 = ({ children, style }) =>
  <Text style={[styles.display3, style]}>{children}</Text>

export const Display2 = ({ children, style }) =>
  <Text style={[styles.display2, style]}>{children}</Text>

export const Display1 = ({ children, style }) =>
  <Text style={[styles.display1, style]}>{children}</Text>

export const Headline = ({ children, style }) =>
  <Text style={[styles.headline, style]}>{children}</Text>

export const Title = ({ children, style }) =>
  <Text style={[styles.title, style]}>{children}</Text>

export const Subheading = Uranium(({ children }) =>
  <Text css={styles.subheading}>{children}</Text>
)

export const Body2 = Uranium(({ children }) =>
  <Text css={styles.body2}>{children}</Text>
)

export const Body1 = Uranium(({ children }) =>
  <Text css={styles.body1}>{children}</Text>
)

export const Caption = ({ children, style }) =>
  <Text style={[styles.caption, style]}>{children}</Text>


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
