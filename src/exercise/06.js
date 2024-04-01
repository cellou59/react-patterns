// Lifting State Up
// http://localhost:3000/alone/exercise/06.js

import * as React from 'react'

function NameInput({name,onNameChange}) {
  return (
    <span>
      <label>Name : </label>
      <input type="text" value={name} onChange={(e) => onNameChange(e.target.value)} />
    </span>
  )
}

function FirstNameInput({firstName,onNameChange}) {
  return (
    <span>
      <label>FirstName : </label>
      <input type="text" value={firstName} onChange={(e) => onNameChange(e.target.value)} />
    </span>
  )
}
function App() {

  const [name, setName] = React.useState('')
  const [firstName, setFirstName] = React.useState('')

  return (
    <div>
      <NameInput onNameChange={setName} name={name} />
      <FirstNameInput onNameChange={setFirstName} firstName={firstName} />
      <div>Bonjour: {firstName} {name} </div>
    </div>
  )
}

export default App
