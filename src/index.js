import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import { todos } from './realm'

const getInitTodos = (todos) => {
  return todos.map(todo => {
    return {
      id: todo.id,
      text: todo.text,
      completed: todo.completed
    }
  })
}

let store = createStore(todoApp, {
  todos: getInitTodos(todos)
})

export default class FirstTodoApp extends Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
