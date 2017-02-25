import {ADD_TODO, TOGGLE_TODO} from '../actions'
import realm from '../realm'

const todo = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      let newTodo = {
        id: action.id,
        text: action.text,
        completed: false
      }

      realm.write(() => realm.create('Todo', newTodo))
      return newTodo
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state
      }

      realm.write(() => realm.create('Todo', {id: action.id, completed: !state.completed}, true))
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ]
    case TOGGLE_TODO:
      return state.map(t => todo(t, action))
    default:
      return state
  }
}

export default todos
