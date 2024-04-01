// Props Functions
// http://localhost:3000/alone/exercise/03.js
/* eslint-disable no-unused-vars */
import * as React from 'react'
import fetchAPIMock, {apiSubscribe, apiUnSubscribe} from '../data'

// 🐶 Tu vas devoir supprimer les appels  'apiSubscribe()' 'apiUnSubscribe()' 'fetchAPIMock()'
// des composants 'TodoList' et 'NotesList' et les faire remonter dans le HOC

// 🐶 Ici un HOC 'withSubscription' avec 2 paramètres 'WrappedComponent' et 'selectData'
function withSubscription(WrappedComponent, selectData) {
  return function (props) {
    // 🐶 Implemente ici l'appel à la souscription d'API
    // 🤖  apiSubscribe()
    apiSubscribe()
    // 🐶 Implemente ici l'appel qui permettra de charger les données et les sotcker dans `data`
    // utilise la 'dataSource' 'fetchAPIMock' et 'selectData'
    const data = selectData(fetchAPIMock)
    // 🐶 Implemente ici l'appel à la désouscription  d'API
    // 🤖  apiUnSubscribe()
    apiUnSubscribe()
    // 🐶 Passe les data en prop de WrappedComponent
    // N'oublie pas de transmettre tous les autres props : {...props}
    return <WrappedComponent data={data} {...props} />
  }
}

// 🐶 Utilise TodoListWithSubscription et NotesWithSubscription dans le render de <App />
const TodoListWithSubscription = withSubscription(
  TodoList,
  DataSource => DataSource().todos,
)

const NotesWithSubscription = withSubscription(
  NotesList,
  DataSource => DataSource().notes,
)

function TodoList({data}) {
  //⚠️ Dans la réalité il faudrait utiliser un state et useEffect. Ici fetchAPIMock() est synchrone
  // pour simplifier la démonstration
  return (
    <div>
      {data.map(todo => (
        <div key={todo.id}>{todo.name}</div>
      ))}
    </div>
  )
}

function NotesList({data}) {
  return (
    <div>
      {data.map(todo => (
        <div key={todo.id}>{todo.name}</div>
      ))}
    </div>
  )
}

function App() {
  return (
    <>
      <TodoListWithSubscription/>
      <NotesWithSubscription/>
    </>
  )
}

export default App
