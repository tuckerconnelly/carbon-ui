import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import Uranium from 'uranium'
import { Breakpoints, connectTheme } from '../../index'

class CardText extends Component {
  
  static propTypes = {
    children: PropTypes.node,
    /**
     * Wrapper component style.
     */
    style: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
    /**
     * Text style.
     */
    textStyle: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
  };
  
  render() {
    const { children, style, textStyle } = this.props
        
    return (<View css={[styles.root, style]}>
      <Text css={[styles.text, textStyle]}>
        {children}
      </Text>
    </View>)
  }
}

const styles = {
  root: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 24,
    // Larger left and right padding for tablet and desktop.
    [Breakpoints.md]: {
      paddingLeft: 24,
      paddingRight: 24,
    },
  },
  text: {
    fontSize: 14,
  },
}

export default connectTheme(Uranium(CardText))
