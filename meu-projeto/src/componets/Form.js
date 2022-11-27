
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
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" id ="name"  placeholder ="Digite seu nome" />
          onChange = {(e) => (e.target.value)}
        </div>
        <div>
          <label htmlFor="passoword">Senha:</label>
          <input type="passoword" name="passoword" id ="passoword"  placeholder ="Digite sua senha" />
        </div>
          <input type="submit" name="" value ="Cadastrar" />
      </form>
    </div>
  )
}

export default Form