import React, { PropTypes } from 'react'
import Radium from 'radium'

import Shadows from './styles/shadows'

const Paper = props => {
  const styles = {
    base: {
      ...Shadows[`dp${props.elevation}`],
    },
  }

  return (
    <div style={[styles.base, props.style]}>
      {props.children}
    </div>
  )
}

Paper.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,

  elevation: PropTypes.number,
}

Paper.defaultProps = {
  elevation: 2,
}

export default Radium(Paper)
