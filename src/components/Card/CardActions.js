import React, { PropTypes } from 'react'
import { View } from 'react-native'
import Uranium from 'uranium'
import { connectTheme } from '../../index'

const CardActions = ({ children, style }) =>
  <View css={[styles.root, style]}>
    {children}
  </View>

CardActions.propTypes = {
  children: PropTypes.node,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
}

export default
  connectTheme(
  Uranium(
  CardActions))

const styles = {
  root: {
    padding: 8,
  },
}
