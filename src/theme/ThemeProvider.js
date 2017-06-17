import { Component, Children } from 'react'
import PropTypes from 'prop-types'
import lightTheme from './themes/light'

class ThemeProvider extends Component {
  constructor(props, context) {
    super(props, context)
    this.theme = props.theme
  }

  getChildContext() {
    return { theme: this.theme }
  }

  render() {
    return Children.only(this.props.children)
  }
}

ThemeProvider.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node.isRequired,
}

ThemeProvider.defaultProps = {
  theme: lightTheme,
}

ThemeProvider.childContextTypes = {
  theme: PropTypes.object,
}

export default ThemeProvider
