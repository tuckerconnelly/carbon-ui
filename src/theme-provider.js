import { Component, PropTypes, Children } from 'react'

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

ThemeProvider.childContextTypes = {
  theme: PropTypes.object,
}

export default ThemeProvider
