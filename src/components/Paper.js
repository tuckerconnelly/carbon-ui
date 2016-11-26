import React, { PropTypes } from 'react'
import { View } from 'react-native-universal'
import Uranium from 'uranium'

import { Colors, Elevation } from '../index'

/**
 * Generic Paper component. Like the <div /> of Material Design.
 */
const Paper = ({ style, css, children, elevation, ...other }) =>
  <View
    css={[
      styles.base,
      { ...Elevation[`dp${elevation}`] },
    ].concat(style, css)}
    {...other}>
    {children}
  </View>

Paper.propTypes = {
  /**
   * The elevation of the paper
   */
  elevation: PropTypes.number,

  children: PropTypes.node,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  css: PropTypes.object,
}

Paper.defaultProps = {
  elevation: 2,
}

export default Uranium(Paper)


const styles = {
  base: {
    padding: 16,
    marginBottom: 16,

    backgroundColor: Colors.white,
  },
}
