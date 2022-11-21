import {useState} from 'react'

function Condicional (){
  const[email, setEmail] = useState()


  function enviarEmail (e){
    e.preventDefault()
    console.log("Testando")
  }
  
  return(
    <div>
      <h2>Cadastre o seu email:</h2>
      <form>
        <input type="email" placeholder='Digite seu email aqui' onChange={(e) => setEmail(e.target.value)}/>
      <button type="submit"  onClick ={enviarEmail}>Enviar Email</button>
      </form>
    </div>
  )
}

export default Condicional