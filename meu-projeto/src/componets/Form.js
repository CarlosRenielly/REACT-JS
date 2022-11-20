function Form (){
  
  function cadastrarUsuario (e){
    e.preventDefault()
    console.log("Cadastrou o usuario!")
  }
  
  return(
    <div>
      <h1>Meu cadastro</h1>
      <form onSubmit={cadastrarUsuario} >
        <div>
          <input type="text" name="" id="" pleceholder ="Digite seu nome" />
        </div>
          <input type="submit" name="" value ="Cadastrar" />
      </form>
    </div>
  )
}

export default Form