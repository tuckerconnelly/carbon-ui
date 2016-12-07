import React, { Component, PropTypes } from 'react'
import { View } from 'react-native-universal'
import { Colors, Elevation } from '../index'

/**
 * Bottom navigation bars make it easy to explore and switch between top-level
 * views in a single tap.
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
