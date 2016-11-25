import React, { PropTypes } from 'react'
import { View } from 'react-native-universal'
import ps from 'react-native-ps'

import { Body2, gu } from '../../index'

const HeaderCell = ({ children, style, ...other }) => {
  const defaultedChildren = typeof children === 'string' ?
    <Body2>{children}</Body2> :
    children
  return (
    <View style={[styles.base].concat(style)} {...other}>
      {defaultedChildren}
    </View>
  )
}

HeaderCell.propTypes = {
  children: PropTypes.node,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default HeaderCell

const styles = ps({
  base: {
    paddingRight: 6 * gu,
    paddingLeft: 8 * gu,
    paddingVertical: 4 * gu,

    flex: 1,
  },

  web: {
    base: {
      display: 'table-cell',
    },
  },
})
