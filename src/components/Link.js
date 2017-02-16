import React, { PropTypes } from 'react'
import { Button, Text } from 'native-base'

const Link = ({ active, children, onPress }) => {
  if (active) {
    return <Button
      onPress={() => onPress()}
      active
    >
      <Text>{children}</Text>
    </Button>
  }

  return (
    <Button
      onPress={() => onPress()}
    >
      <Text>{children}</Text>
    </Button>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired
}

export default Link
