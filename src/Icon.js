import React from 'react'
import { Text } from 'react-native-universal'
import ps from 'react-native-ps'

export default ({ style, name, size, ...other }) =>
  <Text
    style={[
      styles.base,
      {
        height: size,
        width: size,

        fontSize: size,
      },
      style,
    ]}
    { ...other }>
    {name}
  </Text>

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
