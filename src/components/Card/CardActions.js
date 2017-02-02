import React, { Component, PropTypes } from 'react'
import { View } from 'react-native';
import { connectTheme } from 'carbon-ui';
import Uranium from 'uranium';

class CardActions extends Component {
  
  static propTypes = {
    children: PropTypes.node,
    theme: PropTypes.object.isRequired,
    style: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ])
  };
  
  render() {
    const {children, style} = this.props;
        
    return <View css={[styles.root, style]}>
      {children}
    </View>;
  }
}

export default connectTheme(Uranium(CardActions));

const styles = {
  root: {
    padding: 8,
  }
}
