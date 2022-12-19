
import './filme-info.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from '../../services/api';




function Filme(){
  const {id} = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] =useState(true);

  useEffect(()=>{
    async function loadFilme(){
      await api.get(`/movie/${id}`, {
        params:{
          api_key: "7f55d4ca94d28d60688e92a275175d62",
          language: "pt-BR",
        }
      })
      .then((r)=>{
        setFilme(r.data);
        setLoading(false);
      })
      .catch(()=>{
        console.log("FILME NÃO ENCONTRADO")
      })
    }
    loadFilme();

    return() => {
      console.log("COMPONENTE FOI DESMONSTADO")
    }
  },[])

    if(loading){
      return(
        <div className="filmes-info">
          <h1>Carregando detalhes..</h1>
        </div>
      )
    }

  
    return(
    <div className="filmes-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}` } alt={filme.title} srcset="" />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average} / 10 </strong>
      
      <div className="area-buttons">
        <button>Salvar</button>
        <button>
          <a href="#">
            Trailer
          </a>
        </button>
      </div>
    
    
    </div>
       
  )
}

export default Filme;