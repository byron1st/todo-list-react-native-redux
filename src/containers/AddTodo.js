import React, { Component } from 'react'
import { Text, Form, Item, Input, Button } from 'native-base'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodoClass extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  render () {
    return (
      <Form>
        <Item>
          <Input
            placeholder='Add a todo'
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </Item>
        <Button
          block
          onPress={() => {
            this.props.dispatch(addTodo(this.state.text))
            this.setState({text: ''})
          }}
        >
          <Text>Add a todo</Text>
        </Button>
      </Form>
    )
  }
}

export default connect()(AddTodoClass)
