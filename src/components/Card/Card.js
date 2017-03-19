import React, { PropTypes } from 'react'
import { View } from 'react-native'
import Uranium from 'uranium'
import { Elevation, Breakpoints, Colors, connectTheme } from '../../index'

/**
 *  A card is a sheet of material that serves as an entry point to more detailed
 *  information.
 *
 *  import React from 'react'
 *  import { View, Text } from 'react-native'
 *  import { Card, CardTitle, CardText, CardActions } from 'carbon-ui'
 *  export default () =>
 *    <View>
 *      <Card>
 *        <CardTitle
 *          title="Bacon ipsum"
 *          />
 *        <CardText>
 *          <Text>
 *            Bacon ipsum dolor amet turkey shoulder tongue beef ribs,
 *            ground round meatloaf pastrami cupim drumstick.
 *          </Text>
 *        </CardText>
 *        <CardActions>
 *          <Button title="APPLY"/>
 *          <Button title="CANCEL" />
 *        </CardActions>
 *      </Card>
 *    </View>
 */

const Card = ({ style, children, ...other }) =>
  <View
    css={[
      styles.root,
      style,
    ]}
    {...other}>
    {children}
  </View>

Card.propTypes = {
  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  /**
   * Can be used to render elements inside the Card.
   */
  children: PropTypes.node,
  // connectTheme
  theme: PropTypes.object.isRequired,
}

export default
  connectTheme(
  Uranium(
  Card))

const styles = {
  root: {
    borderRadius: 2,
    marginVertical: 4,
    marginHorizontal: 8,

    flexDirection: 'column',

    backgroundColor: Colors.white,

    // Default elevation is 2dp.
    ...Elevation.dp2,
    // Zero elevation for tablet and desktop.
    [Breakpoints.md]: Elevation.dp0,
  },
}
