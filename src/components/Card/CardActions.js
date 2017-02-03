import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import Uranium from 'uranium'
import { connectTheme } from '../../index'

class CardActions extends Component {
  
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
  };
  
  render() {
    const { children, style } = this.props
        
    return (<View css={[styles.root, style]}>
      {children}
    </View>)
  }
}

export default connectTheme(Uranium(CardActions))

const styles = {
  root: {
    padding: 8,
  },
}
