import React, { PropTypes } from 'react'
import { Button } from 'react-native'

const Link = ({ active, children, onPress }) => {
  if (active) {
    return <Button
      disabled
      onPress={() => onPress()}
      title={children}
    />
  }

  return (
    <Button
      onPress={() => onPress()}
      title={children}
    />
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired
}

export default Link
