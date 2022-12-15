import {useEffect, useState} from 'react'
import api from '../../Services/api'
/// URL DA API: /movie/now_playing?api_key=7f55d4ca94d28d60688e92a275175d62

function Home (){
  const [filmes, setFilmes] = useState ([])
  
  useEffect(()=> {
    async function loadFilmes(){
      const response = await api.get('movie/now_playing?', {
        params:{
          api_key:'7f55d4ca94d28d60688e92a275175d62',
          language: 'pt-BR',
          page: 1,
        }
      })
      console.log(response)

    }

  },[])

  return(
    <h1>Olá, seja bem vindo</h1>
  )
}

export default Home