import React from 'react'
import PropTypes from 'prop-types'
import { View, Platform } from 'react-native'

import { Body1, Colors, gu } from '../../index'

const Cell = ({ children, style, ...other }) => {
  const defaultedChildren = typeof children === 'string' ?
    <Body1>{children}</Body1> :
    children
  return (
    <View style={[styles.base].concat(style)} {...other}>
      {defaultedChildren}
    </View>
  )
}

Cell.propTypes = {
  children: PropTypes.node,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.number]),
}

export default Cell

const styles = {
  base: {
    // NOTE Spec says hard height of 48, but going with
    // paddingVertical: 16, expecting content to be height
    // 16. That way, when content is 16px high, it'll be
    // to spec, but if a user wants to break spec and have
    // more content in the cell, it'll expand and not cut off
    // the text
    paddingRight: 6 * gu,
    paddingLeft: 8 * gu,
    paddingVertical: 4 * gu,
    borderTopWidth: 1,
    borderTopColor: Colors.grey300,

    flex: 1,

    ...Platform.select({
      web: {
        display: 'table-cell',
      },
    }),
  },
}
