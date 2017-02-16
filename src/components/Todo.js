import React, { PropTypes } from 'react'
import { CardItem, Text } from 'native-base'

const Todo = ({ onPress, completed, text }) => (
  <CardItem>
    <Text
      onPress={onPress}
      style={{
        textDecorationLine: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </Text>
  </CardItem>
)

Todo.propTypes = {
  onPress: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
