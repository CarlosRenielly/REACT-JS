import './favoritos.css'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function Favoritos(){
  const [filmes, setFilme] = useState ([])

  useEffect(() =>{
    const minhaLista = localStorage.getItem("@solracFilmes");
    setFilme(JSON.parse(minhaLista)|| [])

  },[])
  
  return(
    <div className='meus-filmes'>
      <h1>Meus filmes</h1>
      <ul>
        {filmes.map((item)=>{
          return(
            <li key={item.id}>
              <span>{item.title}</span>
              <div>
                <Link to={`/filme/${item.id}`}>Ver detalhes do filme</Link>
                <button>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Favoritos