import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native'
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
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
          onPress={() => {
            this.props.dispatch(addTodo(this.state.text))
            this.setState({text: ''})
          }}
          title='Add a todo'
        />
      </View>
    )
  }
}

export default connect()(AddTodoClass)
