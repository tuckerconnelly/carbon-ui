import React, { Platform, Text } from 'react-native'

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

const styles = {
  base: {
    fontFamily: 'MaterialIcons-Regular',
  },
}

if (Platform.OS === 'web') {
  styles.base = {
    ...styles.base,
    wordWrap: 'normal',
  }
}
