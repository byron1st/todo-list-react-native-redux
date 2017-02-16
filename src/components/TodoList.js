import React, { PropTypes } from 'react'
import { Card } from 'native-base'
import Todo from './Todo'

const TodoList = ({ todos, onTodoPress }) => {
  return (
    <Card>
      {todos.map(todo =>
        <Todo key={todo.id}
          {...todo}
          onPress={() => onTodoPress(todo.id)}
        />
      )}
    </Card>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoPress: PropTypes.func.isRequired
}

export default TodoList
