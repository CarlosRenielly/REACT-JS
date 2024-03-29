import './favoritos.css'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'


function Favoritos(){
  const [filmes, setFilme] = useState ([])

  useEffect(() =>{
    const minhaLista = localStorage.getItem("@solracFilmes");
    setFilme(JSON.parse(minhaLista)|| [])

  },[])



function excluirFilme(id){
  let filtroFilmes = filmes.filter((item) => {
     return(item.id !== id)
  })

  setFilme(filtroFilmes)
  localStorage.setItem("@solracFilmes", JSON.stringify(filtroFilmes))
  toast.success("Filme excluído com sucesso! :)")
}  

  
  return(
    <div className='meus-filmes'>
      <h1>Meus filmes</h1>

      {filmes.length === 0 && <span>Você não possui nenhum filme :( </span>}

      <ul>
        {filmes.map((item)=>{
          return(
            <li key={item.id}>
              <span>{item.title}</span>
              <div>
                <Link to={`/filme/${item.id}`}>Ver detalhes do filme</Link>
                <button onClick={() => excluirFilme(item.id)}>Excluir</button>
              </div>
            </li>
          ) 
        })}
      </ul>
    </div>
  )
}

export default Favoritos