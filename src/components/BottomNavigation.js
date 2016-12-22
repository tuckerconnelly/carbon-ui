import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import { Colors, Elevation } from '../index'

/**
 * Bottom navigation bars make it easy to explore and switch between top-level
 * views in a single tap.
 *
 * ### Examples
 *
 *      import React, { Component } from 'react'
 *      import { View } from 'react-native'
 *      import { BottomNavigation, BottomNavigationIcon, Headline } from 'carbon-ui'
 *
 *      export default class BottomNavExample extends Component {
 *        state = { activeTab: 'Favorites' }
 *
 *        _navigate = activeTab => this.setState({ activeTab })
 *
 *        render() {
 *          const { activeTab } = this.state
 *          return (
 *            <View style={{ height: 220, overflow: 'hidden' }}>
 *              <View style={{ padding: 24, alignItems: 'center' }}>
 *                <Headline>{activeTab}</Headline>
 *              </View>
 *              <BottomNavigation>
 *                <BottomNavigationIcon
 *                  name="history"
 *                  text="Recents"
 *                  active={activeTab === 'Recents'}
 *                  onPress={() => this._navigate('Recents')} />
 *                <BottomNavigationIcon
 *                  name="favorite"
 *                  text="Favorites"
 *                  active={activeTab === 'Favorites'}
 *                  onPress={() => this._navigate('Favorites')} />
 *                <BottomNavigationIcon
 *                  name="location_on"
 *                  text="Nearby"
 *                  active={activeTab === 'Nearby'}
 *                  onPress={() => this._navigate('Nearby')} />
 *              </BottomNavigation>
 *            </View>
 *          )
 *        }
 *      }
 *
 */
class BottomNavigation extends Component {
  render() {
    const { children } = this.props
    return (
      <View style={styles.base}>
        {children}
      </View>
    )
  }
}

BottomNavigation.propTypes = {
  /**
   * A collection of BottomNavigationIcons.
   */
  children: PropTypes.node,
}

export default BottomNavigation

const styles = {
  base: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,

    height: 56,

    backgroundColor: Colors.white,

    flexDirection: 'row',
    justifyContent: 'space-around',

    ...Elevation.dp8,
  },
}
