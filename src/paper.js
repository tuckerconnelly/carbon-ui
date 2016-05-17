import React, { PropTypes } from 'react'
import { View } from 'react-native-universal'
import Uranium from 'uranium'

import Shadows from './styles/Shadows'

const Paper = ({ style, css, children, elevation, ...other }) =>
  <View
    css={[
      styles.base,
      { ...Shadows[`dp${elevation}`] },
    ].concat(style, css)}
    {...other}>
    {children}
  </View>

Paper.propTypes = {
  children: PropTypes.node,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  css: PropTypes.object,

  elevation: PropTypes.number,
}

Paper.defaultProps = {
  elevation: 2,
}

export default Uranium(Paper)


const styles = {
  base: {
    padding: 16,
    marginBottom: 16,

    backgroundColor: 'white',
  },
}
