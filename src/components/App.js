import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo'
import Footer from '../components/Footer'

const App = () => (
  <View style={styles.containers}>
    <AddTodo />
    <Text>*******Todo List*******</Text>
    <VisibleTodoList />
    <Footer />
  </View>
)

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF'
  }
})

export default App
