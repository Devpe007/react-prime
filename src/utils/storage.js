import AsyncStorage from '@react-native-async-storage/async-storage';

// Buscar os filmes salvos;
export async function getMoviesSave(key) {
  const myMovies = await AsyncStorage.getItem(key);

  let moviesSave = JSON.parse(myMovies) || [];

  return moviesSave;
};

// Salvar um novo filme;
export async function saveMovie(key, newMovie) {
  let moviesStored = await getMoviesSave(key);

  // se tiver algum filme salvo com esse mesmo ID / ou duplicado precisamos ignorar;
  const hasMovie = moviesStored.some((item) => item.id === newMovie.id);

  if (hasMovie) {
    console.log('Esse filme já existe na sua lista');
    return;
  };

  moviesStored.push(newMovie);

  await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
  console.log('Filme salvo com sucesso');
};

// Deletar algum filme especifico;
export async function deleteMovie(id) {
  let moviesStored = await getMoviesSave('@primeReact');

  let myMovies = moviesStored.filter((item) => (item.id !== id));

  await AsyncStorage.setItem('@primeReact', JSON.stringify(myMovies));
  console.log('Filme deletado com sucesso');

  return myMovies;
};

// Filtrar algum filme se já está salvo;
export async function filerMovie(movie) {
  let moviesStored = await getMoviesSave('@primeReact');

  const movieFilter = moviesStored.find((item) => item.id === movie.id);

  if (movieFilter) {
    return true;
  };

  return false;
};
