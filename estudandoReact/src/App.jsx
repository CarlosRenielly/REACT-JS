import React from 'react'
import './App.css'

const BemVindo = (props) => {
  return(
    <h1>Seja bem vindo {props.nome}</h1>
  )
}



function App() {

  return (
    <div className='App'>
    <BemVindo nome ="Carlos"/>
    </div>
        
  )
}

export default App
