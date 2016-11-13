import React, { PropTypes } from 'react'
import { View } from 'react-native'
import Uranium from 'uranium'
import ps from 'react-native-ps'
import { IconToggle, Title, Colors, Breakpoints, Shadows, connectTheme, gu } from './index'

/**
 * The app bar, formerly known as the action bar in Android, is a special kind
 * of toolbar that’s used for branding, navigation, search, and actions.
 */
const AppBar = ({ title, leftIcon, onLeftIconPress, theme, css, children, ...other }) => {
  const tStyles = styles(theme)
  return (
    <View css={[tStyles.base, css]} {...other}>
      <IconToggle
        iconName={leftIcon}
        style={tStyles.icon}
        iconStyle={tStyles.iconIcon}
        rippleColor={Colors.white}
        onPress={onLeftIconPress} />
      <Title style={tStyles.title}>{title}</Title>
      {children}
    </View>
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
  css: PropTypes.object,

  // connectTheme
  theme: PropTypes.object,
}

AppBar.defaultProps = {
  leftIcon: 'menu',
}

export default connectTheme(Uranium(AppBar))

const IOS_HEADING_SIZE = 20
const styles = theme => ps({
  base: {
    height: 14 * gu,
    padding: 1 * gu,

    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: theme.primary,

    ...Shadows.dp4,

    zIndex: 100,

    [Breakpoints.sm]: {
      height: 12 * gu,
    },

    [Breakpoints.ml]: {
      height: 16 * gu,
    },
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

  // Account for heading on iOS in portrait mode
  ios: {
    base: {
      height: (14 * gu) + IOS_HEADING_SIZE,
      paddingTop: IOS_HEADING_SIZE,

      [Breakpoints.sm]: {
        paddingTop: 4,
      },
    },
  },
})
