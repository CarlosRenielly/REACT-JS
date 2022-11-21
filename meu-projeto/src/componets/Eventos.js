import Button from './eventos/Button'

function Evento (){
  function meuEvento(){
    console.log('ativando o primeiro evento')
  }
 
  return (
    <div>
      <p>Clique para disparar um evento:</p>
      <button  event = {meuEvento} text="Primeiro Evento">Primeiro Evento</button>
    </div>
  )
}

export default Evento