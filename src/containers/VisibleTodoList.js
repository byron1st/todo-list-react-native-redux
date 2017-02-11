import { connect } from 'react-redux'
import { toggleTodo, VISIBILITY_FILTER } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VISIBILITY_FILTER.SHOW_ALL:
      return todos
    case VISIBILITY_FILTER.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
    case VISIBILITY_FILTER.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoPress: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
