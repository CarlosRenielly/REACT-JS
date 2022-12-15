import axios from  'axios';
// BASE DA API: https://api.themoviedb.org/3/
// URL DA API: /movie/now_playing?api_key=7f55d4ca94d28d60688e92a275175d62

const api = axios.create({
  baseURL:'https://api.themoviedb.org/3/'
});

export default api;