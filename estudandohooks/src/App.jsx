import './App.css'

import {useState} from 'react'

function App() {

  const [name, setName] = useState ('')
  const [number, setNumber] = useState (5)

  const changeNumer = () => {
    setNumber(number + 1)
  }

  return (
    <div className='App'>
      <h1>Olá, me chamo {name}</h1>
      <input type="text" value={name} onChange = {(e) => setName(e.target.value)}  />
      <div>
        <p>Alterar o numero {number}</p>
        <button onClick={changeNumer} >Alterar</button>
      </div>
    </div>
    
   
    

    
    
  )
}

export default App
