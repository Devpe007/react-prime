import axios from 'axios';

// URL FILMES EM CARTAZ:
// https://api.themoviedb.org/3/movie/now_playing?api_key=a5ec9a322aa7b727b78cf23c662869d8&language=pt-BR&page=1

export const key = 'a5ec9a322aa7b727b78cf23c662869d8';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default api;
