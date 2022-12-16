import { useEffect, useState} from 'react';
import api from '../../services/api';

// URL DA API: movie/now_playing?api_key=7f55d4ca94d28d60688e92a275175d62

function Home(){

  const [filmes, setFilmes] = useState([]);

  useEffect(()=>{

    async function loadFilmes(){
      const response = await api.get("movie/now_playing", {
        params:{
         api_key: "7f55d4ca94d28d60688e92a275175d62",
         language: "pt-BR",
         page: 1,
        }
      })
      console.log(response.data.results);
    }

    loadFilmes();
  }, [])
  return(
    <div>
      <h1>BEM VINDO A HOME</h1>
    </div>
  )
}

export default Home;