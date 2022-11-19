function Pessoa ({nome, idade, profissao, foto}){
  return (
    <div>
      <img src={foto} />
      <h2>Nome: {nome}</h2>
      <p>Idaide {idade}</p>
      <p>Profissao: {profissao}</p>
    </div>
  )
}

export default Pessoa