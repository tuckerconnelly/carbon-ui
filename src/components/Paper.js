import React, { Component, PropTypes } from 'react'
import { View } from 'react-native-universal'
import Uranium from 'uranium'

import { Colors, Elevation } from '../index'

/**
 * Generic Paper component. The <div /> of Material Design.
 *
 * ### Examples
 *
 *     import React from 'react'
 *     import { Paper, Body1 } from 'carbon-ui'
 *
 *     export default () =>
 *       <Paper elevation={8}>
 *         <Body1>Hey I'm just some paper</Body1>
 *       </Paper>
 */
class Paper extends Component {
  render() {
    const { style, css, children, elevation, ...other } = this.props
    return (
      <View
        css={[
          styles.base,
          { ...Elevation[`dp${elevation}`] },
        ].concat(style, css)}
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
