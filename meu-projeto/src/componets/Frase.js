import style from './Frase.module.css'

function Frase (){
  return(
    <div className= {style.fraseContainer}>
      <p className= {style.fraseContent}>Essa é a frase mais linda!</p>
      <p className= {style.fraseContent}>Essa é a frase mais linda!</p>
    </div>
  )
}

export default Frase