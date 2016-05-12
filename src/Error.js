import React, { PropTypes } from 'react'

import { Caption } from './Type'
import connectTheme from './connectTheme'

const Error = ({ style, theme, children, ...other }) =>
  <Caption
    style={[styles(theme).base, style]}
    {...other}>
    {children}
  </Caption>

Error.propTypes = {
  theme: PropTypes.object.isRequired,
  children: PropTypes.node,
}

const styles = theme => ({
  base: {
    color: theme.error,
  },
})

export default connectTheme(Error)
