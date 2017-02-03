import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import Uranium from 'uranium'
import { Breakpoints, connectTheme } from '../../index'

class CardTitle extends Component {
  static propTypes = {
    children: PropTypes.node,
    subtitle: PropTypes.node,
    subtitleStyle: PropTypes.object,
    title: PropTypes.node,
    titleStyle: PropTypes.object,
    theme: PropTypes.object.isRequired,
    style: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
  };

  render() {
    const {
      children,
      style,
      subtitle,
      subtitleStyle,
      title,
      titleStyle,
      ...other
    } = this.props

    return (
      <View {...other} css={[styles.root, style]}>
        <Text css={[subtitle ? styles.title : styles.subtitle, titleStyle]}>
          {title}
        </Text>
        {subtitle && <Text css={[styles.subtitle, subtitleStyle]}>
          {subtitle}
          {children}
        </Text> }
      </View>
    )
  }
}

const styles = {
  root: {
    paddingTop: 24,
    paddingBottom: 16,
    paddingRight: 16,
    paddingLeft: 16,
    position: 'relative',
    // Larger left and right padding for tablet and desktop.
    [Breakpoints.md]: {
      paddingRight: 24,
      paddingLeft: 24,
    },
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 14,
  },
}

export default connectTheme(Uranium(CardTitle))
