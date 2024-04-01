// Props Functions
// http://localhost:3000/alone/exercise/02.js

import * as React from 'react'

// 🐶 Créé 3 props du composant Calcul : 'nb1', 'nb2' pour les nombres à calculer
// et le prop opération qui contiendra la fonction de calcul
// 🤖 utilise la destruction `Calcul({nb1, nb2, operation})`

function Calcul({nb1,nb2,operation}) {
  const [result, setResult] = React.useState(null)
  const [number1, setNumber1] = React.useState(nb1)
  const [number2, setNumber2] = React.useState(nb2)

  const opName = operation.name
 
  // 🐶 Récupère le nom de l'opération via à la propriété 'name' de 'function'
  // 🤖 `operation.name`
  // 📑 https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/name

  const handleClick= (a=nb1,b=nb2) => {
    if (a instanceof Object) {
      a = nb1
    }
    setNumber1(a)
    setNumber2(b)
    setResult(operation(a,b))
  }
  return (
    <>
      <input 
        type='button' 
        onClick={() => handleClick(50,20)} 
        value={`Calculer ${opName} de 50 et 20`}
      />
      <input type='button' onClick={handleClick} value={`Calculer ${opName} de ${nb1} et ${nb2}`}/>
      {result 
      ?<div>L'opération {opName} de {number1} et {number2} donne {result} </div> 
      : null}
    </>
  )
}


function App() {
  const add = (nb1,nb2) => nb1+nb2
  const multiplication = (nb1,nb2) => nb1*nb2
  const expose = (nb1,nb2) => nb1 * Math.exp(nb2)
  
  return (
    <>
     <Calcul nb1={2} nb2={3} operation={add}></Calcul>
     <Calcul nb1={4} nb2={5} operation={multiplication}></Calcul>
     <Calcul nb1={2} nb2={2} operation={expose}></Calcul>
    </>
  )
}

export default App
