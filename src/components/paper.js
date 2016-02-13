import React, { PropTypes } from 'react'
import Radium from 'radium'

import Shadows from '../constants/shadows'

const styles = {
  base: {
    ...Shadows.dp2,
  },
}

const Paper = props =>
  <div styles={[styles.base, props.styles]}>
    {props.children}
  </div>

Paper.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.object,
}

export default Radium(Paper)
