import React, { PropTypes } from 'react'
import { View } from 'react-native'
import Uranium from 'uranium'
import { Elevation, Breakpoints, Colors, connectTheme } from '../../index'

const Card = ({ style, children, ...other }) =>
  <View
    css={[
      styles.root,
      style,
    ]}
    {...other}>
    {children}
  </View>

Card.propTypes = {
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
  Card))

const styles = {
  root: {
    marginVertical: 4,
    marginHorizontal: 8,
    borderRadius: 2,

    flexDirection: 'column',

    backgroundColor: Colors.white,

    // Default elevation is 2dp.
    ...Elevation.dp2,
    // Zero elevation for tablet and desktop.
    [Breakpoints.md]: Elevation.dp0,
  },
}
