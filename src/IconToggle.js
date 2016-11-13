import React, { PropTypes } from 'react'
import { TouchableRipple, Icon, gu } from './index'

/**
 * Icons are appropriate for toggle buttons that allow a single choice to be
 * selected or deselected, such as adding or removing a star to an item.
 */
const IconToggle = ({ iconName, style, iconStyle, ...other }) =>
  <TouchableRipple
    rippleCentered
    hitSlop={{ top: 3 * gu, right: 3 * gu, bottom: 3 * gu, left: 3 * gu }}
    style={[styles.base, style]}
    {...other}>
    <Icon name={iconName} style={iconStyle} />
  </TouchableRipple>

IconToggle.propTypes = {
  /**
   * The name of the icon, from material icons: https://material.io/icons/
   */
  iconName: PropTypes.string,

  /**
   * The style of the containing TouchableRipple (which is a View)
   */
  style: PropTypes.object,
  /**
   * The style of the Icon element
   */
  iconStyle: PropTypes.object,
}

export default IconToggle

const styles = {
  base: {
    overflow: undefined,
  },
}
