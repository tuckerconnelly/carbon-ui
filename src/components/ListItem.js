import React, { Component, PropTypes } from 'react'
import { Animated, View, Platform } from 'react-native'
import Uranium, { animate } from 'uranium'
import omit from 'lodash/omit'
import {
  Icon,
  TouchableRipple,

  Subheading,
  Body1,
  Caption,

  Animations,
  Breakpoints,
  Colors,
  gu,
  connectTheme,
} from '../index'

const HOVER_FADE_DURATION = 175
const EXPAND_DURATION = 150
const RIGHT_TEXT_WIDTH = 14 * gu

/**
 * Individual items for the <List /> component.
 *
 * Can become a nested menu item it has ListItem for children. Currently you
 * need to set the padding manually for these for performance reasons, but
 * may be automatic in the future.
 *
 * Examples in the List page.
 */
class ListItem extends Component {
  state = {
    hovered: false,
    expanded: this.props.expanded,
  }

  componentWillUpdate(nextProps, nextState) {
    const { expanded } = this.props
    const { hovered } = this.state

    if (!hovered && nextState.hovered) {
      Animations.standard(this._hoverAV, { duration: HOVER_FADE_DURATION }).start()
    } else if (hovered && !nextState.hovered) {
      Animations.standard(this._hoverAV, { toValue: 0, duration: HOVER_FADE_DURATION }).start()
    }

    // HACK No idea why, but Animated has trouble starting multiple animations
    // from componentWillUpdate. componentDidUpdate is fine, but need to use
    // setState here. Using setTimeout to start the icon one.
    //
    // PERFORMANCE OPTIMIZATION Disabling expansion animations on android
    if (!expanded && nextProps.expanded) {
      if (Platform.OS === 'android') {
        this._expandIconAV.setValue(1)
        this._expandHeightAV.setValue(1)
        this._expandOpacityAV.setValue(1)
        this.setState({ expanded: true, fullyExpanded: true })
      } else {
        this.setState({ expanded: true })
        setTimeout(() =>
          Animations.standard(this._expandIconAV, { duration: EXPAND_DURATION }).start()
        )
        Animations.standard(this._expandHeightAV, { duration: EXPAND_DURATION }).start()
        Animations.standard(this._expandOpacityAV, {
          duration: EXPAND_DURATION,
          delay: 50,
        }).start(() => this.setState({ fullyExpanded: true }))
      }
    } else if (expanded && !nextProps.expanded) {
      if (Platform.OS === 'android') {
        this._expandIconAV.setValue(0)
        this._expandHeightAV.setValue(0)
        this._expandOpacityAV.setValue(0)
        this.setState({ expanded: false, fullyExpanded: false })
      } else {
        this.setState({ fullyExpanded: false })
        setTimeout(() =>
          Animations.standard(this._expandIconAV, { toValue: 0, duration: EXPAND_DURATION }).start()
        )
        Animations.standard(this._expandOpacityAV, {
          toValue: 0,
          duration: EXPAND_DURATION,
        }).start()
        Animations.standard(this._expandHeightAV, {
          delay: 50,
          duration: EXPAND_DURATION,
          toValue: 0,
        }).start(() => this.setState({ expanded: false }))
      }
    }
  }

  _hoverAV = new Animated.Value(0)
  _expandIconAV = new Animated.Value(this.props.expanded ? 1 : 0)
  _expandHeightAV = new Animated.Value(this.props.expanded ? 1 : 0)
  _expandOpacityAV = new Animated.Value(this.props.expanded ? 1 : 0)

