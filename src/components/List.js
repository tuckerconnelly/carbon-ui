import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView } from 'react-native'
import Uranium from 'uranium'
import { Breakpoints } from '../index'

/**
 * Lists are best suited to presenting a homogeneous data type or sets of data
 * types, such as images and text.
 *
 * ### Examples
 *
 *      import React from 'react'
 *      import { View } from 'react-native'
 *      import { List, ListItem, Elevation } from 'carbon-ui'
 *
 *      export default () =>
 *        <View style={{ ...Elevation.dp2 }}>
 *          <List>
 *            <ListItem primaryText="One" />
 *            <ListItem primaryText="Two" />
 *            <ListItem primaryText="Three" />
 *          </List>
 *        </View>
 *
 * ---
 *
 *      import React, { Component } from 'react'
 *      import { View } from 'react-native'
 *      import { List, ListItem, Elevation, gu } from 'carbon-ui'
 *
 *      export default class Example extends Component {
 *        state = { expandedItems: [] }
 *
 *        _toggleExpandedItem = name => {
 *          const expandedItems = [...this.state.expandedItems]
 *
 *          const index = expandedItems.indexOf(name)
 *          if (index === -1) return this.setState({ expandedItems: expandedItems.concat([name]) })
 *
 *          expandedItems.splice(index, 1)
 *          this.setState({ expandedItems })
 *        }
 *
 *        render() {
 *          return (
 *            <View style={{ ...Elevation.dp2 }}>
 *              <List>
 *                <ListItem
 *                  primaryText="Nested item"
 *                  expanded={this.state.expandedItems.indexOf('nestedItem') !== -1}
 *                  onPress={() => this._toggleExpandedItem('nestedItem')}>
 *                  <ListItem primaryText="Nested one" style={styles.nestedItem} />
 *                  <ListItem primaryText="Nested two" style={styles.nestedItem} />
 *                </ListItem>
 *                <ListItem primaryText="Item two" />
 *                <ListItem primaryText="Item three" />
 *              </List>
 *            </View>
 *          )
 *        }
 *      }
 *
 *      const styles = {
 *        nestedItem: { paddingLeft: 18 * gu },
 *      }
 *
 */
const List = ({ children, ...other }) =>
  <ScrollView css={styles.base} {...other}>
    {children}
  </ScrollView>

List.propTypes = {
  /**
   * Usually a collection of `ListItem`s
   */
  children: PropTypes.node,
}

export default Uranium(List)

const styles = {
  base: {
    paddingVertical: 8,

    [Breakpoints.ml]: {
      paddingVertical: 4,
    },
  },
}
