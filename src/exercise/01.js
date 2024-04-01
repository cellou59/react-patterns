// Composant Proxy
// http://localhost:3000/alone/exercise/01.js

import * as React from 'react'

// 🐶 Créé un composant proxy 'Button' ayant la même implementaiton du bouton qu'actuellement
// 🤖 return <button>👍</button>

// 🐶 Remplace tous les `<button>👍</button>` par le proxy composant 'Button'

function Button({backgroundColor,border,padding,children}) {
  return (
    <>
      <input type='button' style={{backgroundColor, border, padding, cursor: 'pointer'}} value={children}/>
    </>
  )
}
function Header() {
  return (
    <div>
      <h1>Welcome</h1>
      <Button backgroundColor={'white'} border={'1px solid white'} padding={'6px'}>👍</Button>
    </div>
  )
}
function Content() {
  return (
    <div>
      <h2>Articles</h2>
      <span>article 1</span>
      <Button backgroundColor={'blue'} border={'1px solid black'} padding={'6px'}>👍</Button>
      <span>article 2</span>
      <Button backgroundColor={'green'} border={'1px solid black'} padding={'6px'}>👍</Button>
      <span>article 3</span>
      <Button backgroundColor={'yellow'} border={'1px solid black'} padding={'6px'}>👍</Button>
    </div>
  )
}
function Footer() {
  return (
    <div>
      <h3>Contact us</h3>
      <Button backgroundColor={'red'} border={'1px solid black'} padding={'6px'}>👍</Button>
    </div>
  )
}

function App() {
  return (
    <React.Fragment>
      <Header />
      <Content />
      <Footer />
    </React.Fragment>
  )
}

export default App