  render() {
    const AnimatedIcon = Animated.createAnimatedComponent(Icon)

    const {
      leftIcon,
      primaryText,
      secondaryText,
      secondaryTextLines,
      rightText,
      rightIcon,
      active,
      onPress,
      children,
      style,
      theme,
      ...other
    } = this.props

    const styles = tStyles(theme)
    const childrenCount = React.Children.count(children)
    const otherWithoutCustomProps = omit(other, 'expanded')

    const thereIsSomethingOnTheRight = rightText || rightIcon || childrenCount > 0

    return (
      <View>
        <TouchableRipple
          style={styles.touchable}
          onMouseEnter={() => this.setState({ hovered: true })}
          onMouseLeave={() => this.setState({ hovered: false })}
          onPress={onPress}>
          <Animated.View
            css={styles.body}
            style={[
              animate(['backgroundColor'], styles.body, styles.hovered, this._hoverAV),
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
              style={[
                active && styles.active,
                thereIsSomethingOnTheRight && styles.primaryTextGivenRightEl,
              ]}
              numberOfLines={1}
              ellipsizeMode="tail">
              {primaryText}
            </Subheading>
            {secondaryText &&
              <Body1
                numberOfLines={secondaryTextLines}
                ellipsizeMode="tail"
                style={[
                  styles.secondaryText,
                  rightIcon && styles.secondaryTextGivenRightEl,
                ]}>
                {secondaryText}
              </Body1>
            }
            {rightText &&
              <Caption
                numberOfLines={1}
                ellipsizeMode="tail"
                css={styles.rightText}>
                {rightText}
              </Caption>
            }
            {(childrenCount > 0 && !rightIcon) &&
              <AnimatedIcon
                name="keyboard_arrow_down"
                css={[
                  styles.rightIcon,
                  rightText && styles.rightIconGivenRightText,
                ]}
                style={animate(
                  styles.expandIconCollapsed,
                  styles.expandIconExpanded,
                  this._expandIconAV
                )} />
            }
            {rightIcon &&
              typeof rightIcon === 'string' ?
                <Icon
                  name={rightIcon}
                  css={[
                    styles.rightIcon,
                    rightText && styles.rightIconGivenRightText,
                  ]} /> :
                  <View
                    css={[
                      styles.rightIcon,
                      rightText && styles.rightIconGivenRightText,
                    ]}>
                    {rightIcon}
                  </View>
            }
          </Animated.View>
        </TouchableRipple>
        {childrenCount > 0 && this.state.expanded &&
          <Animated.View
            style={[
              styles.nestedList,
              animate('maxHeight', 0, (childrenCount * 72) + 40, this._expandHeightAV),
              animate('opacity', 0, 1, this._expandOpacityAV),
              this.state.fullyExpanded && { maxHeight: undefined },
            ]}>
            {children}
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
   * The secondary text for the item. Gets cut off at 2 lines.
   */
  secondaryText: PropTypes.string,
  /**
   * The number of lines before the ellipsis will show in the secondary text.
   */
  secondaryTextLines: PropTypes.oneOf([1, 2]),
  /**
   * Will put an <Icon /> with the passed value on the left of the ListItem
   */
  leftIcon: PropTypes.string,
  /**
   * If a string, will put an <Icon /> with the passed value on the right of
   * the list item. If it's an element, it'll place the element on the right of
   * the list item.
   */
  rightIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * The caption text on the top right of the ListItem
   */
  rightText: PropTypes.string,
  /**
   * `true` if the list item is currently selected
   */
  active: PropTypes.bool,
  /**
   * Controls the expanded/collapses state if there are ListItem children
   */
  expanded: PropTypes.bool,
  /**
   * Pass additional ListItems as children to make this ListItem nested
   * and expandable.
   */
  children: PropTypes.node,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onPress: PropTypes.func,

  // connectTheme
  theme: PropTypes.object.isRequired,
}

ListItem.defaultProps = {
  secondaryTextLines: 1,
}

export default
  connectTheme(
  Uranium(
  ListItem))

const tStyles = theme => ({
  touchable: {
    backgroundColor: Colors.white,
  },

  body: {
    paddingVertical: 3 * gu,
    paddingHorizontal: 4 * gu,

    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',

    [Breakpoints.ml]: {
      paddingVertical: 2 * gu,
    },
  },

  secondaryText: {
    color: Colors.blackSecondary,
    lineHeight: 6 * gu,
  },

  leftIcon: {
    marginRight: 8 * gu,
  },

  primaryTextGivenRightEl: {
    marginRight: RIGHT_TEXT_WIDTH,
  },

  secondaryTextGivenRightEl: {
    marginRight: RIGHT_TEXT_WIDTH,
  },

  rightIcon: {
    position: 'absolute',
    right: 4 * gu,
    top: 3 * gu,

    [Breakpoints.ml]: {
      top: 2 * gu,
    },
  },

  rightIconGivenRightText: {
    top: 9 * gu,

    [Breakpoints.ml]: {
      top: 8 * gu,
    },
  },

  rightText: {
    position: 'absolute',
    right: 4 * gu,
    top: 3 * gu,

    width: RIGHT_TEXT_WIDTH,
    textAlign: 'right',

    [Breakpoints.ml]: {
      top: 2 * gu,
    },
  },

  expandIconCollapsed: {
    transform: [{ rotate: '0deg' }],
  },

  expandIconExpanded: {
    transform: [{ rotate: '-180deg' }],
  },

  hovered: {
    backgroundColor: Colors.grey200,
  },

  active: {
    color: theme.colors.primary,
  },

  nestedList: {
    overflow: 'hidden',
  },
})
