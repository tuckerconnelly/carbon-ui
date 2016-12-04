import React, { Component, PropTypes } from 'react'
import { themes } from '../index'

export default component => {
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
    _node = null

    render() {
      return (
        <WrappedComponent
          {...this.props}
          ref={c => { this._node = c }}
          theme={this.context.theme || themes.light} />
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
