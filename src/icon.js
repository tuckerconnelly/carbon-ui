import React, { PropTypes } from 'react'
import Radium from 'radium'

const Icon = props =>
  <i className="material-icon" styles={props.styles}>
    {props.children}
  </i>

Icon.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.object,
}

export default Radium(Icon)
