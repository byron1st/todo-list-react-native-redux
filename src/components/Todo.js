import React, { PropTypes } from 'react'
import { Text } from 'react-native'

const Todo = ({ onPress, completed, text }) => (
  <Text
    onPress={onPress}
    style={{
      textDecorationLine: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </Text>
)

Todo.propTypes = {
  onPress: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
