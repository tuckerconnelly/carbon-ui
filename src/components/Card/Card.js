import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import Uranium from 'uranium'
import { Elevation, Breakpoints, Colors, connectTheme } from '../../index'

class Card extends Component {
  render() {
    const { style, children, ...other } = this.props
    return (
      <View
        css={[
          styles.root,
          style,
        ]}
        {...other}>
        {children}
      </View>
    )
  }
}

Card.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
}

const styles = {
  root: {
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 8,
    marginRight: 8,
    flexDirection: 'column',
    borderRadius: 2,
    backgroundColor: Colors.white,
    // Default elevation is 2dp.
    ...Elevation.dp2,
    // Zero elevation for tablet and desktop.
    [Breakpoints.md]: Elevation.dp0,
  },
}

export default connectTheme(Uranium(Card))
