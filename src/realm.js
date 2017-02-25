'use strict'

import Realm from 'realm'

const TodoSchema = {
  name: 'Todo',
  primaryKey: 'id',
  properties: {
    id: 'int',
    text: 'string',
    completed: {
      type: 'bool',
      default: false
    }
  }
}

let realm = new Realm({ schema: [TodoSchema] })

export let todos = realm.objects('Todo')
export default realm
