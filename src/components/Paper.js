import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import { Colors, Elevation } from '../index'

/**
 * Generic Paper component. The <div /> of Material Design.
 *
 * ### Examples
 *
 *     import React from 'react'
 *     import { Paper, Body1, gu } from 'carbon-ui'
 *
 *     export default () =>
 *       <Paper elevation={8} style={{ padding: 4 * gu }}>
 *         <Body1>Hey I'm just some paper</Body1>
 *       </Paper>
 */
class Paper extends Component {
  render() {
    const { style, children, elevation, ...other } = this.props
    return (
      <View
        style={[
          styles.base,
          Elevation[`dp${elevation}`],
        ].concat(style)}
        {...other}>
        {children}
      </View>
    )
  }
}

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
}

Paper.defaultProps = {
  elevation: 2,
}

export default Paper


const styles = {
  base: {
    borderRadius: 2,

    backgroundColor: Colors.white,
  },
}
