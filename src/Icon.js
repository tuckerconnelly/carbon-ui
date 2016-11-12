import React, { PropTypes } from 'react'
import { Text } from 'react-native-universal'
import ps from 'react-native-ps'

const Icon = ({ style, name, size, ...other }) =>
  <Text
    style={[
      styles.base,
      {
        height: size,
        width: size,

        fontSize: size,
        lineHeight: size,
      },
      style,
    ]}
    {...other}>
    {name}
  </Text>

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,

  style: PropTypes.object,
}

export default Icon

const styles = ps({
  base: {
    fontFamily: 'MaterialIcons-Regular',
  },


  web: {
    base: {
      wordWrap: 'normal',
    },
  },
})
