/**
 * Sample React Native Todo App
 * This is the Todo List example used
 * in the document of
 * Redux (http://redux.js.org/docs/basics/ExampleTodoList.html),
 * which was ported to React Native
 *
 * author: byron1st
 * date: 2017-02-11
 */

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import FirstTodoApp from './src'

export default class FirstProject extends Component {
  render () {
    return (
      <FirstTodoApp />
    )
  }
}

AppRegistry.registerComponent('FirstProject', () => FirstProject)
