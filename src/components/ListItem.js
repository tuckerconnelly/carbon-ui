import React, { Component, PropTypes } from 'react'
import { Animated, View } from 'react-native-universal'
import Uranium, { animate } from 'uranium'
import omit from 'lodash/omit'
import {
  Icon,
  Subheading,
  TouchableRipple,

  Animations,
  Breakpoints,
  Colors,
  gu,
  connectTheme,
} from '../index'

const HOVER_FADE_DURATION = 175
const EXPAND_DURATION = 150

/**
 * Individual items for the <List /> component
 */
class ListItem extends Component {
  state = { hovered: false }

  componentDidUpdate(prevProps, prevState) {
    const { expanded } = this.props
    const { hovered } = this.state

    if (!prevState.hovered && hovered) {
      Animations.standard(this._hoverAV, 1, HOVER_FADE_DURATION).start()
    } else if (prevState.hovered && !hovered) {
      Animations.standard(this._hoverAV, 0, HOVER_FADE_DURATION).start()
    }

    if (!prevProps.expanded && expanded) {
      Animations.standard(this._expandIconAV, 1, EXPAND_DURATION).start()
      Animations.staggered(this._expandHeightAV, this._expandOpacityAV, 1, EXPAND_DURATION).start()
    } else if (prevProps.expanded && !expanded) {
      Animations.standard(this._expandIconAV, 0, EXPAND_DURATION).start()
      Animations.staggered(this._expandHeightAV, this._expandOpacityAV, 0, EXPAND_DURATION).start()
    }
  }

  _hoverAV = new Animated.Value(0)
  _expandIconAV = new Animated.Value(this.props.expanded ? 1 : 0)
  _expandHeightAV = new Animated.Value(this.props.expanded ? 1 : 0)
  _expandOpacityAV = new Animated.Value(this.props.expanded ? 1 : 0)

  render() {
    const AnimatedIcon = Animated.createAnimatedComponent(Icon)

    const { leftIcon, primaryText, active, onPress, children, style, theme, ...other } = this.props

    const styles = tStyles(theme)
    const childrenCount = React.Children.count(children)
    const otherWithoutCustomProps = omit(other, 'expanded')

    return (
      <View>
        <TouchableRipple
          onMouseEnter={() => this.setState({ hovered: true })}
          onMouseLeave={() => this.setState({ hovered: false })}
          onPress={onPress}>
          <Animated.View
            css={styles.base}
            style={[
              animate(['backgroundColor'], styles.base, styles.hovered, this._hoverAV),
            ].concat(style)}
            {...otherWithoutCustomProps}>
            {leftIcon &&
              <Icon
                name={leftIcon}
                style={[
                  styles.leftIcon,
                  active && styles.active,
                ]} />
            }
            <Subheading
              style={active ? styles.active : undefined}
              numberOfLines={1}
              ellipsizeMode="tail">
              {primaryText}
            </Subheading>
            {childrenCount > 0 &&
              <AnimatedIcon
                name="keyboard_arrow_down"
                css={styles.rightIcon}
                style={animate(
                  styles.expandIconCollapsed,
                  styles.expandIconExpanded,
                  this._expandIconAV
                )} />
            }
          </Animated.View>
        </TouchableRipple>
        {childrenCount > 0 &&
          <Animated.View
            style={[
              styles.nestedList,
              animate('maxHeight', 0, (childrenCount * styles.base.height) + 40, this._expandHeightAV),
              animate('opacity', 0, 1, this._expandOpacityAV),
            ]}>
            {/* Man, all this just to add padding to children elements */}
            {React.Children.map(children, listItem =>
              React.cloneElement(listItem, {
                ...listItem.props,
                style: {
                  ...styles.nestedListItem,
                  ...listItem.props.style,
                },
              })
            )}
          </Animated.View>
        }
      </View>
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
  /**
   * Controls the expanded/collapses state if there are ListItem children
   */
  expanded: PropTypes.bool,
  /**
   * Pass additional ListItems as children to make this ListItem expandable
   */
  children: PropTypes.node,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onPress: PropTypes.func,

  // connectTheme
  theme: PropTypes.object.isRequired,
}

export default
  connectTheme(
  Uranium(
  ListItem))

const tStyles = theme => ({
  base: {
    height: 12 * gu,
    paddingHorizontal: 4 * gu,

    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',

    backgroundColor: Colors.white,

    [Breakpoints.ml]: {
      height: 10 * gu,
    },
  },

  leftIcon: {
    marginRight: 8 * gu,
  },

  rightIcon: {
    position: 'absolute',
    right: 4 * gu,
    top: 3 * gu,

    [Breakpoints.ml]: {
      top: 2 * gu,
    },
  },

  expandIconCollapsed: {
    transform: [{ rotateZ: '0deg' }],
  },

  expandIconExpanded: {
    transform: [{ rotateZ: '-180deg' }],
  },

  hovered: {
    backgroundColor: Colors.grey200,
  },

  active: {
    color: theme.primary,
  },

  nestedList: {
    overflow: 'hidden',
  },

  nestedListItem: {
    paddingLeft: 18 * gu,
  },
})
