import React from './React'
const { Component, PropTypes } = React
import invariant from 'invariant'

export default (component) => {
  let WrappedComponent = component

  // Handle stateless components
  if (!WrappedComponent.render && !WrappedComponent.prototype.render) {
    WrappedComponent = class extends Component {
      render() {
        return component(this.props, this.context)
      }
    }
  }

  class ConnectTheme extends Component {
    constructor(props, context) {
      super(props, context)
      invariant(context.theme,
        'Couldn\'t find the theme on the context. ' +
        '<ThemeProvider> needs to exist in component ancestry.')
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          theme={this.context.theme} />
      )
    }
  }

  ConnectTheme.displayName =
    `ConnectTheme(${Component.displayName || Component.name || 'Component'})`

  ConnectTheme.contextTypes = {
    ...ConnectTheme.contextTypes,
    theme: PropTypes.object,
  }

  ConnectTheme.childContextTypes = {
    ...ConnectTheme.childContextTypes,
    theme: PropTypes.object,
  }

  return ConnectTheme
}
