import React, { PropTypes } from 'react'
import { View } from 'react-native-universal'

import connectTheme from './connectTheme'

const Divider = ({ color, type, style, theme, ...other }) =>
  <View
    style={[
      styles(theme).base,
      color && { borderColor: color },
      type && { borderStyle: type },
      style,
    ]}
    {...other} />

Divider.propTypes = {
  color: PropTypes.string,
  type: PropTypes.oneOf(['solid', 'dotted', 'dashed']),
  theme: PropTypes.object.isRequired,

  style: PropTypes.object,
}

const styles = theme => ({
  base: {
    alignSelf: 'stretch',
    height: 0,
    borderTopWidth: 1,
    borderColor: theme.divider,
  },
})

export default connectTheme(Divider)
