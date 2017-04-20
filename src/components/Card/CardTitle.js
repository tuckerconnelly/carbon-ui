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
    </Text> }
    {children}
  </View>

CardTitle.propTypes = {
  /**
   * Primary title.
   */
  title: PropTypes.node,
  /**
   * Primary title style.
   */
  titleStyle: PropTypes.object,
  /**
   * Subtitle.
   */
  subtitle: PropTypes.node,
  /**
   * Subtitle style.
   */
  subtitleStyle: PropTypes.object,
  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  /**
   * children are inserted after the title.
   */
  children: PropTypes.node,
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
