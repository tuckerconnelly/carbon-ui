import React, { PropTypes } from 'react'
import Uranium from 'uranium'
import { Paper, IconToggle, Title, Colors, connectTheme, gu } from './index'

/**
 * The app bar, formerly known as the action bar in Android, is a special kind
 * of toolbar that’s used for branding, navigation, search, and actions.
 */
const AppBar = ({ title, leftIcon, onLeftIconPress, theme, children }) => {
  const tStyles = styles(theme)
  return (
    <Paper
      elevation={4}
      style={tStyles.base}>
      <IconToggle
        iconName={leftIcon}
        style={tStyles.icon}
        iconStyle={tStyles.iconIcon}
        rippleColor={Colors.white}
        onPress={onLeftIconPress} />
      <Title style={tStyles.title}>{title}</Title>
      {children}
    </Paper>
  )
}

AppBar.propTypes = {
  /**
   * The title on the AppBar
   */
  title: PropTypes.string,
  /**
   * The material icon name of the left icon
   */
  leftIcon: PropTypes.string,
  /**
   * Callback for handling presses on the left icon
   */
  onLeftIconPress: PropTypes.func,

  /**
   * Children inserted after the title
   */
  children: PropTypes.node,

  // connectTheme
  theme: PropTypes.object,
}

AppBar.defaultProps = {
  leftIcon: 'menu',
}

export default connectTheme(Uranium(AppBar))

const styles = theme => ({
  base: {
    height: 14 * gu,
    paddingHorizontal: 4 * gu,
    paddingVertical: 1 * gu,

    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: theme.primary,
  },

  icon: {
    marginRight: 5 * gu,
  },

  iconIcon: {
    color: Colors.white,
  },

  title: {
    color: Colors.white,
  },
})
