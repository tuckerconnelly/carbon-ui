import React from 'react'
import PropTypes from 'prop-types'
import { View, Platform } from 'react-native'

import { Body2, gu } from '../../index'

const HeaderCell = ({ children, style, ...other }) => {
  const defaultedChildren = typeof children === 'string' ?
    <Body2 ellipsizeMode="tail" numberOfLines={1}>{children}</Body2> :
    children
  return (
    <View style={[styles.base].concat(style)} {...other}>
      {defaultedChildren}
    </View>
  )
}

HeaderCell.propTypes = {
  children: PropTypes.node,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.number]),
}

export default HeaderCell

const styles = {
  base: {
    paddingRight: 6 * gu,
    paddingLeft: 8 * gu,
    paddingVertical: 4 * gu,

    flex: 1,

    ...Platform.select({
      web: {
        display: 'table-cell',
      },
    }),
  },
}
