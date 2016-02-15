import React, { PropTypes } from 'react'
import Radium from 'radium'

import Shadows from '../styles/shadows'

const Paper = props => {
  const styles = {
    base: {
      ...Shadows[`dp${props.elevation}`],
    },
  }

  return (
    <div styles={[styles.base, props.styles]}>
      {props.children}
    </div>
  )
}

Paper.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.object,

  elevation: PropTypes.number,
}

Paper.defaultProps = {
  elevation: 2,
}

export default Radium(Paper)
