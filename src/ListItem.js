import React, { PropTypes } from 'react'
import Uranium from 'uranium'
import { Icon, Subheading, Breakpoints, TouchableRipple, connectTheme, gu } from './index'

/**
 * Individual items for the <List /> component
 */
const ListItem = ({ leftIcon, primaryText, active, theme }) => {
  const tStyles = styles(theme)
  return (
    <TouchableRipple css={tStyles.base}>
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
    </TouchableRipple>
  )
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

    [Breakpoints.ml]: {
      height: 10 * gu,
    },
  },

  icon: {
    marginRight: 8 * gu,
  },

  active: {
    color: theme.primary,
  },
})
