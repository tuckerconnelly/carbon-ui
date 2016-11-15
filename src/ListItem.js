import React, { Component, PropTypes } from 'react'
import { Animated } from 'react-native-universal'
import Uranium, { animate } from 'uranium'
import {
  Icon,
  Subheading,
  TouchableRipple,

  Animations,
  Breakpoints,
  Colors,
  gu,
  connectTheme,
} from './index'

const HOVER_FADE_DURATION = 175

/**
 * Individual items for the <List /> component
 */
class ListItem extends Component {
  state = { hovered: false }

  componentDidUpdate(_, prevState) {
    const { hovered } = this.state

    if (!prevState.hovered && hovered) {
      Animations.standard(this._hoverAV, 1, HOVER_FADE_DURATION).start()
    } else if (prevState.hovered && !hovered) {
      Animations.standard(this._hoverAV, 0, HOVER_FADE_DURATION).start()
    }
  }

  _hoverAV = new Animated.Value(0)

  render() {
    const { leftIcon, primaryText, active, theme } = this.props

    const tStyles = styles(theme)

    // HACK I think a circular dependency somewhere is causing TouchableRipple
    // to be undefined in the closure, so putting it here for now
    const AnimatedTouchableRipple = Animated.createAnimatedComponent(TouchableRipple)

    return (
      <AnimatedTouchableRipple
        css={[
          tStyles.base,
          animate(['backgroundColor'], tStyles.base, tStyles.hovered, this._hoverAV),
        ]}
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}>
        {leftIcon &&
          <Icon
            name={leftIcon}
            style={[
              tStyles.icon,
              active && tStyles.active,
            ]} />
        }
        <Subheading
          style={active && tStyles.active}>
          {primaryText}
        </Subheading>
      </AnimatedTouchableRipple>
    )
  }
}

ListItem.propTypes = {
  /**
   * The primary text for the item
   */
  primaryText: PropTypes.string,
  /**
   * Usually an <Icon /> or <Avatar />
   */
  leftIcon: PropTypes.string,
  /**
   * `true` if the list item is currently selected
   */
  active: PropTypes.bool,

  // connectTheme
  theme: PropTypes.object.isRequired,
}

export default
  connectTheme(
  Uranium(
  ListItem))

const styles = theme => ({
  base: {
    justifyContent: 'center',

    height: 12 * gu,
    paddingLeft: 4 * gu,

    backgroundColor: Colors.white,

    [Breakpoints.ml]: {
      height: 10 * gu,
    },
  },

  icon: {
    marginRight: 8 * gu,
  },

  hovered: {
    backgroundColor: Colors.grey200,
  },

  active: {
    color: theme.primary,
  },
})
