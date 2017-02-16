import React from 'react'
import { Container, Content, Header, Body, Title, Left, Right } from 'native-base'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo'
import Footer from '../components/Footer'

const App = () => (
  <Container>
    <Header>
      <Left />
      <Body>
        <Title>Todo List</Title>
      </Body>
      <Right />
    </Header>
    <Content>
      <AddTodo />
      <VisibleTodoList />
    </Content>
    <Footer />
  </Container>
)

export default App
