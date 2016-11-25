import React, { PropTypes } from 'react'
import { TouchableRipple, Icon, gu } from './index'

/**
 * Icons are appropriate for toggle buttons that allow a single choice to be
 * selected or deselected, such as adding or removing a star to an item.
 */
const IconToggle = ({ iconName, style, iconStyle, ...other }) => { // eslint-disable-line arrow-body-style, max-len
  // Implementing hitslop manually and reducing rippleSpread to get around
  // no overflow: visible in android:
  // https://github.com/facebook/react-native/issues/3198
  return (
    <TouchableRipple
      rippleCentered
      rippleSpread={0.34}
      style={[styles.base, style]}
      {...other}>
      <Icon name={iconName} style={iconStyle} />
    </TouchableRipple>
  )
}

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
    width: 9 * gu,
    height: 9 * gu,

    alignItems: 'center',
    justifyContent: 'center',
    overflow: undefined,
  },
}
