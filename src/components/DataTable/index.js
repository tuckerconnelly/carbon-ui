import React, { PropTypes } from 'react'
import { View } from 'react-native-universal'
import ps from 'react-native-ps'

import HeaderRow from './HeaderRow'
import HeaderCell from './HeaderCell'
import Row from './Row'
import Cell from './Cell'

/**
 * Data tables display sets of raw data. They usually appear in desktop
 * enterprise products.
 */
const DataTable = ({ children, style, ...other }) =>
  <View style={[styles.base].concat(style)} {...other}>
    {children}
  </View>

DataTable.propTypes = {
  /**
   * The first child should be a HeaderRow, and the rest regular Rows.
   */
  children: PropTypes.node.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
}

export default DataTable

DataTable.HeaderRow = HeaderRow
DataTable.HeaderCell = HeaderCell
DataTable.Row = Row
DataTable.Cell = Cell

const styles = ps({
  base: {
    flex: 1,
  },

  web: {
    base: {
      width: '100%',
      height: '100%',

      display: 'table',
    },
  },
})
