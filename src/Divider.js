import React from './React'
const { PropTypes, View } = React

import connectTheme from './connectTheme'

const Divider = ({ color, theme }) =>
  <View
    style={[
      styles(theme).base,
      color && { backgroundColor: color },
    ]} />

Divider.propTypes = {
  color: PropTypes.string,
  theme: PropTypes.object.isRequired,
}

const styles = theme => ({
  base: {
    alignSelf: 'stretch',
    height: 1,
    backgroundColor: theme.divider,
    borderBottomColor: theme.divider,
  },
})

export default connectTheme(Divider)
