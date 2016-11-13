import React, { PropTypes } from 'react'
import { Text } from 'react-native-universal'
import ps from 'react-native-ps'

const SIZE = 24

const Icon = ({ name, style, ...other }) =>
  <Text
    style={[
      styles.base,
      {
        height: SIZE,
        width: SIZE,

        fontSize: SIZE,
        lineHeight: SIZE,
      },
      style,
    ]}
    {...other}>
    {name}
  </Text>

Icon.propTypes = {
  name: PropTypes.string.isRequired,

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
