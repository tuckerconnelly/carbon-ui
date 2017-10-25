import React, { Component } from 'react'
import PropTypes from 'prop-types'
import merge from 'lodash/merge'
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
      const { mergeTheme, ...rest } = this.props
      return (
        <WrappedComponent
          {...rest}
          ref={c => { this._node = c }}
          theme={merge(this.context.theme || themes.light, mergeTheme || {})} />
      )
    }
  }

  ConnectTheme.propTypes = {
    mergeTheme: PropTypes.object,
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
