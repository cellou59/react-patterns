// State Hoisting
// http://localhost:3000/alone/exercise/05.js

import * as React from 'react'
import {fetchTodoAPI} from '../data'

// 🐶 Créé un props 'todos'
function Header({todos}) {
  return <div>Vous avez {todos.length} tâches </div>
}

// 🐶 Créé un props 'todos'
function TodoList({todos}) {
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>{todo.name}</div>
      ))}
    </div>
  )
}

function App() {
  const todosFromAPI = fetchTodoAPI()
  const [todos] = React.useState(todosFromAPI)
  return (
    <>
      <Header todos={todos} />
      <TodoList todos={todos} />
    </>
  )
}

export default App
