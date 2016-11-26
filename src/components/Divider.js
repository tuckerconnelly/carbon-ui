import React, { PropTypes } from 'react'
import { View } from 'react-native-universal'

import { connectTheme } from '../index'

/**
 * A divider is a thin, lightweight rule that groups content in lists and page
 * layouts.
 */
const Divider = ({ color, style, theme, ...other }) =>
  <View
    style={[
      tStyles(theme).base,
      color && { borderColor: color },
      style,
    ]}
    {...other} />

Divider.propTypes = {
  /**
   * The color of the divider. It's derived from the theme by default.
   */
  color: PropTypes.string,
  style: PropTypes.object,

  // connectTheme
  theme: PropTypes.object.isRequired,
}

const tStyles = theme => ({
  base: {
    alignSelf: 'stretch',
    height: 0,
    borderTopWidth: 1,
    borderColor: theme.colors.divider,
  },
})

export default
  connectTheme(
  Divider)
