import React, { PropTypes } from 'react'
import { ScrollView } from 'react-native-universal'
import ps from 'react-native-ps'
import Uranium from 'uranium'
import { Breakpoints } from './index'

/**
 * Lists are best suited to presenting a homogeneous data type or sets of data
 * types, such as images and text.
 */
const List = ({ children, style, ...other }) =>
  <ScrollView css={[styles.base, style]} {...other}>
    {children}
  </ScrollView>

List.propTypes = {
  /**
   * Usually a collection of `ListItem`s
   */
  children: PropTypes.node,
  style: PropTypes.object,
}

export default Uranium(List)

const styles = ps({
  base: {
    paddingTop: 8,

    [Breakpoints.ml]: {
      paddingTop: 4,
    },
  },
})
