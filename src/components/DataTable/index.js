import React, { PropTypes } from 'react'
import { View, Platform } from 'react-native'

import HeaderRow from './HeaderRow'
import HeaderCell from './HeaderCell'
import Row from './Row'
import Cell from './Cell'

/**
 * Data tables display sets of raw data. They usually appear in desktop
 * enterprise products.
 *
 * ### Examples
 *
 *      import React from 'react'
 *      import { View } from 'react-native'
 *      import { DataTable, gu } from 'carbon-ui'
 *
 *      export default () =>
 *        <View>
 *          <DataTable>
 *            <DataTable.HeaderRow>
 *              <DataTable.HeaderCell>Name</DataTable.HeaderCell>
 *              <DataTable.HeaderCell>Calories</DataTable.HeaderCell>
 *              <DataTable.HeaderCell>Goodness</DataTable.HeaderCell>
 *            </DataTable.HeaderRow>
 *            <DataTable.Row>
 *              <DataTable.Cell>Cappuccino</DataTable.Cell>
 *              <DataTable.Cell>150</DataTable.Cell>
 *              <DataTable.Cell>Solid</DataTable.Cell>
 *            </DataTable.Row>
 *            <DataTable.Row>
 *              <DataTable.Cell>Latte</DataTable.Cell>
 *              <DataTable.Cell>300</DataTable.Cell>
 *              <DataTable.Cell>It's aight</DataTable.Cell>
 *            </DataTable.Row>
 *            <DataTable.Row>
 *              <DataTable.Cell>Mocha</DataTable.Cell>
 *              <DataTable.Cell>400</DataTable.Cell>
 *              <DataTable.Cell>😍</DataTable.Cell>
 *            </DataTable.Row>
 *          </DataTable>
 *        </View>
 */
const DataTable = ({ children, style, ...other }) =>
  <View style={[styles.base].concat(style)} {...other}>
    <View style={styles.table}>
      {children}
    </View>
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

const styles = {
  base: {
    flex: 1,

    ...Platform.select({
      web: {
        width: '100%',
        height: '100%',

        overflow: 'auto',
      },
    }),
  },

  table: {
    flex: 1,

    ...Platform.select({
      web: {
        width: '100%',
        height: '100%',

        display: 'table',
      },
    }),
  },
}
