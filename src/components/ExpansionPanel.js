import React, { Component, PropTypes } from 'react'
import { Animated, View } from 'react-native-universal'
import { animate } from 'uranium'
import { Animations, Icon, TouchableRipple, Body1, Paper, gu } from '../index'

/**
 * Expansion panels contain creation flows and allow lightweight editing of an element.
 */
class ExpansionPanel extends Component {
  state = { expanded: false }

  componentWillReceiveProps(next) {
    const { expanded } = this.props
    // Timeouts because transform animations stop if the component updates
    // mid-animation
    if (!expanded && next.expanded) {
      Animations.standard(this._labelOpacityAV, {
        delay: 50,
        duration: 175,
        toValue: 0,
      }).start(() => this.setState({ expanded: true }))
      Animations.standard(this._opacityAV, { delay: 175, duration: 300 }).start()
      Animations.standard(this._heightAV).start()
      setTimeout(() => Animations.standard(this._iconAV, { duration: 150 }).start())
    }
    if (expanded && !next.expanded) {
      Animations.standard(this._heightAV, { delay: 50, duration: 300, toValue: 0 }).start()
      setTimeout(() => Animations.standard(this._opacityAV, {
        duration: 150,
        toValue: 0,
      }).start(() => this.setState({ expanded: false })))
      Animations.standard(this._labelOpacityAV, { delay: 150, duration: 300, toValue: 1 }).start()
      setTimeout(() => Animations.standard(this._iconAV, { duration: 150, toValue: 0 }).start())
    }
  }

  _labelOpacityAV = new Animated.Value(this.props.expanded ? 0 : 1)
  _opacityAV = new Animated.Value(this.props.expanded ? 1 : 0)
  _heightAV = new Animated.Value(this.props.expanded ? 1 : 0)
  _iconAV = new Animated.Value(this.props.expanded ? 1 : 0)

  render() {
    const { actions, label, children, approximateHeight, onExpand } = this.props
    const { expanded } = this.state

    const AnimatedIcon = Animated.createAnimatedComponent(Icon)

    const labelEl = typeof label === 'string' ?
      <Body1 style={styles.labelText}>{label}</Body1> :
      label

    // Having trouble making an AnimatedPaper, so using an outer Animated.View
    // for the margins
    return (
      <Animated.View style={animate('marginVertical', 0, 16, this._heightAV)}>
        <Paper style={styles.base}>
          {!expanded &&
            <TouchableRipple
              style={styles.label}
              onPress={onExpand}>
              <Animated.View
                style={animate('opacity', 0, 1, this._labelOpacityAV)}>
                {labelEl}
              </Animated.View>
            </TouchableRipple>
          }
          <AnimatedIcon
            name="keyboard_arrow_down"
            style={[
              styles.icon,
              animate(['transform'], styles.icon, styles.iconExpanded, this._iconAV),
            ]} />
          <Animated.View
            style={[
              styles.content,
              animate('opacity', 0, 1, this._opacityAV),
              animate('maxHeight', 0, approximateHeight, this._heightAV),
            ]}>
            <View style={styles.body}>
              {children}
            </View>
            {!!actions &&
              <View style={styles.actions}>
                {Array.isArray(actions) ? React.Children.toArray(actions) : actions}
              </View>
            }
          </Animated.View>
        </Paper>
      </Animated.View>
    )
  }
}

ExpansionPanel.propTypes = {
  /**
   * Will expand the panel if true.
   */
  expanded: PropTypes.bool,
  /**
   * The handler for when the the user presses to expand
   */
  onExpand: PropTypes.func,
  /**
   * The label for the collapsed state
   */
  label: PropTypes.node,
  /**
   * The body of the expanded panel
   */
  children: PropTypes.node,
  /**
   * The buttons on the bottom of the expanded panel
   */
  actions: PropTypes.node,
  /**
   * This component animates its height using maxHeight so it can accept any
   * content for it's children property and still animate its height. Pass
   * an approximate height when expanded here for a more accurate animation.
   */
  approximateHeight: PropTypes.number,
}

ExpansionPanel.defaultProps = {
  expanded: false,
  onExpand: () => 0,
  approximateHeight: 50 * gu,
}

export default ExpansionPanel

const styles = {
  base: {
    position: 'relative',
    minHeight: 12 * gu,

    padding: 0,

    alignSelf: 'stretch',
  },

  label: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,

    paddingLeft: 6 * gu,
    paddingRight: 15 * gu,
    paddingVertical: 3 * gu,

    flexDirection: 'row',

    zIndex: 100,
  },

  icon: {
    position: 'absolute',
    right: 4 * gu,
    top: 4 * gu,
    transform: [{ rotate: '0deg' }],
  },

  iconExpanded: {
    transform: [{ rotate: '-180deg' }],
  },

  body: {
    paddingTop: 5 * gu,
    paddingBottom: 4 * gu,
    paddingHorizontal: 6 * gu,
  },

  actions: {
    paddingRight: 2 * gu,
    paddingLeft: 6 * gu,
    paddingVertical: 2 * gu,

    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
}
