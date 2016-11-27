import React, { PropTypes } from 'react'
import { View } from 'react-native-universal'
import ps from 'react-native-ps'

import { gu } from '../../index'

const HeaderRow = ({ children, style, ...other }) =>
  <View style={[styles.base].concat(style)} {...other}>
    {React.Children.map(children, (child, i) =>
      // Give the first cell a left padding of 24, per spec
      i === 0 ?
        React.cloneElement(child, {
          ...child.props,
          style: [styles.firstCell].concat(child.props.style),
        }) :
        child
    )}
  </View>

HeaderRow.propTypes = {
  /**
   * A collection of HeaderCells
   */
  children: PropTypes.node.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
}

export default HeaderRow

const styles = ps({
  base: {
    flex: 1,
    flexDirection: 'row',
  },

  firstCell: {
    paddingLeft: 6 * gu,
  },

  web: {
    base: {
      display: 'table-row',
    },
  },
})
