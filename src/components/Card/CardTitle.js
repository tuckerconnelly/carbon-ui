import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'
import Uranium from 'uranium'
import { Breakpoints, connectTheme } from '../../index'

const CardTitle = ({
  children,
  style,
  subtitle,
  subtitleStyle,
  title,
  titleStyle,
  ...other
}) =>
  <View {...other} css={[styles.root, style]}>
    <Text css={[subtitle ? styles.title : styles.subtitle, titleStyle]}>
      {title}
    </Text>
    {subtitle && <Text css={[styles.subtitle, subtitleStyle]}>
      {subtitle}
      {children}
    </Text> }
  </View>

CardTitle.propTypes = {
  title: PropTypes.node,
  titleStyle: PropTypes.object,
  subtitle: PropTypes.node,
  subtitleStyle: PropTypes.object,
  children: PropTypes.node,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  // connectTheme
  theme: PropTypes.object.isRequired,
}

export default
  connectTheme(
  Uranium(
  CardTitle))

const styles = {
  root: {
    position: 'relative',

    paddingTop: 24,
    paddingBottom: 16,
    paddingHorizontal: 16,
    // Larger left and right padding for tablet and desktop.
    [Breakpoints.md]: {
      paddingHorizontal: 24,
    },
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 14,
  },
}
